import { useAccount } from 'jazz-react-native';
import { OrderStatus } from '@app/types/types';

const useOrder = () => {
  const { me } = useAccount();

  const confirmOrderItems = (params: {
    id: string;
    isDispatched: boolean;
  }) => {
    const { id } = params;
    // @ts-ignore - Custom root fields
    const order = me?.root?.orders?.find((o: any) => o?.id === id);
    if (order) {
      order.status = OrderStatus.picked_up;
    }
  };

  const markAsDelivered = (params: { id: string; note: string }) => {
    const { id, note } = params;
    // @ts-ignore - Custom root fields
    const order = me?.root?.orders?.find((o: any) => o?.id === id);
    if (order) {
      order.status = 'delivered';
      // TODO: Handle note
    }
  };

  return {
    confirmOrderItems,
    markAsDelivered,
  };
};

export default useOrder;
