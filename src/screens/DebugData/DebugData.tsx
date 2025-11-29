import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSeedData } from '@app/utilities/seedData';

/**
 * Debug screen for seeding test data
 * Add this to your navigation or show conditionally in DEV mode
 */
export const DebugDataScreen = () => {
    const { seedTestOrders, clearAllOrders } = useSeedData();

    const handleSeedData = () => {
        try {
            seedTestOrders();
            Alert.alert('Success', 'Test orders created! Check the Orders tab.');
        } catch (error) {
            Alert.alert('Error', `Failed to seed data: ${error}`);
        }
    };

    const handleClearData = () => {
        Alert.alert(
            'Clear All Orders',
            'Are you sure you want to delete all orders?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Clear',
                    style: 'destructive',
                    onPress: () => {
                        clearAllOrders();
                        Alert.alert('Success', 'All orders cleared');
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Debug Data Tools</Text>
            <Text style={styles.subtitle}>
                Use these tools to populate test data for development
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleSeedData}>
                <Text style={styles.buttonText}>🌱 Seed Test Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.dangerButton]}
                onPress={handleClearData}>
                <Text style={styles.buttonText}>🗑️ Clear All Orders</Text>
            </TouchableOpacity>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                    Note: This will create 2 new test orders with realistic data.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
    },
    dangerButton: {
        backgroundColor: '#EF4444',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    infoBox: {
        marginTop: 24,
        padding: 16,
        backgroundColor: '#E0F2FE',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#3B82F6',
    },
    infoText: {
        fontSize: 14,
        color: '#0369A1',
    },
});
