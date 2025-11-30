import { Platform } from 'react-native';
import {
    signUpWithPasskeys,
    signIn,
    signOut,
} from 'react-native-credentials-manager';
import { getRandomValues } from 'react-native-get-random-values';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    PasskeyRegistrationRequest,
    PasskeyAuthenticationRequest,
    PasskeyRegistrationResponse,
    PasskeyAuthenticationResponse,
    StoredPasskeyCredential,
} from '../types/passkey';
import { AuthErrorCode, PasskeyError } from '../types/authErrors';

const CREDENTIAL_STORAGE_KEY = 'opencourier_passkey_credential';
const RP_ID = 'opencourier.example.com'; // Replace with your actual domain
const RP_NAME = 'OpenCourier';

// Helper to convert bytes to base64
const bytesToBase64 = (bytes: Uint8Array): string => {
    const binString = Array.from(bytes)
        .map((byte) => String.fromCharCode(byte))
        .join('');
    return btoa(binString);
};

// Helper to generate a random challenge
export const generateChallenge = (): string => {
    const randomBytes = new Uint8Array(32);
    getRandomValues(randomBytes);
    return bytesToBase64(randomBytes);
};

export const buildRegistrationRequest = (
    username: string,
    displayName: string
): PasskeyRegistrationRequest => {
    const userId = bytesToBase64(
        new TextEncoder().encode(`user_${Date.now()}_${Math.random().toString(36).substring(2)}`)
    );

    return {
        challenge: generateChallenge(),
        rp: {
            name: RP_NAME,
            id: RP_ID,
        },
        user: {
            id: userId,
            name: username,
            displayName: displayName,
        },
        pubKeyCredParams: [
            { type: 'public-key', alg: -7 }, // ES256
            { type: 'public-key', alg: -257 }, // RS256
        ],
        timeout: 60000,
        attestation: 'none',
        authenticatorSelection: {
            residentKey: 'preferred',
            userVerification: 'preferred',
            authenticatorAttachment: 'platform',
        },
    };
};

export const buildAuthenticationRequest = (
    credentialId?: string
): PasskeyAuthenticationRequest => {
    const request: PasskeyAuthenticationRequest = {
        challenge: generateChallenge(),
        rpId: RP_ID,
        timeout: 60000,
        userVerification: 'preferred',
    };

    if (credentialId) {
        request.allowCredentials = [
            {
                id: credentialId,
                type: 'public-key',
                transports: ['internal'],
            },
        ];
    }

    return request;
};

export const registerPasskey = async (
    username: string
): Promise<PasskeyRegistrationResponse> => {
    try {
        const request = buildRegistrationRequest(username, username);
        const response = await signUpWithPasskeys(request);

        // In a real app, you would send this response to your backend for verification
        // For local-first Jazz, we'll store the credential ID locally

        if (response) {
            // Extract credential ID from response (simplified for now)
            // Note: The actual response structure depends on the platform and library version
            // We might need to parse the attestationObject or clientDataJSON to get the ID
            // For this implementation, we'll assume the library returns the ID or we can derive it

            // Mocking ID extraction for now as the library returns a specific structure
            const credentialId = (response as any).id || (response as any).rawId;

            await storeCredential({
                credentialId: credentialId,
                userId: request.user.id,
                username: username,
                createdAt: Date.now(),
                lastUsedAt: Date.now(),
            });

            return response as PasskeyRegistrationResponse;
        }

        throw new PasskeyError(AuthErrorCode.PASSKEY_REGISTRATION_FAILED);
    } catch (error: any) {
        console.error('Passkey registration error:', error);
        if (error.code === 'UserCanceled' || error.message?.includes('cancelled')) {
            throw new PasskeyError(AuthErrorCode.PASSKEY_CANCELLED, error);
        }
        throw new PasskeyError(AuthErrorCode.PASSKEY_REGISTRATION_FAILED, error);
    }
};

export const authenticateWithPasskey = async (): Promise<PasskeyAuthenticationResponse> => {
    try {
        const storedCredential = await getStoredCredential();
        const request = buildAuthenticationRequest(storedCredential?.credentialId);

        // The signIn method expects an array of options and a params object
        const response = await signIn(['passkeys'], {
            passkeys: request,
        });

        if (response && response.type === 'passkey') {
            if (storedCredential) {
                await storeCredential({
                    ...storedCredential,
                    lastUsedAt: Date.now(),
                });
            }
            return response as unknown as PasskeyAuthenticationResponse;
        }

        throw new PasskeyError(AuthErrorCode.PASSKEY_AUTHENTICATION_FAILED);
    } catch (error: any) {
        console.error('Passkey authentication error:', error);
        if (error.code === 'UserCanceled' || error.message?.includes('cancelled')) {
            throw new PasskeyError(AuthErrorCode.PASSKEY_CANCELLED, error);
        }
        throw new PasskeyError(AuthErrorCode.PASSKEY_AUTHENTICATION_FAILED, error);
    }
};

export const signOutPasskey = async (): Promise<void> => {
    try {
        await signOut();
        await clearStoredCredential();
    } catch (error) {
        console.error('Sign out error:', error);
        // Even if platform sign out fails, we clear local state
        await clearStoredCredential();
    }
};

export const isPasskeySupported = (): boolean => {
    // Basic check - in a real app you might want more sophisticated checks
    // Android API 28+ (Pie) supports passkeys fully
    // iOS 16+ supports passkeys
    return Platform.OS === 'ios' || (Platform.OS === 'android' && Platform.Version >= 28);
};

// Storage utilities
const storeCredential = async (credential: StoredPasskeyCredential): Promise<void> => {
    try {
        await AsyncStorage.setItem(CREDENTIAL_STORAGE_KEY, JSON.stringify(credential));
    } catch (e) {
        console.error('Failed to store credential', e);
    }
};

const getStoredCredential = async (): Promise<StoredPasskeyCredential | null> => {
    try {
        const json = await AsyncStorage.getItem(CREDENTIAL_STORAGE_KEY);
        return json ? JSON.parse(json) : null;
    } catch (e) {
        console.error('Failed to get credential', e);
        return null;
    }
};

const clearStoredCredential = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(CREDENTIAL_STORAGE_KEY);
    } catch (e) {
        console.error('Failed to clear credential', e);
    }
};
