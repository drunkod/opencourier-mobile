export enum AuthErrorCode {
    PASSKEY_CANCELLED = 'PASSKEY_CANCELLED',
    PASSKEY_NOT_SUPPORTED = 'PASSKEY_NOT_SUPPORTED',
    PASSKEY_REGISTRATION_FAILED = 'PASSKEY_REGISTRATION_FAILED',
    PASSKEY_AUTHENTICATION_FAILED = 'PASSKEY_AUTHENTICATION_FAILED',
    PASSKEY_INVALID_CHALLENGE = 'PASSKEY_INVALID_CHALLENGE',
    PASSKEY_INVALID_RESPONSE = 'PASSKEY_INVALID_RESPONSE',
    USER_CANCELLED = 'USER_CANCELLED',
    UNKNOWN_ERROR = 'UNKNOWN_ERROR',
    NETWORK_ERROR = 'NETWORK_ERROR',
}

export interface AuthError {
    code: AuthErrorCode;
    message: string;
    userMessage: string;
    recoverable: boolean;
    originalError?: unknown;
}

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
    [AuthErrorCode.PASSKEY_CANCELLED]: 'Passkey operation was cancelled.',
    [AuthErrorCode.PASSKEY_NOT_SUPPORTED]: 'Passkeys are not supported on this device.',
    [AuthErrorCode.PASSKEY_REGISTRATION_FAILED]: 'Failed to create a passkey. Please try again.',
    [AuthErrorCode.PASSKEY_AUTHENTICATION_FAILED]: 'Failed to sign in with passkey. Please try again.',
    [AuthErrorCode.PASSKEY_INVALID_CHALLENGE]: 'Security challenge failed. Please try again.',
    [AuthErrorCode.PASSKEY_INVALID_RESPONSE]: 'Invalid response from authenticator.',
    [AuthErrorCode.USER_CANCELLED]: 'Operation cancelled by user.',
    [AuthErrorCode.UNKNOWN_ERROR]: 'An unexpected error occurred. Please try again.',
    [AuthErrorCode.NETWORK_ERROR]: 'Network error. Please check your connection.',
};

export class PasskeyError extends Error implements AuthError {
    code: AuthErrorCode;
    userMessage: string;
    recoverable: boolean;
    originalError?: unknown;

    constructor(code: AuthErrorCode, originalError?: unknown, recoverable: boolean = true) {
        super(AUTH_ERROR_MESSAGES[code]);
        this.name = 'PasskeyError';
        this.code = code;
        this.userMessage = AUTH_ERROR_MESSAGES[code];
        this.recoverable = recoverable;
        this.originalError = originalError;
    }
}
