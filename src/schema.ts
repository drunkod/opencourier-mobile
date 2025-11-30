import { co, z } from 'jazz-tools';

export const Location = co.map({
    id: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string(),
    street: z.optional(z.string()),
    houseNumber: z.optional(z.string()),
    state: z.optional(z.string()),
    city: z.optional(z.string()),
    postCode: z.optional(z.string()),
    stateCode: z.optional(z.string()),
    countryCode: z.optional(z.string()),
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
    pickupVerification: co.optional(Verification),
    pickupLocationId: z.string(),
    pickupReadyAt: z.string(),
    pickupDeadlineAt: z.string(),
    dropoffName: z.string(),
    dropoffPhoneNumber: z.string(),
    dropoffBusinessName: z.string(),
    dropoffNotes: z.string(),
    dropoffSellerNotes: z.string(),
    dropoffVerification: co.optional(Verification),
    dropoffReadyAt: z.string(),
    dropoffEta: z.string(),
    dropoffDeadlineAt: z.string(),
    deliverableAction: z.string(),
    undeliverableAction: z.string(),
    undeliverableReason: z.optional(z.string()),
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
    tips: z.optional(z.number()),
    totalCompensation: z.number(),
    pickupTypes: z.array(z.string()),
    // imageType, imageName, imageDate
    idempotencyKey: z.string(),
    externalStoreId: z.string(),
    returnVerification: co.optional(Verification),
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
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.optional(z.string()),
    status: z.optional(z.string()), // UserStatus
    deliverySetting: z.optional(z.string()),
    currentLocation: z.optional(z.object({
        latitude: z.number(),
        longitude: z.number(),
    })),
});

export const UserSettings = co.map({
    vehicleType: z.optional(z.string()),
    preferredAreas: z.array(z.string()),
    shiftAvailability: z.array(z.array(z.string())), // Simplified
    deliveryPreferences: z.array(z.string()),
    foodPreferences: z.array(z.string()),
    earningGoals: z.optional(z.string()),
    deliverySpeed: z.optional(z.string()),
    restaurantTypes: z.array(z.string()),
    cuisineTypes: z.array(z.string()),
    preferredRestaurantPartners: z.array(z.string()),
    dietaryRestrictions: z.array(z.string()),
    payRate: z.optional(z.string()),
    courierId: z.optional(z.string()),
});

export const CourierAccountRoot = co.map({
    orders: OrderList,
    settings: co.optional(UserSettings),
});

export const CourierAccount = co.account({
    root: CourierAccountRoot,
    profile: CourierProfile,
}).withMigration((account) => {
    if (!account.$jazz.has('root')) {
        account.$jazz.set('root', CourierAccountRoot.create({
            orders: OrderList.create([], { owner: account }),
            settings: UserSettings.create({
                vehicleType: 'car',
                preferredAreas: [],
                shiftAvailability: [],
                deliveryPreferences: [],
                foodPreferences: [],
                restaurantTypes: [],
                cuisineTypes: [],
                preferredRestaurantPartners: [],
                dietaryRestrictions: [],
            }, { owner: account }),
        }, { owner: account }));
    }
});
