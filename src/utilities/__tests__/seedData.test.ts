/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-native';
import { useSeedData } from '../seedData';
import { useAccount } from 'jazz-react-native';
import { OrderStatus } from '@app/types/types';

// Mock jazz-react-native
jest.mock('jazz-react-native', () => ({
    useAccount: jest.fn(),
}));

describe('useSeedData', () => {
    let mockAccount: any;

    beforeEach(() => {
        jest.clearAllMocks();
        mockAccount = {
            id: 'test-courier-id',
            root: {
                orders: [],
                settings: {},
            },
        };
        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });
    });

    describe('seedTestOrders', () => {
        it('should create 2 test orders', () => {
            const { result } = renderHook(() => useSeedData());

            result.current.seedTestOrders();

            expect(mockAccount.root.orders).toHaveLength(2);
        });

        it('should create orders with correct structure', () => {
            const { result } = renderHook(() => useSeedData());

            result.current.seedTestOrders();

            const firstOrder = mockAccount.root.orders[0];

            expect(firstOrder).toMatchObject({
                status: OrderStatus.created,
                courierId: 'test-courier-id',
                pickupName: 'Pizza Palace Restaurant',
                dropoffName: 'John Doe',
            });

            expect(firstOrder.orderItems).toHaveLength(2);
            expect(firstOrder.pickupLocation).toBeDefined();
            expect(firstOrder.dropoffLocation).toBeDefined();
            expect(firstOrder.pickupLocationNotes).toEqual([]);
            expect(firstOrder.dropOffLocationNotes).toEqual([]);
        });

        it('should create orders with unique IDs', () => {
            const { result } = renderHook(() => useSeedData());

            result.current.seedTestOrders();

            const [order1, order2] = mockAccount.root.orders;
            expect(order1.id).not.toBe(order2.id);
        });

        it('should create orders with realistic order items', () => {
            const { result } = renderHook(() => useSeedData());

            result.current.seedTestOrders();

            const firstOrder = mockAccount.root.orders[0];
            const firstItem = firstOrder.orderItems[0];

            expect(firstItem).toMatchObject({
                name: 'Large Pepperoni Pizza',
                quantity: 1,
                size: 'L',
                price: 1599,
            });
        });

        it('should handle missing root gracefully', () => {
            mockAccount.root = null;
            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useSeedData());

            result.current.seedTestOrders();

            expect(mockAccount.root).toBeDefined();
            expect(mockAccount.root.orders).toHaveLength(2);
        });

        it('should not create orders if account is not loaded', () => {
            (useAccount as jest.Mock).mockReturnValue({ me: null });

            const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

            const { result } = renderHook(() => useSeedData());
            result.current.seedTestOrders();

            expect(consoleSpy).toHaveBeenCalledWith('[Seed Data] Account not loaded');
            consoleSpy.mockRestore();
        });
    });

    describe('clearAllOrders', () => {
        it('should clear all orders', () => {
            const { result } = renderHook(() => useSeedData());

            // First seed some orders
            result.current.seedTestOrders();
            expect(mockAccount.root.orders).toHaveLength(2);

            // Then clear them
            result.current.clearAllOrders();
            expect(mockAccount.root.orders).toEqual([]);
        });

        it('should handle missing root orders gracefully', () => {
            mockAccount.root.orders = null;
            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useSeedData());

            expect(() => result.current.clearAllOrders()).not.toThrow();
        });

        it('should do nothing if account is not loaded', () => {
            (useAccount as jest.Mock).mockReturnValue({ me: null });

            const { result } = renderHook(() => useSeedData());

            expect(() => result.current.clearAllOrders()).not.toThrow();
        });
    });
});
