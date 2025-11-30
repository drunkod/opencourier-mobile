import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { JazzProvider } from 'jazz-react-native';
import {
    registerPasskey,
    authenticateWithPasskey,
    signOutPasskey,
    isPasskeySupported,
} from '../services/passkeyAuthService';
import { AuthError, AuthErrorCode, PasskeyError } from '../types/authErrors';
import { CourierAccount } from '../schema';

interface JazzAuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    error: AuthError | null;
    signUp: (username: string) => Promise<void>;
    signIn: () => Promise<void>;
    signOut: () => Promise<void>;
    clearError: () => void;
    isPasskeySupported: boolean;
}

const JazzAuthContext = createContext<JazzAuthContextType | undefined>(undefined);

export const useJazzAuth = () => {
    const context = useContext(JazzAuthContext);
    if (!context) {
        throw new Error('useJazzAuth must be used within a JazzAuthProvider');
    }
    return context;
};

interface JazzAuthProviderProps {
    children: ReactNode;
}

export const JazzAuthProvider = ({ children }: JazzAuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<AuthError | null>(null);

    // Check for existing session on mount
    useEffect(() => {
        const checkSession = async () => {
            try {
                // In a real app, we might check if we have a valid token or stored credential
                // For now, we'll just check if we can authenticate silently or if we have a stored user
                // But since passkey usually requires user interaction, we might just check if we have a stored credential ID
                // and wait for explicit sign in, OR if we have a session token.

                // For this implementation, we'll start as unauthenticated unless we implement session persistence
                // separate from the passkey challenge.
                setIsAuthenticated(false);
            } catch (err) {
                console.error('Session check failed', err);
            } finally {
                setIsLoading(false);
            }
        };

        checkSession();
    }, []);

    const signUp = async (username: string) => {
        setIsLoading(true);
        setError(null);
        try {
            await registerPasskey(username);
            setIsAuthenticated(true);
        } catch (err: any) {
            console.error('Sign up failed', err);
            setError(
                err instanceof PasskeyError
                    ? err
                    : {
                        code: AuthErrorCode.UNKNOWN_ERROR,
                        message: err.message || 'Unknown error',
                        userMessage: 'Failed to create account',
                        recoverable: true,
                    }
            );
        } finally {
            setIsLoading(false);
        }
    };

    const signIn = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await authenticateWithPasskey();
            setIsAuthenticated(true);
        } catch (err: any) {
            console.error('Sign in failed', err);
            setError(
                err instanceof PasskeyError
                    ? err
                    : {
                        code: AuthErrorCode.UNKNOWN_ERROR,
                        message: err.message || 'Unknown error',
                        userMessage: 'Failed to sign in',
                        recoverable: true,
                    }
            );
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = async () => {
        setIsLoading(true);
        try {
            await signOutPasskey();
            setIsAuthenticated(false);
        } catch (err) {
            console.error('Sign out failed', err);
        } finally {
            setIsLoading(false);
        }
    };

    const clearError = () => setError(null);

    // We only render JazzProvider when authenticated
    // This ensures that Jazz data is only accessed when the user is logged in
    // For the unauthenticated state, we render children directly (which will show Auth screens)

    // Note: In a real Jazz app, we might want to use 'useDemoAuth' or similar for development
    // but for production with passkeys, we control the JazzProvider rendering.

    // However, JazzProvider needs to be at the root for useAccount to work.
    // If we conditionally render it, useAccount hooks in children might fail if they are rendered
    // when isAuthenticated is false.
    // BUT, our Router should handle showing Auth screens (which don't use Jazz) vs App screens (which do).

    return (
        <JazzAuthContext.Provider
            value={{
                isAuthenticated,
                isLoading,
                error,
                signUp,
                signIn,
                signOut,
                clearError,
                isPasskeySupported: isPasskeySupported(),
            }}
        >
            {isAuthenticated ? (
                <JazzProvider
                    sync={{
                        peer: 'wss://cloud.jazz.tools/?key=demo@example.com', // Replace with real key in production
                        when: 'always',
                    }}
                >
                    {children}
                </JazzProvider>
            ) : (
                children
            )}
        </JazzAuthContext.Provider>
    );
};
