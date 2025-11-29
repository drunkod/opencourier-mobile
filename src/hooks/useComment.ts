import { useAccount } from 'jazz-react-native';
import { NewCommentParams } from '@app/services/types';

const useComment = () => {
  const { me } = useAccount();

  const createComment = (params: NewCommentParams) => {
    const { note, deliveryId, locationId } = params;
    // @ts-ignore - Custom root fields
    const order = me?.root?.orders?.find((o: any) => o?.id === deliveryId);

    if (order) {
      const newNote: any = {
        id: Date.now().toString(),
        note,
        courierId: me.id,
        actor: 'courier',
        locationId,
        deliveryId,
        createdAt: new Date().toISOString(),
        upvotes: 0,
        downvotes: 0,
        currentCourierReaction: '',
      };

      if (order.pickupLocationId === locationId) {
        order.pickupLocationNotes?.push(newNote);
      } else if (order.dropoffLocationId === locationId) {
        order.dropOffLocationNotes?.push(newNote);
      }
    }
  };

  const updateComment = (params: {
    id: string;
    note: string;
  }) => {
    // @ts-ignore - Custom root fields
    me?.root?.orders?.forEach((order: any) => {
      const pickupNote = order?.pickupLocationNotes?.find((n: any) => n?.id === params.id);
      if (pickupNote) {
        pickupNote.note = params.note;
        return;
      }
      const dropoffNote = order?.dropOffLocationNotes?.find((n: any) => n?.id === params.id);
      if (dropoffNote) {
        dropoffNote.note = params.note;
        return;
      }
    });
  };

  const deleteComment = (id: string) => {
    // @ts-ignore - Custom root fields
    me?.root?.orders?.forEach((order: any) => {
      if (order?.pickupLocationNotes) {
        const idx = order.pickupLocationNotes.findIndex((n: any) => n?.id === id);
        if (idx !== -1) {
          order.pickupLocationNotes.splice(idx, 1);
          return;
        }
      }
      if (order?.dropOffLocationNotes) {
        const idx = order.dropOffLocationNotes.findIndex((n: any) => n?.id === id);
        if (idx !== -1) {
          order.dropOffLocationNotes.splice(idx, 1);
          return;
        }
      }
    });
  };

  const addReaction = (params: {
    locationNoteId: string;
    reaction: string;
  }) => {
    // @ts-ignore - Custom root fields
    me?.root?.orders?.forEach((order: any) => {
      const pickupNote = order?.pickupLocationNotes?.find((n: any) => n?.id === params.locationNoteId);
      if (pickupNote) {
        pickupNote.currentCourierReaction = params.reaction;
        return;
      }
      const dropoffNote = order?.dropOffLocationNotes?.find((n: any) => n?.id === params.locationNoteId);
      if (dropoffNote) {
        dropoffNote.currentCourierReaction = params.reaction;
        return;
      }
    });
  };

  return {
    createComment,
    updateComment,
    deleteComment,
    addReaction,
  };
};

export default useComment;
