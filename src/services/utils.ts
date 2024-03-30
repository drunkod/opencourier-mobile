import { OrderSetting } from "@app/types/enums";
import { Order, User } from "@app/types/types";

export function offerToOrder(offer: any): Order {
    return {
          date: offer.deliveryTime,
          id: offer.id,
          courier_id: offer.CourierId,
          customer_name: offer.customerName,
          merchant_id: offer.MerchantId,
          merchant_name: offer.Merchant.name,
          merchant_phone_number: offer.Merchant.phoneNumber,
          created_at: offer.createdAt,
          updated_at: offer.updatedAt,
          merchant_notes_for_courier: offer.merchantNotes,
          customer_notes_for_courier: offer.customerNotes,
          courier_notes_for_customer: offer.courierNotes,
          pickup: offer.pickupCoords,
          dropoff: offer.dropoffCoords,
          undeliverable_action: offer.undeliverableAction,
          undeliverable_reason: offer.undeliverableReason,
          return: offer.return,
          income: {
            currency: offer.currencyCode,
            total_charge: offer.grossRevenue,
            fees: offer.fees,
            pay: offer.pay,
            tips: offer.tips,
          },
          status: offer.status,
          deliveryInstructions: offer.deliveryInstructions,
          pickupInstructions: offer.pickupInstructions,
          items: offer.items,
        }
}

export function courierToUser(courier: any): User {
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