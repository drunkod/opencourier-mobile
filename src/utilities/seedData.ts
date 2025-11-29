import { useAccount } from 'jazz-react-native';
import { OrderStatus } from '@app/types/types';

/**
 * Utility to seed test orders for development
 * Call this from a debug button or on app start in dev mode
 */
export const useSeedData = () => {
    const { me } = useAccount();

    const seedTestOrders = () => {
        if (!me) {
            console.warn('[Seed Data] Account not loaded');
            return;
        }

        console.log('[Seed Data] Creating test orders...');

        const testOrders = [
            {
                id: `order-${Date.now()}-1`,
                pickupName: 'Pizza Palace Restaurant',
                pickupPhoneNumber: '+1234567890',
                pickupBusinessName: 'Pizza Palace',
                pickupNotes: 'Use side entrance',
                pickupLocationId: 'loc-pickup-1',
                pickupReadyAt: new Date().toISOString(),
                pickupDeadlineAt: new Date(Date.now() + 30 * 60000).toISOString(),
                dropoffName: 'John Doe',
                dropoffPhoneNumber: '+1987654321',
                dropoffBusinessName: '',
                dropoffNotes: 'Ring doorbell twice',
                dropoffSellerNotes: 'Extra napkins requested',
                dropoffReadyAt: new Date().toISOString(),
                dropoffEta: new Date(Date.now() + 45 * 60000).toISOString(),
                dropoffDeadlineAt: new Date(Date.now() + 60 * 60000).toISOString(),
                deliverableAction: 'deliver',
                undeliverableAction: 'return',
                dropoffLocationId: 'loc-dropoff-1',
                deliveryTypes: ['leave_at_door'],
                requiresDropoffSignature: 'false',
                requiresId: false,
                orderReference: 'ORD-001',
                orderTotalValue: 2599,
                orderItems: [
                    {
                        name: 'Large Pepperoni Pizza',
                        quantity: 1,
                        size: 'L',
                        dimensions: { length: '14', height: '2', depth: '14' },
                        price: 1599,
                        weight: 2,
                        vatPercentage: 10,
                    },
                    {
                        name: 'Garlic Bread',
                        quantity: 2,
                        size: 'M',
                        dimensions: { length: '8', height: '2', depth: '4' },
                        price: 500,
                        weight: 0.5,
                        vatPercentage: 10,
                    },
                ],
                status: OrderStatus.created,
                customerNotes: ['dont_block_door'],
                currencyCode: 'USD',
                totalCost: 2599,
                fee: 299,
                tips: 0,
                totalCompensation: 299,
                pickupTypes: ['line_up_pickup'],
                idempotencyKey: `idem-${Date.now()}-1`,
                externalStoreId: 'store-123',
                externalId: 'ext-001',
                courierId: me.id,
                partnerId: 'partner-1',
                deliveryQuoteId: 'quote-1',
                createdAt: new Date().toISOString(),
                pickupLocationNotes: [],
                dropOffLocationNotes: [],
                pickupLocation: {
                    id: 'loc-pickup-1',
                    addressLine1: '123 Main St',
                    addressLine2: 'Suite 100',
                    city: 'San Francisco',
                    state: 'CA',
                    postCode: '94102',
                    countryCode: 'US',
                    longitude: -122.4194,
                    latitude: 37.7749,
                    formattedAddress: '123 Main St, Suite 100, San Francisco, CA 94102',
                },
                dropoffLocation: {
                    id: 'loc-dropoff-1',
                    addressLine1: '456 Oak Ave',
                    addressLine2: 'Apt 5B',
                    city: 'San Francisco',
                    state: 'CA',
                    postCode: '94103',
                    countryCode: 'US',
                    longitude: -122.4085,
                    latitude: 37.7699,
                    formattedAddress: '456 Oak Ave, Apt 5B, San Francisco, CA 94103',
                },
            },
            {
                id: `order-${Date.now()}-2`,
                pickupName: 'Burger Joint',
                pickupPhoneNumber: '+1234567891',
                pickupBusinessName: 'Burger Joint',
                pickupNotes: 'Ask for courier pickup',
                pickupLocationId: 'loc-pickup-2',
                pickupReadyAt: new Date().toISOString(),
                pickupDeadlineAt: new Date(Date.now() + 20 * 60000).toISOString(),
                dropoffName: 'Jane Smith',
                dropoffPhoneNumber: '+1987654322',
                dropoffBusinessName: '',
                dropoffNotes: 'Leave at front desk',
                dropoffSellerNotes: '',
                dropoffReadyAt: new Date().toISOString(),
                dropoffEta: new Date(Date.now() + 35 * 60000).toISOString(),
                dropoffDeadlineAt: new Date(Date.now() + 50 * 60000).toISOString(),
                deliverableAction: 'deliver',
                undeliverableAction: 'return',
                dropoffLocationId: 'loc-dropoff-2',
                deliveryTypes: ['meet_at_door'],
                requiresDropoffSignature: 'false',
                requiresId: false,
                orderReference: 'ORD-002',
                orderTotalValue: 1899,
                orderItems: [
                    {
                        name: 'Classic Burger',
                        quantity: 2,
                        size: 'M',
                        dimensions: { length: '6', height: '4', depth: '6' },
                        price: 1299,
                        weight: 1,
                        vatPercentage: 10,
                    },
                    {
                        name: 'Fries',
                        quantity: 2,
                        size: 'L',
                        dimensions: { length: '4', height: '6', depth: '4' },
                        price: 600,
                        weight: 0.5,
                        vatPercentage: 10,
                    },
                ],
                status: OrderStatus.created,
                customerNotes: [],
                currencyCode: 'USD',
                totalCost: 1899,
                fee: 249,
                tips: 0,
                totalCompensation: 249,
                pickupTypes: [],
                idempotencyKey: `idem-${Date.now()}-2`,
                externalStoreId: 'store-124',
                externalId: 'ext-002',
                courierId: me.id,
                partnerId: 'partner-1',
                deliveryQuoteId: 'quote-2',
                createdAt: new Date().toISOString(),
                pickupLocationNotes: [],
                dropOffLocationNotes: [],
                pickupLocation: {
                    id: 'loc-pickup-2',
                    addressLine1: '789 Market St',
                    addressLine2: '',
                    city: 'San Francisco',
                    state: 'CA',
                    postCode: '94104',
                    countryCode: 'US',
                    longitude: -122.4008,
                    latitude: 37.7897,
                    formattedAddress: '789 Market St, San Francisco, CA 94104',
                },
                dropoffLocation: {
                    id: 'loc-dropoff-2',
                    addressLine1: '321 Pine St',
                    addressLine2: 'Floor 3',
                    city: 'San Francisco',
                    state: 'CA',
                    postCode: '94108',
                    countryCode: 'US',
                    longitude: -122.4064,
                    latitude: 37.7916,
                    formattedAddress: '321 Pine St, Floor 3, San Francisco, CA 94108',
                },
            },
        ];

        // Add orders to the account
        // @ts-ignore
        if (!me.root?.orders) {
            // @ts-ignore
            me.root = { orders: [], settings: me.root?.settings || {} };
        }

        testOrders.forEach((order) => {
            // @ts-ignore
            me.root.orders.push(order);
        });

        console.log(`[Seed Data] Created ${testOrders.length} test orders`);
    };

    const clearAllOrders = () => {
        if (!me) return;

        // @ts-ignore
        if (me.root?.orders) {
            // @ts-ignore
            me.root.orders = [];
            console.log('[Seed Data] Cleared all orders');
        }
    };

    return {
        seedTestOrders,
        clearAllOrders,
    };
};
