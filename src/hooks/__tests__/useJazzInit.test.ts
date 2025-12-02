/**
 * @jest-environment node
 */

import { renderHook, waitFor } from '@testing-library/react-native';
import { useJazzInit } from '../useJazzInit';
import { useAccount } from 'jazz-react-native';

// Mock jazz-react-native
jest.mock('jazz-react-native', () => ({
    useAccount: jest.fn(),
}));

describe('useJazzInit', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should initialize profile when account exists but profile is missing', async () => {
        const mockAccount = {
            id: 'test-account-id',
            profile: null,
            root: { orders: [], settings: {} },
            $jazz: {
                set: jest.fn((key, value) => {
                    // @ts-ignore
                    mockAccount[key] = value;
                }),
            },
        };

        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

        const { result } = renderHook(() => useJazzInit());

        await waitFor(() => {
            expect(mockAccount.profile).toBeDefined();
            // @ts-ignore
            expect(mockAccount.profile.firstName).toBe('Courier');
            // @ts-ignore
            expect(mockAccount.profile.lastName).toBe('User');
        });
    });

    it('should initialize root when account exists but root is missing', async () => {
        const mockAccount = {
            id: 'test-account-id',
            profile: { firstName: 'Test', lastName: 'User' },
            root: null,
            $jazz: {
                set: jest.fn((key, value) => {
                    // @ts-ignore
                    mockAccount[key] = value;
                }),
            },
        };

        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

        const { result } = renderHook(() => useJazzInit());

        await waitFor(() => {
            expect(mockAccount.root).toBeDefined();
            // @ts-ignore
            expect(mockAccount.root.orders).toEqual([]);
            // @ts-ignore
            expect(mockAccount.root.settings).toBeDefined();
        });
    });

    it('should not re-initialize if profile already exists', () => {
        const mockAccount = {
            id: 'test-account-id',
            profile: { firstName: 'Existing', lastName: 'User' },
            root: { orders: [], settings: {} },
            $jazz: {
                set: jest.fn(),
            },
        };

        const originalProfile = mockAccount.profile;

        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

        renderHook(() => useJazzInit());

        expect(mockAccount.profile).toBe(originalProfile);
    });

    it('should not re-initialize if root already exists', () => {
        const mockAccount = {
            id: 'test-account-id',
            profile: { firstName: 'Existing', lastName: 'User' },
            root: { orders: [], settings: {} },
            $jazz: {
                set: jest.fn(),
            },
        };

        const originalRoot = mockAccount.root;

        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

        renderHook(() => useJazzInit());

        expect(mockAccount.root).toBe(originalRoot);
    });

    it('should return me from useAccount', () => {
        const mockAccount = {
            id: 'test-account-id',
            profile: { firstName: 'Test', lastName: 'User' },
            root: { orders: [], settings: {} },
            $jazz: {
                set: jest.fn(),
            },
        };

        (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

        const { result } = renderHook(() => useJazzInit());

        expect(result.current.me).toBe(mockAccount);
    });

    it('should handle undefined account gracefully', () => {
        (useAccount as jest.Mock).mockReturnValue({ me: null });

        const { result } = renderHook(() => useJazzInit());

        expect(result.current.me).toBeNull();
    });
});
