### Key Points on OpenCourier
- **Overview**: OpenCourier is an open-source protocol designed to create a decentralized, community-owned ecosystem for local deliveries, emphasizing worker agency, transparency, and customizable tools to address issues like unfair power dynamics in gig economy platforms.
- **Components**: It includes a mobile app for couriers (built with React Native), a backend server (using NestJS and PostgreSQL), an admin dashboard (Next.js), and a website.
- **Building and Setup**: The reference implementation allows deployment of instances; start by cloning repositories from GitHub, setting up environments like Node.js and Docker, and running development commands—evidence suggests it's feasible for developers familiar with these stacks, though customization may require additional configuration for production.
- **Potential Challenges**: Setup involves handling databases, authentication, and optional blockchain elements; testing with real data is recommended, and community contributions are encouraged for enhancements.

### What is OpenCourier?
Research indicates OpenCourier aims to foster a network where couriers can select platforms based on their values, with interoperable systems enabling data auditing and shared open-source tools. The protocol defines standardized communication for mobile apps, instances (community hubs), and requesters (e.g., restaurants), promoting a shift from centralized models.

### Core Technologies
The stack appears modern and scalable: React Native for cross-platform mobile, NestJS with Prisma for backend, Next.js for web interfaces, and PostgreSQL for data storage. Docker supports containerization, and tools like Swagger aid API testing.

### High-Level Build Process
To get started, clone the repositories (e.g., via `git clone https://github.com/Princeton-HCI/opencourier-mobile.git`), install dependencies with Yarn or npm, configure environments (e.g., .env files), and run development servers. For full deployment, set up a database and consider cloud hosting like Google Cloud Run.

---

OpenCourier represents a forward-thinking approach to reimagining the gig economy's delivery sector through decentralization and community governance. Developed by researchers at Princeton's Human-Computer Interaction (HCI) lab, this open-source initiative seeks to mitigate prevalent challenges in platforms like Uber or DoorDash, such as opaque algorithms, unequal power structures between workers and corporations, and misaligned incentives that prioritize profits over community needs. By establishing an open protocol, OpenCourier enables the creation of interoperable, worker-centric delivery networks where couriers can fluidly move between community-owned "instances" (independent hubs managed by cooperatives or local groups), requesters (e.g., businesses needing deliveries) can negotiate services transparently, and data sharing promotes accountability. This ecosystem draws inspiration from decentralized technologies while focusing on practical, real-world usability for local logistics.

The protocol's architecture is structured around three interconnected layers: the registry layer for discovering instances, the app-instance layer for courier interactions, and the instance-requester layer for service negotiations. This design allows for flexibility—instances can customize matching algorithms (e.g., based on proximity, seniority, or preferences) and compensation models without breaking interoperability. For instance, couriers might input preferences like preferred delivery zones (in GeoJSON format), vehicle types, or earning goals, which instances use to assign tasks equitably. Transparency is embedded through features like anonymized data exports in CSV format, enabling audits by researchers or regulators, as seen in compliance with urban mandates in places like Chicago and New York. The reference implementation demonstrates this in action: a prototype mobile app handles onboarding via a hard-coded registry, manages delivery workflows (e.g., accepting/rejecting tasks), and integrates community notes for practical tips like parking advice.

Technically, OpenCourier leverages established open-source tools to lower barriers to entry. The mobile app, built with React Native, supports iOS and Android, allowing couriers to interact with multiple instances seamlessly. The backend, powered by NestJS (a Node.js framework), uses Prisma as an ORM for type-safe database queries, PostgreSQL for storage (with PostGIS for geospatial features), and Passport for authentication. Swagger UI provides interactive API documentation, while Jest handles testing (though some setups note it may need fixes). Docker containerizes the environment, making it portable for local development or cloud deployment. The admin dashboard, based on Next.js, offers a web-based interface for instance operators to monitor tasks, configure settings, and manage operations. Optional blockchain integration appears via an Externally Owned Account (EOA) for payment handling (e.g., using testnet ETH and USDC on Base Sepolia), suggesting potential for decentralized finance elements in compensation.

Deploying an OpenCourier instance involves cloning the relevant GitHub repositories and following component-specific setups. Organizations can host their own instances, tailoring features like collective decision-making (e.g., voting on algorithms) or extending endpoints based on worker feedback. The mobile app connects to these instances via standardized APIs, ensuring couriers can switch platforms without data silos. Future enhancements could include privacy-protected queries or broader governance models for registries, which might be hard-coded, blockchain-based, or third-party managed. Developers are encouraged to contribute, particularly in areas like auditing tools or preference expansions, to evolve the ecosystem collaboratively.

To illustrate the components and their roles:

