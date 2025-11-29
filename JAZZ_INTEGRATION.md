# Jazz Tools Integration

This app has been refactored to use **Jazz Tools** for local-first data storage and synchronization, removing the dependency on the NestJS backend.

## Quick Start

### 1. Launch the App

```bash
npm run ios
# or
npm run android
```

The app will automatically:
- Create a local Jazz account
- Initialize your courier profile
- Set up empty orders and settings

### 2. Add Test Data

Navigate to the Debug Data screen (you'll need to add it to your navigation first) and tap **"Seed Test Orders"** to create sample deliveries.

Or use the seed function programmatically:

```typescript
import { useSeedData } from '@app/utilities/seedData';

const { seedTestOrders } = useSeedData();
seedTestOrders(); // Creates 2 test orders
```

### 3. Test the Flow

- View orders on the home screen
- Accept an order
- Mark items as picked up
- Complete delivery
- Add notes/comments

All data is stored locally and syncs via Jazz Cloud when online.

## Key Files

| File | Purpose |
|------|---------|
| `src/hooks/useJazzInit.ts` | Auto-initializes account data |
| `src/utilities/seedData.ts` | Test data generator |
| `src/screens/DebugData/DebugData.tsx` | Debug UI for data management |
| `src/hooks/useUser.ts` | User profile access |
| `src/hooks/useHomeOrders.ts` | Order list management |
| `src/hooks/useOrder.ts` | Individual order operations |
| `src/hooks/useComment.ts` | Comments/notes functionality |

## Architecture

```
JazzProvider (App.tsx)
    ↓
useJazzInit (auto-initialization)
    ↓
Hooks (useUser, useHomeOrders, etc.)
    ↓
    ├─ Profile Data (me.profile)
    └─ Orders Data (me.root.orders)
```

## Data Structure

```typescript
Account {
  id: string
  profile: {
    firstName: string
    lastName: string
    phoneNumber: string
    status: 'ONLINE' | 'OFFLINE' | 'BUSY'
    deliverySetting: string
    currentLocation: { latitude, longitude }
  }
  root: {
    orders: Order[]
    settings: UserSettings
  }
}
```

## Offline-First Benefits

✅ **No internet required** - App works fully offline  
✅ **Instant updates** - Changes reflected immediately  
✅ **Auto-sync** - Syncs when connection available  
✅ **Conflict-free** - CRDTs handle concurrent edits  
✅ **Privacy-first** - Data stays local unless explicitly shared  

## Development

### Clearing Data

```typescript
const { clearAllOrders } = useSeedData();
clearAllOrders();
```

### Production Sync Peer

Replace the demo peer in `App.tsx`:

```typescript
<JazzProvider
  sync={{
    peer: 'wss://cloud.jazz.tools/?key=YOUR_API_KEY',
    when: 'always',
  }}
>
```

Get your API key at [dashboard.jazz.tools](https://dashboard.jazz.tools)

## Migration from Backend

> **Note:** Existing backend data will NOT be automatically migrated.

To migrate:
1. Export data from NestJS backend
2. Create a migration script using `useSeedData` as a template
3. Import and create Jazz CoValues

## Learn More

- [Jazz Documentation](https://jazz.tools/docs)
- [React Native Example](https://github.com/garden-co/jazz/tree/main/examples/chat-rn)
- [Walkthrough](file:///home/reader/.gemini/antigravity/brain/da1d4293-7a15-4fc6-a8ce-b6dfb7a3a851/walkthrough.md)
