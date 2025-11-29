/**
 * @jest-environment node
 */

import { renderHook, act } from '@testing-library/react-native';
import { useHomeOrders } from '../useHomeOrders';
import { useAccount } from 'jazz-react-native';
import { OrderStatus } from '@app/types/types';

// Mock dependencies
jest.mock('jazz-react-native', () => ({
    useAccount: jest.fn(),
}));

jest.mock('../useUser', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        user: {
            id: 'test-user',
            deliverySetting: 'manual',
        },
    })),
}));

describe('useHomeOrders', () => {
    let mockAccount: any;

    beforeEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
        jest.useFakeTimers();

        mockAccount = {
            id: 'test-courier-id',
            root: {
                orders: [
                    {
                        id: 'order-1',
                        status: OrderStatus.created,
                        pickupName: 'Restaurant A',
                    },
                    {
                        id: 'order-2',
                        status: OrderStatus.dispatched,
                        pickupName: 'Restaurant B',
                    },
                    {
                        id: 'order-3',
                        status: OrderStatus.canceled,
                        pickupName: 'Restaurant C',
                    },
                ],
            },
        };
        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    describe('order filtering', () => {
        it('should filter new orders correctly', () => {
            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.dataSourceNew).toHaveLength(1);
            expect(result.current.dataSourceNew[0].id).toBe('order-1');
        });

        it('should filter in-progress orders correctly', () => {
            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.dataSourceInProgress).toHaveLength(1);
            expect(result.current.dataSourceInProgress[0].id).toBe('order-2');
        });

        it('should filter history orders correctly', () => {
            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.dataSourceHistory).toHaveLength(1);
            expect(result.current.dataSourceHistory[0].id).toBe('order-3');
        });

        it('should handle empty orders array', () => {
            mockAccount.root.orders = [];
            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.dataSourceNew).toEqual([]);
            expect(result.current.dataSourceInProgress).toEqual([]);
            expect(result.current.dataSourceHistory).toEqual([]);
        });
    });

    describe('acceptOrderFn', () => {
        it('should change order status to dispatched', () => {
            const { result } = renderHook(() => useHomeOrders());

            result.current.acceptOrderFn('order-1');

            const acceptedOrder = mockAccount.root.orders.find((o: any) => o.id === 'order-1');
            expect(acceptedOrder.status).toBe(OrderStatus.dispatched);
        });

        it('should stop expiration timer when accepting', () => {
            const { result } = renderHook(() => useHomeOrders());

            // Set up a timer
            const timer = {
                stop: jest.fn(),
            };
            result.current.offerExpirationTimers.set('order-1', timer as any);

            result.current.acceptOrderFn('order-1');

            expect(timer.stop).toHaveBeenCalled();
        });
    });

    describe('declineOrderFn', () => {
        it('should change order status to canceled', () => {
            const { result } = renderHook(() => useHomeOrders());

            result.current.declineOrderFn('order-1');

            const declinedOrder = mockAccount.root.orders.find((o: any) => o.id === 'order-1');
            expect(declinedOrder.status).toBe(OrderStatus.canceled);
        });
    });

    describe('comment voting', () => {
        it('should upvote a comment', () => {
            const { result } = renderHook(() => useHomeOrders());

            act(() => {
                result.current.upvoteCommentTemp('note-1');
            });

            expect(result.current.upDownVotedNoteIds[0]).toContain('note-1');
            expect(result.current.upDownVotedNoteIds[1]).not.toContain('note-1');
        });

        it('should downvote a comment', () => {
            const { result } = renderHook(() => useHomeOrders());

            act(() => {
                result.current.downvoteCommentTemp('note-1');
            });

            expect(result.current.upDownVotedNoteIds[1]).toContain('note-1');
            expect(result.current.upDownVotedNoteIds[0]).not.toContain('note-1');
        });

        it('should switch from upvote to downvote', () => {
            const { result } = renderHook(() => useHomeOrders());

            act(() => {
                result.current.upvoteCommentTemp('note-1');
                result.current.downvoteCommentTemp('note-1');
            });

            expect(result.current.upDownVotedNoteIds[0]).not.toContain('note-1');
            expect(result.current.upDownVotedNoteIds[1]).toContain('note-1');
        });
    });

    describe('loading state', () => {
        it('should return isLoading false when account is loaded', () => {
            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.isLoading).toBe(false);
        });

        it('should return isLoading true when account is not loaded', () => {
            (useAccount as jest.Mock).mockReturnValue({ me: null });

            const { result } = renderHook(() => useHomeOrders());

            expect(result.current.isLoading).toBe(true);
        });
    });
});
