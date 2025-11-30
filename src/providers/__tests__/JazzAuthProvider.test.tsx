import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { JazzAuthProvider, useJazzAuth } from '../JazzAuthProvider';
import * as PasskeyAuthService from '../../services/passkeyAuthService';
import { AuthErrorCode, PasskeyError } from '../../types/authErrors';
import { Text, Button } from 'react-native';

// Mock PasskeyAuthService
jest.mock('../../services/passkeyAuthService', () => ({
    registerPasskey: jest.fn(),
    authenticateWithPasskey: jest.fn(),
    signOutPasskey: jest.fn(),
    isPasskeySupported: jest.fn(() => true),
}));

// Mock JazzProvider
jest.mock('jazz-react-native', () => ({
    JazzProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const TestComponent = () => {
    const { isAuthenticated, isLoading, signUp, signIn, signOut, error } = useJazzAuth();

    if (isLoading) return <Text>Loading...</Text>;
    if (isAuthenticated) return (
        <>
            <Text>Authenticated</Text>
            <Button title="Sign Out" onPress={() => signOut()} />
        </>
    );

    return (
        <>
            <Text>Unauthenticated</Text>
            {error && <Text testID="error-message">{error.userMessage}</Text>}
            <Button title="Sign Up" onPress={() => signUp('testuser')} />
            <Button title="Sign In" onPress={() => signIn()} />
        </>
    );
};

describe('JazzAuthProvider', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render children and start unauthenticated', async () => {
        const { getByText } = render(
            <JazzAuthProvider>
                <TestComponent />
            </JazzAuthProvider>
        );

        // Initial loading state might be brief, wait for Unauthenticated
        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());
    });

    it('should handle sign up success', async () => {
        (PasskeyAuthService.registerPasskey as jest.Mock).mockResolvedValue({});

        const { getByText } = render(
            <JazzAuthProvider>
                <TestComponent />
            </JazzAuthProvider>
        );

        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());

        fireEvent.press(getByText('Sign Up'));

        await waitFor(() => expect(getByText('Authenticated')).toBeTruthy());
        expect(PasskeyAuthService.registerPasskey).toHaveBeenCalledWith('testuser');
    });

    it('should handle sign up failure', async () => {
        const error = new PasskeyError(AuthErrorCode.PASSKEY_REGISTRATION_FAILED);
        (PasskeyAuthService.registerPasskey as jest.Mock).mockRejectedValue(error);

        const { getByText, getByTestId } = render(
            <JazzAuthProvider>
                <TestComponent />
            </JazzAuthProvider>
        );

        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());

        fireEvent.press(getByText('Sign Up'));

        await waitFor(() => expect(getByTestId('error-message')).toBeTruthy());
        expect(getByText('Unauthenticated')).toBeTruthy();
    });

    it('should handle sign in success', async () => {
        (PasskeyAuthService.authenticateWithPasskey as jest.Mock).mockResolvedValue({});

        const { getByText } = render(
            <JazzAuthProvider>
                <TestComponent />
            </JazzAuthProvider>
        );

        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());

        fireEvent.press(getByText('Sign In'));

        await waitFor(() => expect(getByText('Authenticated')).toBeTruthy());
        expect(PasskeyAuthService.authenticateWithPasskey).toHaveBeenCalled();
    });

    it('should handle sign out', async () => {
        (PasskeyAuthService.authenticateWithPasskey as jest.Mock).mockResolvedValue({});
        (PasskeyAuthService.signOutPasskey as jest.Mock).mockResolvedValue(undefined);

        const { getByText } = render(
            <JazzAuthProvider>
                <TestComponent />
            </JazzAuthProvider>
        );

        // Sign in first
        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());
        fireEvent.press(getByText('Sign In'));
        await waitFor(() => expect(getByText('Authenticated')).toBeTruthy());

        // Sign out
        fireEvent.press(getByText('Sign Out'));
        await waitFor(() => expect(getByText('Unauthenticated')).toBeTruthy());
        expect(PasskeyAuthService.signOutPasskey).toHaveBeenCalled();
    });
});
