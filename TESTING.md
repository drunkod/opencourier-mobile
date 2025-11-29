# OpenCourier Mobile - Testing Guide

## Overview

This testing suite ensures the Jazz-powered OpenCourier mobile app works correctly. Tests cover data initialization, order management, user profile handling, and seed data utilities.

## Test Structure

```
src/
├── hooks/
│   └── __tests__/
│       ├── useJazzInit.test.ts
│       ├── useUser.test.ts
│       └── useHomeOrders.test.ts
└── utilities/
    └── __tests__/
        └── seedData.test.ts
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

### Run Specific Test File
```bash
npm test -- useJazzInit
```

## Test Coverage

### useJazzInit Tests
- ✅ Profile initialization when missing
- ✅ Root initialization when missing
- ✅ Prevents re-initialization of existing data
- ✅ Returns account object
- ✅ Handles undefined account

### useUser Tests
- ✅ Creates user object from profile
- ✅ Returns undefined when profile missing
- ✅ Uses default values for missing fields
- ✅ Updates user status
- ✅ Updates delivery settings
- ✅ Updates user location
- ✅ Loading state management

### useHomeOrders Tests
- ✅ Filters orders by status (new, in-progress, history)
- ✅ Accepts orders (changes status to dispatched)
- ✅ Declines orders (changes status to canceled)
- ✅ Manages offer expiration timers
- ✅ Upvote/downvote comments
- ✅ Handles empty orders array
- ✅ Loading state management

### seedData Tests
- ✅ Creates 2 test orders
- ✅ Orders have correct structure
- ✅ Generates unique order IDs
- ✅ Creates realistic order items
- ✅ Handles missing root gracefully
- ✅ Clears all orders
- ✅ Validates account exists before seeding

## Writing New Tests

### Example Test Structure

```typescript
/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-native';
import { useYourHook } from '../useYourHook';
import { useAccount } from 'jazz-react-native';

jest.mock('jazz-react-native', () => ({
  useAccount: jest.fn(),
}));

describe('useYourHook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should do something', () => {
    const mockAccount = {
      id: 'test-id',
      // ... mock data
    };

    (useAccount as jest.Mock).mockReturnValue({ me: mockAccount });

    const { result } = renderHook(() => useYourHook());

    expect(result.current.someValue).toBe(expectedValue);
  });
});
```

## Mocking Jazz

Since we're using `// @ts-ignore` for custom fields in production code, tests mock the `useAccount` hook from `jazz-react-native`:

```typescript
jest.mock('jazz-react-native', () => ({
  useAccount: jest.fn(),
}));
```

Then in each test, set up the mock return value:

```typescript
const mockAccount = {
  id: 'test-id',
  profile: { firstName: 'Test' },
  root: { orders: [] },
};

(useAccount as jest.Mock).mockReturnValue({ me: mockAccount });
```

## Best Practices

1. **Always clear mocks** between tests using `beforeEach(() => jest.clearAllMocks())`
2. **Test edge cases** - null/undefined accounts, missing fields, empty arrays
3. **Test mutations** - Verify that Jazz objects are modified correctly
4. **Use descriptive test names** - Should read like documentation
5. **Group related tests** - Use `describe` blocks to organize tests

## CI/CD Integration

Add to your CI pipeline:

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage
```

## Troubleshooting

### "Cannot find module jazz-react-native"
- Ensure `jest.config.json` has the correct `transformIgnorePatterns`
- Try clearing Jest cache: `npx jest --clearCache`

### "ReferenceError: AbortController is not defined"
- Add to `jest.config.json`:
  ```json
  "setupFiles": ["<rootDir>/jest.setup.js"]
  ```
- Create `jest.setup.js`:
  ```javascript
  global.AbortController = AbortController;
  ```

### Tests timing out
- Increase timeout: `jest.setTimeout(10000);` in test file
- Check for unresolved promises

## Future Tests to Add

- [ ] `useOrder.test.ts` - Test order state transitions
- [ ] `useComment.test.ts` - Test comment CRUD operations
- [ ] `useUserSettings.test.ts` - Test settings management
- [ ] Integration tests for complete order flows
- [ ] E2E tests using Detox or Appium

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Testing React Hooks](https://react-hooks-testing-library.com/)
