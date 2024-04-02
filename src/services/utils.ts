import { OrderSetting } from '@app/types/enums';
import { Comment, Location, Order, User } from '@app/types/types';

export function parseOrder(offer: any): Order {
  return {
    date: offer.deliveryTime,
    id: offer.id,
    courier_id: offer.CourierId,
    customer_name: offer.customerName,
    customerPhoneNumber: offer.customerPhoneNumber,
    merchant_id: offer.Merchant.id,
    merchant_name: offer.Merchant.name,
    merchant_phone_number: offer.Merchant.phoneNumber,
    created_at: offer.createdAt,
    updated_at: offer.updatedAt,
    merchant_notes_for_courier: offer.merchantNotes,
    customer_notes_for_courier: offer.customerNotes,
    courier_notes_for_customer: offer.courierNotes,
    community_notes_for_merchant: offer.Merchant.Comments.map((comment: any) =>
      parseComment(comment),
    ),
    community_notes_for_dropoff_location: offer.dropoffLocation.Comments.map(
      (comment: any) => parseComment(comment),
    ),
    pickup: parseLocation(offer.pickupLocation),
    dropoff: parseLocation(offer.dropoffLocation),
    return: offer.returnLocation
      ? parseLocation(offer.returnLocation)
      : undefined,
    undeliverable_action: offer.undeliverableAction,
    undeliverable_reason: offer.undeliverableReason,
    income: {
      currencyCode: offer.currencyCode,
      totalCharge: offer.totalCharge,
      totalCompensation: offer.totalCompensation,
      fees: offer.fees,
      pay: offer.pay,
      tips: offer.tips,
    },
    status: offer.status,
    deliveryTypes: offer.deliveryTypes,
    pickupTypes: offer.pickupTypes,
    items: offer.items,
  };
}

export function parseUser(courier: any): User {
  return {
    id: courier.id,
    firstname: courier.firstName,
    lastname: courier.lastName,
    location: courier.currentLocation,
    status: courier.status,
    orderSetting: courier.orderSetting as OrderSetting,
    rejectedOrders: courier.rejectedOffers,
  };
}

function parseComment(comment: any): Comment {
  return {
    id: comment.id,
    text: comment.text,
    likes: comment.likes,
    commentableId: comment.commentableId,
    commentableType: comment.commentableType,
    commentor: comment.CourierId,
  };
}

function parseLocation(location: any): Location {
  return {
    id: location.id,
    addressLine1: location.addressLine1,
    addressLine2: location.addressLine2,
    street: location.street,
    houseNumber: location.houseNumber,
    state: location.state,
    city: location.city,
    postCode: location.postCode,
    stateCode: location.stateCode,
    countryCode: location.countryCode,
    formattedAddress: location.formattedAddress,
    latitude: location.latitude,
    longitude: location.longitude,
  };
}
