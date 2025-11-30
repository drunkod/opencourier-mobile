import {
    registerPasskey,
    authenticateWithPasskey,
    signOutPasskey,
    generateChallenge,
    buildRegistrationRequest,
    buildAuthenticationRequest,
} from '../passkeyAuthService';
import { signUpWithPasskeys, signIn, signOut } from 'react-native-credentials-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthErrorCode, PasskeyError } from '../../types/authErrors';

// Mock dependencies
jest.mock('react-native-credentials-manager', () => ({
    signUpWithPasskeys: jest.fn(),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
}));

jest.mock('react-native-get-random-values', () => ({
    getRandomValues: jest.fn((arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Math.floor(Math.random() * 256);
        }
        return arr;
    }),
}));

describe('PasskeyAuthService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('generateChallenge', () => {
        it('should generate a base64 string', () => {
            const challenge = generateChallenge();
            expect(typeof challenge).toBe('string');
            expect(challenge.length).toBeGreaterThan(0);
        });
    });

    describe('buildRegistrationRequest', () => {
        it('should build a valid registration request', () => {
            const username = 'testuser';
            const displayName = 'Test User';
            const request = buildRegistrationRequest(username, displayName);

            expect(request.user.name).toBe(username);
            expect(request.user.displayName).toBe(displayName);
            expect(request.challenge).toBeDefined();
            expect(request.rp.name).toBe('OpenCourier');
        });
    });

    describe('registerPasskey', () => {
        it('should successfully register a passkey', async () => {
            const mockResponse = {
                id: 'credential-id-123',
                rawId: 'raw-id-123',
                response: {
                    clientDataJSON: 'client-data',
                    attestationObject: 'attestation',
                },
                type: 'public-key',
            };

            (signUpWithPasskeys as jest.Mock).mockResolvedValue(mockResponse);

            const result = await registerPasskey('testuser');

            expect(signUpWithPasskeys).toHaveBeenCalled();
            expect(AsyncStorage.setItem).toHaveBeenCalled();
            expect(result).toEqual(mockResponse);
        });

        it('should handle registration cancellation', async () => {
            const error = new Error('User cancelled');
            (error as any).code = 'UserCanceled';
            (signUpWithPasskeys as jest.Mock).mockRejectedValue(error);

            await expect(registerPasskey('testuser')).rejects.toThrow(PasskeyError);
            try {
                await registerPasskey('testuser');
            } catch (e: any) {
                expect(e.code).toBe(AuthErrorCode.PASSKEY_CANCELLED);
            }
        });

        it('should handle registration failure', async () => {
            (signUpWithPasskeys as jest.Mock).mockRejectedValue(new Error('Unknown error'));

            await expect(registerPasskey('testuser')).rejects.toThrow(PasskeyError);
            try {
                await registerPasskey('testuser');
            } catch (e: any) {
                expect(e.code).toBe(AuthErrorCode.PASSKEY_REGISTRATION_FAILED);
            }
        });
    });

    describe('authenticateWithPasskey', () => {
        it('should successfully authenticate with passkey', async () => {
            const mockCredential = {
                credentialId: 'credential-id-123',
                userId: 'user-id-123',
                username: 'testuser',
                createdAt: 1234567890,
                lastUsedAt: 1234567890,
            };

            const mockResponse = {
                id: 'credential-id-123',
                rawId: 'raw-id-123',
                response: {
                    clientDataJSON: 'client-data',
                    authenticatorData: 'auth-data',
                    signature: 'signature',
                },
                type: 'passkey',
            };

            (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockCredential));
            (signIn as jest.Mock).mockResolvedValue(mockResponse);

            const result = await authenticateWithPasskey();

            expect(AsyncStorage.getItem).toHaveBeenCalled();
            expect(signIn).toHaveBeenCalled();
            expect(result).toEqual(mockResponse);
        });

        it('should handle authentication failure', async () => {
            (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);
            (signIn as jest.Mock).mockRejectedValue(new Error('Auth failed'));

            await expect(authenticateWithPasskey()).rejects.toThrow(PasskeyError);
        });
    });

    describe('signOutPasskey', () => {
        it('should sign out and clear credentials', async () => {
            await signOutPasskey();

            expect(signOut).toHaveBeenCalled();
            expect(AsyncStorage.removeItem).toHaveBeenCalled();
        });
    });
});
