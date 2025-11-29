import { OrderStatus } from '@app/types/types';
import { useEffect, useState } from 'react';
import { AUTO_ACCEPT_DECLINE_TIMER } from '@app/utilities/constants';
import { OrderSetting } from '@app/types/enums';
import useUser from './useUser';
import { useAccount } from 'jazz-react-native';

class Timer {
  started: Date;
  callback: () => void;
  delay: number;
  id: NodeJS.Timeout;

  constructor(callback: () => void, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.started = new Date();
    this.id = setTimeout(this.callback, this.delay);
  }

  stop() {
    clearTimeout(this.id);
  }

  getTimeLeftMilli() {
    return this.started ? this.started.valueOf() + this.delay - Date.now() : 0;
  }
}

export const useHomeOrders = () => {
  const { me } = useAccount();

  // @ts-ignore - Custom root fields
  const orders = me?.root?.orders || [];

  const dataSourceNew = orders.filter((o: any) => o && o.status === OrderStatus.created);
  const dataSourceInProgress = orders.filter((o: any) =>
    o && [OrderStatus.dispatched, OrderStatus.picked_up, OrderStatus.dropped_off].includes(o.status as OrderStatus)
  );
  const dataSourceHistory = orders.filter((o: any) =>
    o && [OrderStatus.canceled, 'delivered'].includes(o.status)
  );

  const [offerExpirationTimers, setOfferExpirationTimers] = useState<
    Map<string, Timer>
  >(new Map());

  //Temp fix
  const [upDownVotedNoteIds, setUpDownVotedNoteIds] = useState<string[][]>([
    [],
    [],
  ]);

  const { user } = useUser();

  const acceptOrderFn = (orderId: string) => {
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);

    const order = (orders as any[]).find((o: any) => o?.id === orderId);
    if (order) {
      order.status = OrderStatus.dispatched;
    }
  };

  const declineOrderFn = (orderId: string) => {
    offerExpirationTimers.get(orderId)?.stop();
    offerExpirationTimers.delete(orderId);

    const order = (orders as any[]).find((o: any) => o?.id === orderId);
    if (order) {
      order.status = OrderStatus.canceled;
    }
  };

  useEffect(() => {
    if (dataSourceNew.length > 0) {
      const newOfferExpirationTimers = new Map(offerExpirationTimers);
      dataSourceNew.forEach((order: any) => {
        if (order && !newOfferExpirationTimers.has(order.id)) {
          newOfferExpirationTimers.set(
            order.id,
            new Timer(
              () =>
                user!.deliverySetting === OrderSetting.auto_accept
                  ? acceptOrderFn(order.id)
                  : declineOrderFn(order.id),
              AUTO_ACCEPT_DECLINE_TIMER,
            ),
          );
        }
      });
      setOfferExpirationTimers(newOfferExpirationTimers);
    }
  }, [dataSourceNew.length, user?.deliverySetting]);

  const upvoteCommentTemp = (noteId: string) => {
    if (!upDownVotedNoteIds[0].includes(noteId)) {
      setUpDownVotedNoteIds([
        [...upDownVotedNoteIds[0], noteId],
        upDownVotedNoteIds[1].filter(e => e != noteId),
      ]);
    }
  };

  const downvoteCommentTemp = (noteId: string) => {
    if (!upDownVotedNoteIds[1].includes(noteId)) {
      setUpDownVotedNoteIds([
        upDownVotedNoteIds[0].filter(e => e != noteId),
        [...upDownVotedNoteIds[1], noteId],
      ]);
    }
  };

  return {
    dataSourceNew,
    dataSourceHistory,
    dataSourceInProgress,
    offerExpirationTimers,
    setOfferExpirationTimers,
    acceptOrderFn,
    declineOrderFn,
    //Temp fix
    upDownVotedNoteIds,
    upvoteCommentTemp,
    downvoteCommentTemp,
    isLoading: !me,
    refetchNew: () => { },
    refetchInProgress: () => { },
    refechHistory: () => { },
  };
};
