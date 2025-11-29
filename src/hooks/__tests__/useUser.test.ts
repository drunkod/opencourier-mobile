/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-native';
import useUser from '../useUser';
import { useAccount } from 'jazz-react-native';
import { UserStatus } from '@app/types/types';

// Mock jazz-react-native
jest.mock('jazz-react-native', () => ({
    useAccount: jest.fn(),
}));

describe('useUser', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('user object creation', () => {
        it('should return user object when profile exists', () => {
            const mockAccount = {
                id: 'test-id',
                profile: {
                    firstName: 'John',
                    lastName: 'Doe',
                    phoneNumber: '+1234567890',
                    status: UserStatus.Online,
                    deliverySetting: 'manual',
                    currentLocation: { latitude: 37.7749, longitude: -122.4194 },
                },
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            expect(result.current.user).toMatchObject({
                id: 'test-id',
                email: 'local@user',
                role: ['COURIER'],
                firstName: 'John',
                lastName: 'Doe',
                phoneNumber: '+1234567890',
                status: UserStatus.Online,
                deliverySetting: 'manual',
            });
        });

        it('should return undefined when profile does not exist', () => {
            const mockAccount = {
                id: 'test-id',
                profile: null,
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            expect(result.current.user).toBeUndefined();
        });

        it('should handle missing account', () => {
            (useAccount as jest.Mock).mockReturnValue({ me: null });

            const { result } = renderHook(() => useUser());

            expect(result.current.user).toBeUndefined();
            expect(result.current.isLoading).toBe(true);
        });

        it('should use default values for missing fields', () => {
            const mockAccount = {
                id: 'test-id',
                profile: {},
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            expect(result.current.user?.firstName).toBe('Local');
            expect(result.current.user?.lastName).toBe('Courier');
            expect(result.current.user?.status).toBe(UserStatus.Offline);
        });
    });

    describe('updateStatus', () => {
        it('should update user status', () => {
            const mockAccount = {
                id: 'test-id',
                profile: {
                    firstName: 'John',
                    status: UserStatus.Offline,
                },
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            result.current.updateStatus(UserStatus.Online);

            expect(mockAccount.profile.status).toBe(UserStatus.Online);
        });

        it('should handle missing profile gracefully', () => {
            const mockAccount = {
                id: 'test-id',
                profile: null,
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            expect(() => result.current.updateStatus(UserStatus.Online)).not.toThrow();
        });
    });

    describe('updateDeliverySettings', () => {
        it('should update delivery settings', () => {
            const mockAccount = {
                id: 'test-id',
                profile: {
                    deliverySetting: 'manual',
                },
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            result.current.updateDeliverySettings('auto_accept');

            expect(mockAccount.profile.deliverySetting).toBe('auto_accept');
        });
    });

    describe('updateUserLocation', () => {
        it('should update user location', () => {
            const mockAccount = {
                id: 'test-id',
                profile: {
                    currentLocation: null,
                },
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            const newLocation = { latitude: 40.7128, longitude: -74.0060 };
            result.current.updateUserLocation(newLocation);

            expect(mockAccount.profile.currentLocation).toEqual(newLocation);
        });
    });

    describe('loading state', () => {
        it('should return isLoading true when account is not loaded', () => {
            (useAccount as jest.Mock).mockReturnValue({ me: null });

            const { result } = renderHook(() => useUser());

            expect(result.current.isLoading).toBe(true);
        });

        it('should return isLoading false when account is loaded', () => {
            const mockAccount = {
                id: 'test-id',
                profile: { firstName: 'John' },
            };

            (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

            const { result } = renderHook(() => useUser());

            expect(result.current.isLoading).toBe(false);
        });
    });
});
