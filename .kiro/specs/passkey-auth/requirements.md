# Requirements Document

## Introduction

This document specifies the requirements for implementing passkey-based authentication in the OpenCourier mobile application using Jazz Tools and react-native-credentials-manager. The feature will enable users to authenticate using FIDO2/WebAuthn passkeys, providing a secure, passwordless authentication experience that works across devices. The implementation will integrate with Jazz Tools' local-first architecture for seamless data synchronization.

## Glossary

- **Passkey**: A FIDO2/WebAuthn credential that enables passwordless authentication using biometrics or device PIN
- **Jazz Tools**: A local-first database framework that provides real-time sync, authentication, and data management
- **react-native-credentials-manager**: A React Native library implementing Android Credential Manager API and iOS AuthenticationServices for passkey management
- **CourierAccount**: The Jazz CoValue schema representing a courier user's account with profile and root data
- **Relying Party (RP)**: The server/service that verifies passkey credentials (Jazz Cloud in this case)
- **WebAuthn**: Web Authentication API standard for passwordless authentication
- **Challenge**: A cryptographic nonce used during passkey registration and authentication
- **Authenticator**: The device or security key that creates and stores passkeys

## Requirements

### Requirement 1: Passkey Registration

**User Story:** As a new courier, I want to register using a passkey, so that I can securely access my account without remembering passwords.

#### Acceptance Criteria

1. WHEN the user taps "Create Account with Passkey" on the Welcome screen, THE PasskeyAuthService SHALL initiate a passkey registration flow using react-native-credentials-manager's `signUpWithPasskeys` method.

2. WHEN the passkey registration is initiated, THE PasskeyAuthService SHALL generate a valid WebAuthn registration request with the user's identifier and Jazz Cloud relying party information.

3. WHEN the device authenticator successfully creates a passkey, THE PasskeyAuthService SHALL receive the registration response containing the credential ID and public key attestation.

4. WHEN the registration response is received, THE PasskeyAuthService SHALL create a new CourierAccount in Jazz with the passkey credential linked to the account.

5. IF the user cancels the passkey registration prompt, THEN THE PasskeyAuthService SHALL display an appropriate message and allow the user to retry.

6. IF the device does not support passkeys (Android < API 28 or iOS < 16), THEN THE AuthScreen SHALL display an alternative authentication option or informative message.

### Requirement 2: Passkey Authentication

**User Story:** As a returning courier, I want to sign in using my passkey, so that I can quickly and securely access my account.

#### Acceptance Criteria

1. WHEN the user taps "Sign In with Passkey" on the Welcome screen, THE PasskeyAuthService SHALL initiate a passkey authentication flow using react-native-credentials-manager's `signIn` method with the "passkeys" option.

2. WHEN the passkey authentication is initiated, THE PasskeyAuthService SHALL generate a valid WebAuthn authentication request with the Jazz Cloud relying party information.

3. WHEN the device authenticator successfully verifies the passkey, THE PasskeyAuthService SHALL receive the authentication response containing the signed challenge.

4. WHEN the authentication response is received, THE PasskeyAuthService SHALL load the existing CourierAccount from Jazz using the credential ID.

5. IF no matching passkey is found on the device, THEN THE PasskeyAuthService SHALL display an appropriate error message suggesting registration.

6. IF the user cancels the passkey authentication prompt, THEN THE PasskeyAuthService SHALL allow the user to retry or choose an alternative method.

### Requirement 3: Jazz Provider Integration

**User Story:** As a developer, I want the passkey authentication to integrate with Jazz Provider, so that authenticated users have their data synced automatically.

#### Acceptance Criteria

1. WHEN a user successfully authenticates with a passkey, THE JazzProvider SHALL be configured with the authenticated account credentials.

2. WHILE the user is authenticated, THE JazzProvider SHALL maintain sync with Jazz Cloud using the "always" sync mode.

3. WHEN the app launches with a previously authenticated passkey, THE JazzProvider SHALL automatically restore the session and sync data.

4. WHEN the user signs out, THE PasskeyAuthService SHALL call react-native-credentials-manager's `signOut` method to clear credential state.

5. IF the Jazz sync connection fails, THEN THE App SHALL continue to function in offline mode with local data.

### Requirement 4: Authentication UI

**User Story:** As a courier, I want a clear and intuitive authentication screen, so that I can easily sign in or create an account.

#### Acceptance Criteria

1. THE AuthScreen SHALL display a "Sign In with Passkey" button prominently on the Welcome screen.

2. THE AuthScreen SHALL display a "Create Account with Passkey" button for new users.

3. WHILE a passkey operation is in progress, THE AuthScreen SHALL display a loading indicator and disable authentication buttons.

4. WHEN an authentication error occurs, THE AuthScreen SHALL display a user-friendly error message with retry option.

5. THE AuthScreen SHALL maintain the existing app styling with NoiseBG background and OpenDeli branding.

6. WHERE the platform supports it (iOS), THE AuthScreen SHALL offer "Sign In with Apple" as an alternative authentication method.

### Requirement 5: Account Migration

**User Story:** As an existing user, I want my account data preserved when using passkey authentication, so that I don't lose my delivery history and settings.

#### Acceptance Criteria

1. WHEN a new CourierAccount is created via passkey, THE CourierAccount migration SHALL initialize the root with empty orders list and default settings.

2. WHEN a new CourierAccount is created via passkey, THE CourierAccount migration SHALL initialize the profile with default courier information.

3. THE CourierAccount schema SHALL remain compatible with the existing schema structure for orders, settings, and profile data.

### Requirement 6: Error Handling and Recovery

**User Story:** As a courier, I want clear feedback when authentication fails, so that I can understand and resolve any issues.

#### Acceptance Criteria

1. IF the passkey registration fails due to a network error, THEN THE PasskeyAuthService SHALL display "Unable to connect. Please check your internet connection and try again."

2. IF the passkey authentication fails due to invalid credentials, THEN THE PasskeyAuthService SHALL display "Passkey not recognized. Please try again or create a new account."

3. IF the device biometric authentication fails, THEN THE PasskeyAuthService SHALL allow the user to retry using device PIN or pattern.

4. THE PasskeyAuthService SHALL log authentication errors for debugging purposes without exposing sensitive information.

5. IF multiple consecutive authentication failures occur (3 or more), THEN THE AuthScreen SHALL suggest contacting support or waiting before retrying.