| Component | Description | Key Technologies | Primary Use Case |
|-----------|-------------|------------------|------------------|
| Mobile App | Courier-facing application for task management, preferences, and community notes. | React Native, npm/Yarn for dependencies, Xcode for iOS builds. | Couriers accept deliveries, set preferences (e.g., delivery zones, vehicle types), and access notes. |
| Backend Server | Handles API endpoints for order fulfillment, data disclosure, and integrations. | NestJS, Prisma, PostgreSQL, Docker, Passport (auth), Swagger UI. | Manages communications between apps, instances, and requesters; supports webhooks for providers like Stripe or Twilio. |
| Admin Dashboard | Web interface for instance management. | Next.js, npm/Yarn/pnpm/Bun for development. | Operators monitor deliveries, configure algorithms, and handle admin tasks. |
| Website | Public-facing site for information and contact. | Likely static or Next.js-based (inferred from related repos). | Provides overviews, protocol details, and collaboration invites. |

Detailed setup steps for each component are as follows, based on repository analyses. Prerequisites generally include Node.js (v20+), Yarn, Docker Desktop, and Git. Always copy sample .env files (e.g., from local.env) and update with your credentials (e.g., DB_URL, JWT_SECRET_KEY).

**Mobile App Setup (opencourier-mobile)**:
1. Clone the repo: `git clone https://github.com/Princeton-HCI/opencourier-mobile.git`.
2. Set up React Native environment (follow https://reactnative.dev/docs/environment-setup).
3. Run `npm install` to install dependencies.
4. For iOS: Navigate to `ios/` and run `pod install`; then `react-native run-ios` or open `OpenCourier.xcworkspace` in Xcode and build/run.
5. For archiving (production .ipa): Use Xcode commands like `xcodebuild -workspace ios/OpenCourier.xcworkspace -scheme OpenCourier -configuration Release -archivePath ios/build/OpenCourier.xcarchive`.
6. Test on devices via TestFlight (iOS) or Google Play (Android links available on the project site).

**Backend Server Setup (opencourier-backend)**:
1. Clone: `git clone https://github.com/Princeton-HCI/opencourier-backend.git` and navigate to `server/`.
2. Copy `.env` from `local.env` and configure (e.g., DB credentials: host=localhost, port=5442, user=admin, password=admin, db=opencourier-v2).
3. Install: `yarn install`.
4. Start DB: `yarn run docker:db` (uses docker-compose.db.yml for PostgreSQL).
5. Generate Prisma client: `yarn run prisma:generate`.
6. Migrate DB: `yarn run db:migrate-up`.
7. Run dev server: `yarn run start:debug` or `yarn dev` (auto-handles init; runs on http://localhost:3000, Swagger at /api).
8. For production: `yarn build` to compile TypeScript; deploy dist/ folder. CI/CD pushes to develop branch build Docker images for Cloud Run.
9. Generate EOA for payments: `node gen-eoa.js`; fund with testnet faucets.
10. Use tools: `yarn format` (Prettier), `yarn lint` (ESLint), `npm typecheck` (TypeScript checks).
11. Explore DB: `npx prisma studio` or PGAdmin at http://localhost:5050.
12. Note: ARM systems (e.g., M1 Macs) may need platform-specific Docker images for PostGIS.

**Admin Dashboard Setup (opencourier-adminweb)**:
1. Clone: `git clone https://github.com/Princeton-HCI/opencourier-adminweb.git`.
2. Copy `.env` from `local.env`.
3. Install latest: `yarn add next@latest react@latest react-dom@latest`.
4. Run dev: `yarn dev` (or npm/pnpm/bun equivalents; accesses http://localhost:3000).
5. Deploy: Use Vercel Platform (recommended) or follow Next.js docs.

**Website Setup (opencourier-web)**:
1. Clone: `git clone https://github.com/Princeton-HCI/opencourier-web.git`.
2. Limited details available, but infer standard web setup: `yarn install` if Yarn-based, then `yarn dev`.
3. Host statically or via a framework like Next.js for dynamic elements.

Once set up, test integrations: The backend supports webhooks from providers (e.g., Chowly for orders, Stripe for payments) via Ngrok for local tunneling. For a full instance, connect the mobile app to the backend URL, register in a registry (start with hard-coded), and simulate requests. Customization examples include extending preference endpoints (e.g., adding dietary restrictions) or implementing governance features. While the setup is developer-oriented, it aligns with open-source principles, inviting contributions to refine the protocol—such as enhancing auditing tools or exploring risks in registry governance. This comprehensive approach could empower local communities to build resilient, value-aligned delivery systems, though real-world adoption may depend on addressing scalability and regulatory hurdles.

### Key Citations
- [OpenCourier Website](https://opencourier.cs.princeton.edu/)
- [OpenCourier: an Open Protocol for Building a Decentralized Ecosystem (arXiv Paper)](https://arxiv.org/pdf/2511.02455)
- [Princeton-HCI/opencourier-mobile GitHub Repo](https://github.com/Princeton-HCI/opencourier-mobile)
- [Princeton-HCI/opencourier-backend GitHub Repo](https://github.com/Princeton-HCI/opencourier-backend)
- [Princeton-HCI/opencourier-adminweb GitHub Repo](https://github.com/Princeton-HCI/opencourier-adminweb)
- [OpenCourier Overview (Additional Site Mirror)](https://opencourier.cs.princeton.edu/)