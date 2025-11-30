import { useJazzAuth } from '../providers/JazzAuthProvider';

/**
 * Hook to access passkey authentication state and methods.
 * This is a convenience wrapper around useJazzAuth.
 */
export const usePasskeyAuth = () => {
    const auth = useJazzAuth();

    return {
        ...auth,
        // Add any additional passkey-specific helpers here if needed
        // For now, useJazzAuth provides everything required
    };
};
