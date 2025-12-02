import { co, z } from 'jazz-tools';

export const Location = co.map({
    id: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string(),
    street: z.string().optional(),
    houseNumber: z.string().optional(),
    state: z.string().optional(),
    city: z.string().optional(),
    postCode: z.string().optional(),
    stateCode: z.string().optional(),
    countryCode: z.string().optional(),
    longitude: z.number(),
    latitude: z.number(),
    formattedAddress: z.string(),
});

export const OrderItem = co.map({
    name: z.string(),
    quantity: z.number(),
    size: z.string(),
    dimensions: z.object({
        length: z.string(),
        height: z.string(),
        depth: z.string(),
    }),
    price: z.number(),
    weight: z.number(),
    vatPercentage: z.number(),
});

export const Verification = co.map({
    signature: z.boolean(),
    signatureRequirement: z.object({
        enabled: z.boolean(),
        collectSignerName: z.boolean(),
        collectSignerRelationship: z.boolean(),
    }),
    barcodes: z.array(
        z.object({
            value: z.string(),
            type: z.string(),
        })
    ),
    identification: z.object({
        minAge: z.number(),
        noSobrietyCheck: z.boolean(),
    }),
    picture: z.boolean(),
});

export const Note = co.map({
    id: z.string(),
    note: z.string(),
    courierId: z.string(),
    actor: z.string(),
    locationId: z.string(),
    deliveryId: z.string(),
    createdAt: z.string(),
    upvotes: z.number(),
    downvotes: z.number(),
    currentCourierReaction: z.string(),
});

export const Order = co.map({
    id: z.string(),
    pickupName: z.string(),
    pickupPhoneNumber: z.string(),
    pickupBusinessName: z.string(),
    pickupNotes: z.string(),
    pickupVerification: Verification.optional(),
    pickupLocationId: z.string(),
    pickupReadyAt: z.string(),
    pickupDeadlineAt: z.string(),
    dropoffName: z.string(),
    dropoffPhoneNumber: z.string(),
    dropoffBusinessName: z.string(),
    dropoffNotes: z.string(),
    dropoffSellerNotes: z.string(),
    dropoffVerification: Verification.optional(),
    dropoffReadyAt: z.string(),
    dropoffEta: z.string(),
    dropoffDeadlineAt: z.string(),
    deliverableAction: z.string(),
    undeliverableAction: z.string(),
    undeliverableReason: z.string().optional(),
    dropoffLocationId: z.string(),
    deliveryTypes: z.array(z.string()),
    requiresDropoffSignature: z.string(),
    requiresId: z.boolean(),
    orderReference: z.string(),
    orderTotalValue: z.number(),
    orderItems: co.list(OrderItem),
    status: z.string(),
    customerNotes: z.array(z.string()),
    currencyCode: z.string(),
    totalCost: z.number(),
    fee: z.number(),
    // pay: any
    tips: z.number().optional(),
    totalCompensation: z.number(),
    pickupTypes: z.array(z.string()),
    // imageType, imageName, imageDate
    idempotencyKey: z.string(),
    externalStoreId: z.string(),
    returnVerification: Verification.optional(),
    externalId: z.string(),
    courierId: z.string(),
    partnerId: z.string(),
    deliveryQuoteId: z.string(),
    createdAt: z.string(),
    pickupLocationNotes: co.list(Note),
    dropOffLocationNotes: co.list(Note),
    pickupLocation: Location,
    dropoffLocation: Location,
});

export const OrderList = co.list(Order);

export const CourierProfile = co.profile({
  name: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.string().optional(),
  status: z.string().optional(),
  deliverySetting: z.string().optional(),
  currentLocation: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .optional(),
});

export const UserSettings = co.map({
    vehicleType: z.string().optional(),
    preferredAreas: z.array(z.string()),
    shiftAvailability: z.array(z.array(z.string())), // Simplified
    deliveryPreferences: z.array(z.string()),
    foodPreferences: z.array(z.string()),
    earningGoals: z.string().optional(),
    deliverySpeed: z.string().optional(),
    restaurantTypes: z.array(z.string()),
    cuisineTypes: z.array(z.string()),
    preferredRestaurantPartners: z.array(z.string()),
    dietaryRestrictions: z.array(z.string()),
    payRate: z.string().optional(),
    courierId: z.string().optional(),
});

export const CoMap = co.map({
    orders: OrderList,
    settings: UserSettings.optional(),
});
