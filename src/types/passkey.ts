export interface PasskeyRegistrationRequest {
    challenge: string;
    rp: {
        name: string;
        id: string;
    };
    user: {
        id: string;
        name: string;
        displayName: string;
    };
    pubKeyCredParams: Array<{
        type: 'public-key';
        alg: number;
    }>;
    timeout?: number;
    attestation?: 'none' | 'direct' | 'indirect';
    excludeCredentials?: Array<{
        id: string;
        type: 'public-key';
        transports?: string[];
    }>;
    authenticatorSelection?: {
        authenticatorAttachment?: 'platform' | 'cross-platform';
        requireResidentKey?: boolean;
        residentKey?: 'required' | 'preferred' | 'discouraged';
        userVerification?: 'required' | 'preferred' | 'discouraged';
    };
}

export interface PasskeyAuthenticationRequest {
    challenge: string;
    timeout?: number;
    rpId: string;
    allowCredentials?: Array<{
        id: string;
        type: 'public-key';
        transports?: string[];
    }>;
    userVerification?: 'required' | 'preferred' | 'discouraged';
}

export interface PasskeyRegistrationResponse {
    id: string;
    rawId: string;
    response: {
        clientDataJSON: string;
        attestationObject: string;
    };
    type: 'public-key';
}

export interface PasskeyAuthenticationResponse {
    id: string;
    rawId: string;
    response: {
        clientDataJSON: string;
        authenticatorData: string;
        signature: string;
        userHandle?: string;
    };
    type: 'public-key';
}

export interface StoredPasskeyCredential {
    credentialId: string;
    userId: string;
    username: string;
    createdAt: number;
    lastUsedAt: number;
}
