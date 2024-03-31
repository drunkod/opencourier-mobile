import { OrderSetting } from '@app/types/enums';
import { Order, User } from '@app/types/types';

export function parseOrder(offer: any): Order {
  return {
    date: offer.deliveryTime,
    id: offer.id,
    courier_id: offer.CourierId,
    customer_name: offer.customerName,
    customerPhoneNumber: offer.customerPhoneNumber,
    merchant_id: offer.MerchantId,
    merchant_name: offer.Merchant.name,
    merchant_phone_number: offer.Merchant.phoneNumber,
    created_at: offer.createdAt,
    updated_at: offer.updatedAt,
    merchant_notes_for_courier: offer.merchantNotes,
    customer_notes_for_courier: offer.customerNotes,
    courier_notes_for_customer: offer.courierNotes,
    pickup: offer.pickupLocation,
    dropoff: offer.dropoffLocation,
    return: offer.returnLocation,
    undeliverable_action: offer.undeliverableAction,
    undeliverable_reason: offer.undeliverableReason,
    income: {
      currencyCode: offer.currencyCode,
      totalCharge: offer.grossRevenue,
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


