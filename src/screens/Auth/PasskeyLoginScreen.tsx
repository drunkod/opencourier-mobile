import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { useJazzAuth } from '../../providers/JazzAuthProvider';
import { AuthErrorCode } from '../../types/authErrors';

export const PasskeyLoginScreen = () => {
    const { signIn, signUp, isLoading, error, isPasskeySupported, clearError } = useJazzAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');

    const handleAction = async () => {
        if (isLoading) return;

        if (error) {
            clearError();
        }

        if (isSignUp) {
            if (!username.trim()) {
                Alert.alert('Error', 'Please enter a username');
                return;
            }
            await signUp(username);
        } else {
            await signIn();
        }
    };

    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        clearError();
        setUsername('');
    };

    if (!isPasskeySupported) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.title}>Not Supported</Text>
                    <Text style={styles.message}>
                        Passkeys are not supported on this device or platform version.
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>OpenCourier</Text>
                <Text style={styles.subtitle}>
                    {isSignUp ? 'Create an account' : 'Welcome back'}
                </Text>

                {isSignUp && (
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Enter your username"
                            autoCapitalize="none"
                            autoCorrect={false}
                            editable={!isLoading}
                        />
                    </View>
                )}

                {error && (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>{error.userMessage}</Text>
                    </View>
                )}

                <TouchableOpacity
                    style={[styles.button, isLoading && styles.buttonDisabled]}
                    onPress={handleAction}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>
                            {isSignUp ? 'Sign Up with Passkey' : 'Sign In with Passkey'}
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.switchButton}
                    onPress={toggleMode}
                    disabled={isLoading}
                >
                    <Text style={styles.switchButtonText}>
                        {isSignUp
                            ? 'Already have an account? Sign In'
                            : "Don't have an account? Sign Up"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1a1a1a',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 48,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 24,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        width: '100%',
        height: 56,
        backgroundColor: '#007AFF',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        shadowColor: '#007AFF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
        shadowOpacity: 0,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    switchButton: {
        padding: 16,
    },
    switchButtonText: {
        color: '#007AFF',
        fontSize: 14,
    },
    errorContainer: {
        width: '100%',
        padding: 12,
        backgroundColor: '#ffebee',
        borderRadius: 8,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#ffcdd2',
    },
    errorText: {
        color: '#d32f2f',
        textAlign: 'center',
        fontSize: 14,
    },
    message: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 16,
    },
});
