Directory structure:
└── garden-co-locality/
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    ├── .eslintrc
    ├── .lintstagedrc.json
    ├── .prettierignore
    ├── .prettierrc
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   ├── page.tsx
    │   ├── [orgId]/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   ├── issue/
    │   │   │   └── [issue]/
    │   │   │       └── page.tsx
    │   │   ├── members/
    │   │   │   └── page.tsx
    │   │   ├── my-issues/
    │   │   │   └── page.tsx
    │   │   ├── settings/
    │   │   │   ├── page.tsx
    │   │   │   └── teams/
    │   │   │       ├── page.tsx
    │   │   │       └── [teamId]/
    │   │   │           └── page.tsx
    │   │   ├── team/
    │   │   │   └── [teamId]/
    │   │   │       └── issues/
    │   │   │           └── page.tsx
    │   │   └── teams/
    │   │       └── page.tsx
    │   ├── invite/
    │   │   └── [...creds]/
    │   │       └── page.tsx
    │   └── new-org/
    │       └── page.tsx
    ├── components/
    │   ├── providers.tsx
    │   ├── user-avatar.tsx
    │   ├── common/
    │   │   ├── issues/
    │   │   │   ├── assignee-user.tsx
    │   │   │   ├── Comment.tsx
    │   │   │   ├── CommentSection.tsx
    │   │   │   ├── create-issue-modal-provider.tsx
    │   │   │   ├── group-issues.tsx
    │   │   │   ├── issue-attachments.tsx
    │   │   │   ├── issue-detail.tsx
    │   │   │   ├── issue-grid.tsx
    │   │   │   ├── issue-line.tsx
    │   │   │   ├── issue-sidebar.tsx
    │   │   │   ├── Issue.tsx
    │   │   │   ├── issues.tsx
    │   │   │   ├── label-badge.tsx
    │   │   │   ├── my-issues-list.tsx
    │   │   │   ├── priority-selector.tsx
    │   │   │   ├── search-issues.tsx
    │   │   │   ├── status-selector.tsx
    │   │   │   └── sub-issues.tsx
    │   │   ├── members/
    │   │   │   ├── invite-member-form.tsx
    │   │   │   ├── invite-member-modal-provider.tsx
    │   │   │   ├── invite-member-modal.tsx
    │   │   │   ├── member-line.tsx
    │   │   │   ├── members.tsx
    │   │   │   └── use-members.tsx
    │   │   └── teams/
    │   │       ├── create-team-modal.tsx
    │   │       ├── team-color-picker.tsx
    │   │       ├── team-issues-list.tsx
    │   │       ├── team-settings-content.tsx
    │   │       ├── teams-list-container.tsx
    │   │       └── teams.tsx
    │   ├── layout/
    │   │   ├── main-layout.tsx
    │   │   ├── settings-layout.tsx
    │   │   ├── theme-provider.tsx
    │   │   ├── theme-toggle.tsx
    │   │   ├── headers/
    │   │   │   ├── issues/
    │   │   │   │   ├── filter.tsx
    │   │   │   │   ├── header-nav.tsx
    │   │   │   │   ├── header-options.tsx
    │   │   │   │   └── header.tsx
    │   │   │   ├── members/
    │   │   │   │   ├── header-nav.tsx
    │   │   │   │   ├── header-options.tsx
    │   │   │   │   └── header.tsx
    │   │   │   └── teams/
    │   │   │       ├── header-nav.tsx
    │   │   │       ├── header-options.tsx
    │   │   │       └── header.tsx
    │   │   └── sidebar/
    │   │       ├── app-sidebar.tsx
    │   │       ├── help-button.tsx
    │   │       ├── nav-inbox.tsx
    │   │       ├── nav-teams.tsx
    │   │       ├── nav-workspace.tsx
    │   │       ├── org-switcher.tsx
    │   │       ├── settings-sidebar.tsx
    │   │       └── create-new-issue/
    │   │           ├── assignee-selector.tsx
    │   │           ├── create-issue-form.tsx
    │   │           ├── index.tsx
    │   │           ├── label-selector.tsx
    │   │           ├── priority-selector.tsx
    │   │           ├── status-selector.tsx
    │   │           └── team-selector.tsx
    │   └── ui/
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── collapsible.tsx
    │       ├── command.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── popover.tsx
    │       ├── progress.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       ├── sheet.tsx
    │       ├── sidebar.tsx
    │       ├── skeleton.tsx
    │       ├── sonner.tsx
    │       ├── switch.tsx
    │       ├── table.tsx
    │       ├── textarea.tsx
    │       └── tooltip.tsx
    ├── hooks/
    │   ├── use-get-presence.tsx
    │   ├── use-mobile.ts
    │   └── use-set-presence.tsx
    ├── lib/
    │   ├── jazz-schema.mermaid
    │   ├── jazz-schema.ts
    │   ├── priorities.tsx
    │   ├── status.tsx
    │   └── utils.ts
    ├── store/
    │   ├── create-issue-store.ts
    │   ├── invite-member-store.ts
    │   ├── search-store.ts
    │   └── view-store.ts
    └── .cursor/
        └── rules/
            └── optimal-data-loading.mdc


Files Content:

================================================
FILE: README.md
================================================
# Locality - Slim Linear Clone powered by Jazz

A modern issue tracking and project management application inspired by [Linear](https://linear.app), built with Next.js, React 19, TypeScript, and Tailwind CSS. This application uses Jazz as its data layer for real-time collaboration and state management.

![image](public/banner.png)

## ✨ Features

- **Organization Management**: Create and manage organizations with custom teams
- **Issue Tracking**: Create, assign, and track issues with priorities and statuses
- **Team Collaboration**: Organize work by teams with dedicated workspaces
- **Real-time Updates**: See presence information of team members
- **Rich Content Editing**: Comment system with rich text editing via TipTap
- **Labels & Attachments**: Organize issues with labels and attach files
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Jazz Tools, Zustand
- **UI Components**: Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Remix Icons, Lucide React
- **Animations**: Motion
- **Editor**: TipTap
- **Notifications**: Sonner

## 🏗️ Architecture

The application is built using Next.js App Router architecture with a modern component-based approach:

- **App Router**: Page routing based on file system with dynamic routes
- **Server Components**: Leveraging Next.js server components for improved performance
- **Data Layer**: Jazz provides a real-time collaborative data model
- **Component Structure**: Modular component design with clear separation of concerns
- **Authentication & Authorization**: Built-in user management via Jazz Auth + Passkeys
- **Real-time Collaboration**: Presence indicators and live updates

## 📁 Project Structure

```
slim-linear-clone/
├── app/                    # Next.js App Router pages and layouts
│   ├── [orgId]/            # Organization-specific routes
│   │   ├── issue/          # Issue detail pages
│   │   ├── members/        # Organization members management
│   │   ├── my-issues/      # Personal issues view
│   │   ├── settings/       # Organization settings
│   │   ├── team/           # Team-specific views
│   │   └── teams/          # Teams overview
│   ├── invite/             # User invitation flow
│   └── new-org/            # Create new organization flow
├── components/             # React components
│   ├── common/             # Shared domain components
│   │   ├── issues/         # Issue-related components
│   │   ├── members/        # Member management components
│   │   └── teams/          # Team-related components
│   ├── layout/             # Layout components
│   │   ├── headers/        # Header components
│   │   └── sidebar/        # Sidebar components
│   └── ui/                 # UI primitives and base components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and data schema
└── store/                  # State management
```

## 📊 Data Model

The application uses a rich data model defined in `jazz-schema.ts`:

- **Organization**: Top-level entity that contains teams and members
- **Team**: Group within an organization that owns issues
- **Issue**: Task or project item with status, priority, and assignee
- **Comment**: Discussion attached to issues
- **Label**: Categorization for issues with color coding
- **Attachment**: Files attached to issues or comments
- **UserProfile**: User information with online presence

The schema leverages Jazz's collaborative data types (CoMap, CoList, CoFeed) to enable real-time collaboration and updates.

## 🧩 UI Components

The UI is built with a combination of:

- **Radix UI primitives**: Accessible, unstyled components
- **shadcn/ui**: Styled components built on Radix
- **Custom components**: Domain-specific components for issues, teams, etc.

The design follows modern UI patterns with a clean, minimal aesthetic similar to Linear.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 💻 Development Practices

- **TypeScript**: Strict typing for all components and functions
- **Component Architecture**: Small, reusable components
- **Server/Client Separation**: Clear boundaries between server and client code
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Built on accessible primitives from Radix UI

## 📄 License

MIT



================================================
FILE: components.json
================================================
{
   "$schema": "https://ui.shadcn.com/schema.json",
   "style": "new-york",
   "rsc": true,
   "tsx": true,
   "tailwind": {
      "config": "",
      "css": "app/globals.css",
      "baseColor": "zinc",
      "cssVariables": true,
      "prefix": ""
   },
   "aliases": {
      "components": "@/components",
      "utils": "@/lib/utils",
      "ui": "@/components/ui",
      "lib": "@/lib",
      "hooks": "@/hooks"
   },
   "iconLibrary": "lucide"
}



================================================
FILE: eslint.config.mjs
================================================
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript')];

export default eslintConfig;



================================================
FILE: next.config.ts
================================================
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   devIndicators: false,
};

export default nextConfig;



================================================
FILE: package.json
================================================
{
   "name": "circle",
   "version": "0.1.0",
   "private": true,
   "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint",
      "format": "prettier --write .",
      "prepare": "husky install"
   },
   "dependencies": {
      "@hookform/resolvers": "^4.1.2",
      "@radix-ui/react-alert-dialog": "^1.1.6",
      "@radix-ui/react-avatar": "^1.1.3",
      "@radix-ui/react-checkbox": "^1.1.4",
      "@radix-ui/react-collapsible": "^1.1.3",
      "@radix-ui/react-dialog": "^1.1.6",
      "@radix-ui/react-dropdown-menu": "^2.1.6",
      "@radix-ui/react-label": "^2.1.2",
      "@radix-ui/react-popover": "^1.1.6",
      "@radix-ui/react-progress": "^1.1.2",
      "@radix-ui/react-select": "^2.1.6",
      "@radix-ui/react-separator": "^1.1.2",
      "@radix-ui/react-slot": "^1.1.2",
      "@radix-ui/react-switch": "^1.1.3",
      "@radix-ui/react-tabs": "^1.1.3",
      "@radix-ui/react-toggle": "^1.1.2",
      "@radix-ui/react-tooltip": "^1.1.8",
      "@remixicon/react": "^4.6.0",
      "@tiptap/extension-bullet-list": "^2.11.7",
      "@tiptap/extension-list-item": "^2.11.7",
      "@tiptap/extension-placeholder": "^2.11.7",
      "@tiptap/react": "^2.11.7",
      "@tiptap/starter-kit": "^2.11.7",
      "class-variance-authority": "^0.7.1",
      "clsx": "^2.1.1",
      "cmdk": "1.0.0",
      "date-fns": "^4.1.0",
      "i": "^0.3.7",
      "jazz-react": "^0.13.26",
      "jazz-tools": "^0.13.26",
      "lucide-react": "^0.476.0",
      "motion": "^12.4.10",
      "next": "15.2.0",
      "next-themes": "^0.4.4",
      "react": "^19.0.0",
      "react-day-picker": "8.10.1",
      "react-dom": "^19.0.0",
      "react-hook-form": "^7.54.2",
      "sonner": "^2.0.1",
      "tailwind-merge": "^3.0.2",
      "tailwindcss-animate": "^1.0.7",
      "zod": "^3.24.2",
      "zustand": "^5.0.3"
   },
   "devDependencies": {
      "@eslint/eslintrc": "^3",
      "@tailwindcss/postcss": "^4",
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      "eslint": "^9",
      "eslint-config-next": "15.2.0",
      "eslint-config-prettier": "^10.0.2",
      "eslint-plugin-prettier": "^5.2.3",
      "husky": "^9.1.7",
      "lint-staged": "^15.4.3",
      "prettier": "^3.5.2",
      "tailwindcss": "^4",
      "typescript": "^5"
   },
   "packageManager": "pnpm@9.15.4+sha256.9bee59c7313a216722c079c1e22160dea7f88df4e0c3450b1d7b01b882336c6a"
}



================================================
FILE: postcss.config.mjs
================================================
const config = {
   plugins: ['@tailwindcss/postcss'],
};

export default config;



================================================
FILE: tsconfig.json
================================================
{
   "compilerOptions": {
      "target": "ES2017",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "skipLibCheck": true,
      "strict": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "bundler",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "jsx": "preserve",
      "incremental": true,
      "plugins": [
         {
            "name": "next"
         }
      ],
      "paths": {
         "@/*": ["./*"]
      }
   },
   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
   "exclude": ["node_modules"]
}



================================================
FILE: .eslintrc
================================================
{
  "extends": [
    "next/core-web-vitals",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}



================================================
FILE: .lintstagedrc.json
================================================
{
   "*.{js,jsx,ts,tsx,json,css,md}": ["prettier --write"]
}



================================================
FILE: .prettierignore
================================================
.next
node_modules
public
pnpm-lock.yaml
.github
build
dist


================================================
FILE: .prettierrc
================================================
{
   "bracketSpacing": true,
   "endOfLine": "auto",
   "printWidth": 100,
   "proseWrap": "preserve",
   "jsxBracketSameLine": false,
   "semi": true,
   "quoteProps": "consistent",
   "singleQuote": true,
   "tabWidth": 3,
   "trailingComma": "es5"
}



================================================
FILE: app/globals.css
================================================
@import 'tailwindcss';

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

@theme {
   --font-sans: var(--font-geist-sans);
   --font-mono: var(--font-geist-mono);
}

:root {
   --card: oklch(1 0 0);
   --card-foreground: oklch(0.141 0.005 285.823);
   --popover: oklch(1 0 0);
   --popover-foreground: oklch(0.141 0.005 285.823);
   --primary: oklch(0.21 0.006 285.885);
   --primary-foreground: oklch(0.985 0 0);
   --secondary: oklch(0.967 0.001 286.375);
   --secondary-foreground: oklch(0.21 0.006 285.885);
   --muted: oklch(0.967 0.001 286.375);
   --muted-foreground: oklch(0.552 0.016 285.938);
   --accent: oklch(0.967 0.001 286.375);
   --accent-foreground: oklch(0.21 0.006 285.885);
   --destructive: oklch(0.577 0.245 27.325);
   --destructive-foreground: oklch(0.577 0.245 27.325);
   --border: oklch(0.92 0.004 286.32);
   --input: oklch(0.92 0.004 286.32);
   --ring: oklch(0.871 0.006 286.286);
   --chart-1: oklch(0.646 0.222 41.116);
   --chart-2: oklch(0.6 0.118 184.704);
   --chart-3: oklch(0.398 0.07 227.392);
   --chart-4: oklch(0.828 0.189 84.429);
   --chart-5: oklch(0.769 0.188 70.08);
   --radius: 0.625rem;
   --sidebar: oklch(0.985 0 0);
   --sidebar-foreground: oklch(0.141 0.005 285.823);
   --sidebar-primary: oklch(0.21 0.006 285.885);
   --sidebar-primary-foreground: oklch(0.985 0 0);
   --sidebar-accent: oklch(0.967 0.001 286.375);
   --sidebar-accent-foreground: oklch(0.21 0.006 285.885);
   --sidebar-border: oklch(0.92 0.004 286.32);
   --sidebar-ring: oklch(0.871 0.006 286.286);
   --background: oklch(1 0 0);
   --foreground: oklch(0.141 0.005 285.823);
   --container: #fff;
}

.dark {
   --background: oklch(0.141 0.005 285.823);
   --foreground: oklch(0.985 0 0);
   --card: oklch(0.141 0.005 285.823);
   --card-foreground: oklch(0.985 0 0);
   --popover: oklch(0.141 0.005 285.823);
   --popover-foreground: oklch(0.985 0 0);
   --primary: oklch(0.985 0 0);
   --primary-foreground: oklch(0.21 0.006 285.885);
   --secondary: oklch(0.274 0.006 286.033);
   --secondary-foreground: oklch(0.985 0 0);
   --muted: oklch(0.274 0.006 286.033);
   --muted-foreground: oklch(0.705 0.015 286.067);
   --accent: oklch(0.274 0.006 286.033);
   --accent-foreground: oklch(0.985 0 0);
   --destructive: oklch(0.396 0.141 25.723);
   --destructive-foreground: oklch(0.637 0.237 25.331);
   --border: oklch(0.274 0.006 286.033);
   --input: oklch(0.274 0.006 286.033);
   --ring: oklch(0.442 0.017 285.786);
   --chart-1: oklch(0.488 0.243 264.376);
   --chart-2: oklch(0.696 0.17 162.48);
   --chart-3: oklch(0.769 0.188 70.08);
   --chart-4: oklch(0.627 0.265 303.9);
   --chart-5: oklch(0.645 0.246 16.439);
   --sidebar: oklch(0.21 0.006 285.885);
   --sidebar-foreground: oklch(0.985 0 0);
   --sidebar-primary: oklch(0.488 0.243 264.376);
   --sidebar-primary-foreground: oklch(0.985 0 0);
   --sidebar-accent: oklch(0.274 0.006 286.033);
   --sidebar-accent-foreground: oklch(0.985 0 0);
   --sidebar-border: oklch(0.274 0.006 286.033);
   --sidebar-ring: oklch(0.442 0.017 285.786);
   --container: #101011;
}

@theme inline {
   --color-background: var(--background);
   --color-foreground: var(--foreground);
   --color-card: var(--card);
   --color-card-foreground: var(--card-foreground);
   --color-popover: var(--popover);
   --color-popover-foreground: var(--popover-foreground);
   --color-primary: var(--primary);
   --color-primary-foreground: var(--primary-foreground);
   --color-secondary: var(--secondary);
   --color-secondary-foreground: var(--secondary-foreground);
   --color-muted: var(--muted);
   --color-muted-foreground: var(--muted-foreground);
   --color-accent: var(--accent);
   --color-accent-foreground: var(--accent-foreground);
   --color-destructive: var(--destructive);
   --color-destructive-foreground: var(--destructive-foreground);
   --color-border: var(--border);
   --color-input: var(--input);
   --color-ring: var(--ring);
   --color-chart-1: var(--chart-1);
   --color-chart-2: var(--chart-2);
   --color-chart-3: var(--chart-3);
   --color-chart-4: var(--chart-4);
   --color-chart-5: var(--chart-5);
   --radius-sm: calc(var(--radius) - 4px);
   --radius-md: calc(var(--radius) - 2px);
   --radius-lg: var(--radius);
   --radius-xl: calc(var(--radius) + 4px);
   --color-sidebar: var(--sidebar);
   --color-sidebar-foreground: var(--sidebar-foreground);
   --color-sidebar-primary: var(--sidebar-primary);
   --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
   --color-sidebar-accent: var(--sidebar-accent);
   --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
   --color-sidebar-border: var(--sidebar-border);
   --color-sidebar-ring: var(--sidebar-ring);
   --color-container: var(--container);
}

@layer base {
   * {
      @apply border-border outline-ring/50;
   }
   body {
      @apply bg-background text-foreground;
   }
}

input::-webkit-search-cancel-button {
   -webkit-appearance: none;
   appearance: none;
   height: 16px;
   width: 16px;
   background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='hsl(215.4 16.3% 46.9%)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>");
   background-size: 16px 16px;
   cursor: pointer;
}

.dark input::-webkit-search-cancel-button {
   background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239E9FAA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>");
}

input[type='search'] {
   font-size: 16px !important;
}



================================================
FILE: app/layout.tsx
================================================
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin'],
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin'],
});

export const metadata: Metadata = {
   title: {
      template: '%s | Locality',
      default: 'Locality',
   },
   description: 'Project management interface inspired by Linear and powered by Jazz.',
   icons: {
      icon: [{ url: '/images/icon.png', type: 'image/png' }],
      shortcut: '/images/icon.png',
   },
   openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://locality.app/',
      title: 'Locality',
      description: 'Project management interface inspired by Linear and powered by Jazz.',
      siteName: 'Locality',
      images: [
         {
            url: '/banner.png',
            width: 1200,
            height: 630,
            alt: 'Locality - Modern issue tracking and project management',
         },
      ],
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Locality',
      description: 'Project management interface inspired by Linear and powered by Jazz.',
      images: ['/banner.png'],
      creator: '@locality',
   },
};

import { AppProviders } from '@/components/providers';

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
         </head>
         <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
            <AppProviders>{children}</AppProviders>
         </body>
      </html>
   );
}



================================================
FILE: app/not-found.tsx
================================================
import { redirect } from 'next/navigation';

export default function NotFound() {
   redirect('/');
}



================================================
FILE: app/page.tsx
================================================
'use client';

import { useAccount } from 'jazz-react';
import { redirect } from 'next/navigation';

export default function Home() {
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: true,
            },
         },
      },
   });
   const organizations = me?.root?.organizations;
   if (organizations?.length) {
      redirect(`/${organizations[0].slug}/my-issues`);
   }
   return <div>Loading...</div>;
}



================================================
FILE: app/[orgId]/layout.tsx
================================================
'use client';

import { useSetPresence } from '@/hooks/use-set-presence';

export default function OrgLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   useSetPresence();
   return <>{children}</>;
}



================================================
FILE: app/[orgId]/page.tsx
================================================
'use client';
import { useAccount } from 'jazz-react';
import { redirect, useParams } from 'next/navigation';

export default function OrgIdPage() {
   const params = useParams();
   const orgId = params.orgId as string;
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: true,
            },
         },
      },
   });
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId);
   if (organization) {
      redirect(`/${organization.slug}/my-issues`);
   }
   return <div>Loading...</div>;
}



================================================
FILE: app/[orgId]/issue/[issue]/page.tsx
================================================
'use client';

import MainLayout from '@/components/layout/main-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import IssueDetail from '@/components/common/issues/issue-detail';

export default function IssuePage() {
   const params = useParams();
   const orgId = params.orgId as string;
   const issueId = params.issue as string;

   // Use useAccount ONCE in the page to shallowly load organizations
   const { me } = useAccount({
      resolve: {
         profile: true,
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) ?? undefined;

   return (
      <MainLayout header={<></>}>
         {organization ? (
            <IssueDetail
               organization={organization}
               issueId={issueId}
               currentUserId={me?.profile.id}
            />
         ) : (
            <div className="flex items-center justify-center h-screen">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
            </div>
         )}
      </MainLayout>
   );
}



================================================
FILE: app/[orgId]/members/page.tsx
================================================
'use client';

import Header from '@/components/layout/headers/members/header';
import MainLayout from '@/components/layout/main-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import { useMembers } from '@/components/common/members/use-members';
import Members from '@/components/common/members/members';

export default function MembersPage() {
   const params = useParams();
   const orgId = params.orgId as string;

   // Use useAccount ONCE to shallowly load organizations at the page level
   const { me } = useAccount({
      resolve: {
         profile: true,
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organizations = me?.root?.organizations;
   const organization = organizations?.find((org) => org?.slug === orgId) || undefined;

   // Use our custom hook to get members data for the Header
   const { members, isLoading, isError } = useMembers(organization);

   // Show loading state if waiting for organization or members
   if (!organization || isLoading) {
      return (
         <MainLayout header={<Header members={undefined} />}>
            <div className="flex items-center justify-center h-screen">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
            </div>
         </MainLayout>
      );
   }

   // Show error state if there was an error loading members
   if (isError) {
      return (
         <MainLayout header={<Header members={undefined} />}>
            <div className="flex items-center justify-center h-screen">
               <div className="text-white/50">Organization not found or access denied</div>
            </div>
         </MainLayout>
      );
   }

   // Render the page with members data
   return (
      <MainLayout header={<Header members={members} />}>
         <Members organization={organization} members={members} />
      </MainLayout>
   );
}



================================================
FILE: app/[orgId]/my-issues/page.tsx
================================================
'use client';

import { IssuesHeader } from '@/components/layout/headers/issues/header';
import MainLayout from '@/components/layout/main-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import MyIssuesList from '@/components/common/issues/my-issues-list';

export default function MyIssuesPage() {
   const params = useParams();
   const orgId = params.orgId as string;

   // Use useAccount ONCE in the page to shallowly load organizations
   const { me } = useAccount({
      resolve: {
         profile: true,
         root: {
            organizations: true, // Shallowly load organizations
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) ?? undefined;

   return (
      <MainLayout header={<IssuesHeader organization={organization} />}>
         {organization && me?.profile ? (
            <MyIssuesList organization={organization} profile={me.profile} />
         ) : (
            <div>Loading...</div>
         )}
      </MainLayout>
   );
}



================================================
FILE: app/[orgId]/settings/page.tsx
================================================
export default function SettingsPage() {
   return <div>Settings Page</div>;
}



================================================
FILE: app/[orgId]/settings/teams/page.tsx
================================================
export default function TeamsSettingsPage() {
   return <div>Teams Settings Page</div>;
}



================================================
FILE: app/[orgId]/settings/teams/[teamId]/page.tsx
================================================
'use client';

import SettingsLayout from '@/components/layout/settings-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import TeamSettingsContent from '@/components/common/teams/team-settings-content';

export default function TeamSettingsPage() {
   const params = useParams();
   const orgId = params.orgId as string;
   const teamId = params.teamId as string;

   // Use useAccount ONCE to shallowly load organizations at the page level
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) || undefined;

   return (
      <SettingsLayout>
         {organization ? (
            <TeamSettingsContent organization={organization} teamId={teamId} />
         ) : (
            <div className="flex items-center justify-center h-screen">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
            </div>
         )}
      </SettingsLayout>
   );
}



================================================
FILE: app/[orgId]/team/[teamId]/issues/page.tsx
================================================
'use client';

import { IssuesHeader } from '@/components/layout/headers/issues/header';
import MainLayout from '@/components/layout/main-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import TeamIssuesList from '@/components/common/teams/team-issues-list';

export default function TeamIssuesPage() {
   const params = useParams();
   const orgId = params.orgId as string;
   const teamId = params.teamId as string;

   // Use useAccount ONCE to shallowly load organizations at the page level
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) ?? undefined;

   return (
      <MainLayout header={<IssuesHeader organization={organization} />}>
         {organization ? (
            <TeamIssuesList organization={organization} teamId={teamId} />
         ) : (
            <div className="flex items-center justify-center h-screen">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
            </div>
         )}
      </MainLayout>
   );
}



================================================
FILE: app/[orgId]/teams/page.tsx
================================================
'use client';

import { TeamsHeader } from '@/components/layout/headers/teams/header';
import MainLayout from '@/components/layout/main-layout';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import { useState, useCallback } from 'react';
import TeamsListContainer from '@/components/common/teams/teams-list-container';

export default function TeamsPage() {
   const params = useParams();
   const orgId = params.orgId as string;
   const [searchQuery, setSearchQuery] = useState('');

   // Use useAccount ONCE to shallowly load organizations at the page level
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) || undefined;

   // Handle search queries from the HeaderNav component
   const handleSearch = useCallback((query: string) => {
      setSearchQuery(query);
   }, []);

   return (
      <MainLayout header={<TeamsHeader onSearch={handleSearch} />}>
         {organization ? (
            <TeamsListContainer
               organization={organization}
               searchQuery={searchQuery}
               currentUserId={me?.id}
            />
         ) : (
            <div className="flex items-center justify-center h-screen">
               <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
            </div>
         )}
      </MainLayout>
   );
}



================================================
FILE: app/invite/[...creds]/page.tsx
================================================
'use client';

import { JazzAccount, Organization, Team } from '@/lib/jazz-schema';
// import { useAccount } from 'jazz-react';
import { ID, InviteSecret } from 'jazz-tools';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export default function InvitePage() {
   const params = useParams<{ creds: string[] }>();
   const router = useRouter();
   const [error, setError] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const coValueType = params?.creds?.[0] as 'organization' | 'team';
   const coValueId = params?.creds?.[1] as ID<Organization | Team>;
   const secret = params?.creds?.[2] as InviteSecret;

   useEffect(() => {
      if (!coValueType || !coValueId || !secret) {
         setIsLoading(false);
         return;
      }

      async function acceptInvite() {
         try {
            const me = JazzAccount.getMe();
            await me.ensureLoaded({
               resolve: {
                  root: {
                     organizations: {
                        $each: {
                           teams: {
                              $each: true,
                           },
                        },
                     },
                  },
               },
            });

            if (!me) return;

            await me.acceptInvite(
               coValueId,
               secret,
               coValueType === 'organization' ? Organization : Team
            );
            const coValue =
               coValueType === 'organization'
                  ? await Organization.load(coValueId)
                  : await Team.load(coValueId);

            if (!coValue) {
               setError([`${coValueType} not found`]);
               setIsLoading(false);
               return;
            }

            if (
               me.root &&
               me.root.organizations &&
               !me.root.organizations.some((o) => o?.id === coValue.id) &&
               coValueType === 'organization'
            ) {
               me.root.organizations.push(coValue as Organization);
               router.replace(`/${coValue.slug}`);
            }

            if (
               me.root &&
               me.root.organizations &&
               me.root.organizations[0]?.teams &&
               !me.root.organizations[0]?.teams.some((o) => o?.id === coValue.id) &&
               coValueType === 'team'
            ) {
               me.root.organizations[0]?.teams.push(coValue as Team);
               router.replace(`/${me.root.organizations[0].slug}`);
            }

            toast.success('Invite accepted');
         } catch (err) {
            setError([err instanceof Error ? err.message : 'Failed to accept invite']);
            toast.error(err instanceof Error ? err.message : 'Failed to accept invite');
            setIsLoading(false);
         }
      }

      acceptInvite();
   }, [coValueType, coValueId, secret, router]);

   if (!coValueType || !coValueId || !secret) {
      return (
         <div className="text-red-600 dark:text-red-500">
            Invalid invite link. Please check the URL and try again.
         </div>
      );
   }

   if (error.length > 0) {
      return <div className="text-red-600 dark:text-red-500">{error.join(', ')}</div>;
   }

   return isLoading ? <div>Loading....</div> : null;
}



================================================
FILE: app/new-org/page.tsx
================================================
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAccount } from 'jazz-react';
import {
   createNewOrganization,
} from '@/lib/jazz-schema';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { generateSlug } from '@/lib/utils';

const formSchema = z.object({
   workspaceName: z.string().min(2, {
      message: 'Workspace name must be at least 2 characters.',
   }),
   workspaceUrl: z.string().min(2, {
      message: 'Workspace URL must be at least 2 characters.',
   }),
});

export default function NewOrgPage() {
   const router = useRouter();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState<string | null>(null);

   // Get account with organizations list
   const { me } = useAccount();
   const organizations = me?.root?.organizations;

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         workspaceName: '',
         workspaceUrl: '',
      },
   });

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      setIsSubmitting(true);
      setError(null);

      try {
         // Generate a slug from the URL field or the name
         const orgSlug = generateSlug(values.workspaceUrl.trim() || values.workspaceName.trim());

         // Check if organization with this slug already exists
         const existingOrg = organizations?.find((org) => org?.slug === orgSlug);
         if (existingOrg) {
            setError('An organization with this URL already exists');
            setIsSubmitting(false);
            return;
         }

         const newOrganization = createNewOrganization(me, {
            teamName: values.workspaceName.trim(),
            orgName: values.workspaceName.trim(),
            orgSlug: orgSlug,
         });

         // Add to organizations list
         organizations?.push(newOrganization);

         // Redirect to the new organization
         router.push(`/${orgSlug}/team/${orgSlug}/issues`);
      } catch (error) {
         console.error('Error creating workspace:', error);
         setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
         {/* Header with back link and login info */}
         <div className="w-full flex justify-between items-center p-6">
            <a href="#" className="text-primary flex items-center" onClick={() => router.push('/')}>
               <span className="text-sm">&larr; Back</span>
            </a>

            <div className="text-muted-foreground text-sm text-right">
               Logged in as
               <br />
               <span className="text-foreground">{me?.profile?.name || 'User'}</span>
            </div>
         </div>

         {/* Main content */}
         <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
               {/* Title and description - centered */}
               <div className="mb-8 text-center">
                  <h1 className="text-2xl font-semibold mb-2">Create a new workspace</h1>
                  <p className="text-muted-foreground text-sm">
                     Workspaces are shared environments where teams can work on issues.
                  </p>
               </div>

               {/* Form with background */}
               <div className="bg-card p-6 rounded-lg">
                  {error && (
                     <div className="mb-4 p-3 bg-destructive/10 border border-destructive rounded-md text-destructive text-sm">
                        {error}
                     </div>
                  )}

                  <Form {...form}>
                     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                           control={form.control}
                           name="workspaceName"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Workspace Name</FormLabel>
                                 <FormControl>
                                    <Input placeholder="My Workspace" {...field} />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />

                        <FormField
                           control={form.control}
                           name="workspaceUrl"
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>Workspace URL</FormLabel>
                                 <div className="flex items-center">
                                    <div className="text-muted-foreground mr-1">
                                       {typeof window !== 'undefined'
                                          ? window.location.host
                                          : 'example.com'}
                                       /
                                    </div>
                                    <FormControl>
                                       <Input placeholder="my-workspace" {...field} />
                                    </FormControl>
                                 </div>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />

                        <Button
                           type="submit"
                           className="w-full bg-[#5E6AD2] hover:bg-[#4954b9] text-white"
                           disabled={isSubmitting}
                        >
                           {isSubmitting ? 'Creating workspace...' : 'Create workspace'}
                        </Button>
                     </form>
                  </Form>
               </div>
            </div>
         </div>
      </div>
   );
}



================================================
FILE: components/providers.tsx
================================================
'use client';

import { Toaster } from '@/components/ui/sonner';
import { JazzProvider, PasskeyAuthBasicUI } from 'jazz-react';

import { ThemeProvider } from '@/components/layout/theme-provider';
import { JazzAccount } from '@/lib/jazz-schema';

declare module 'jazz-react' {
   interface Register {
      Account: JazzAccount;
   }
}

export function AppProviders({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
         <JazzProvider
            sync={{
               peer: 'wss://cloud.jazz.tools/?key=react-passkey-auth@garden.co',
               when: 'always',
            }}
            AccountSchema={JazzAccount}
         >
            <PasskeyAuthBasicUI appName="Locality">{children}</PasskeyAuthBasicUI>
         </JazzProvider>
         <Toaster />
      </ThemeProvider>
   );
}



================================================
FILE: components/user-avatar.tsx
================================================
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/lib/jazz-schema';
import { getInitials } from '@/lib/utils';
import { useGetPresence } from '@/hooks/use-get-presence';

interface UserAvatarProps {
   user: UserProfile;
   className?: string;
   showStatus?: boolean;
}

export default function UserAvatar({ user, className, showStatus = false }: UserAvatarProps) {
   const status = useGetPresence(user?.id);

   return (
      <div className="relative">
         <Avatar className={className}>
            <AvatarImage src={user?.avatarUrl || ''} alt={user?.name} />
            <AvatarFallback>{getInitials(user?.name || '')}</AvatarFallback>
         </Avatar>

         {showStatus && (
            <span
               className={`absolute bottom-0 right-0 rounded-full w-2.5 h-2.5 border-2 border-white ${
                  status === 'online'
                     ? 'bg-green-500'
                     : status === 'away'
                       ? 'bg-yellow-500'
                       : 'bg-gray-400'
               }`}
            />
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/assignee-user.tsx
================================================
'use client';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Assignee, Issue, UserProfile } from '@/lib/jazz-schema';
import { Group } from 'jazz-tools';
import { CheckIcon, CircleUserRound, Send, UserIcon } from 'lucide-react';
import { useState } from 'react';
import UserAvatar from '@/components/user-avatar';

interface AssigneeUserProps {
   issue: Issue;
}

export function AssigneeUser({ issue }: AssigneeUserProps) {
   const [open, setOpen] = useState(false);
   const [currentAssignee, setCurrentAssignee] = useState<typeof Assignee | null>(issue.assignee);

   const renderAvatar = () => {
      if (currentAssignee) {
         return (
            <UserAvatar
               user={currentAssignee as UserProfile}
               className="size-6 shrink-0"
               showStatus={true}
            />
         );
      } else {
         return (
            <div className="size-6 flex items-center justify-center">
               <CircleUserRound className="size-5 text-zinc-600" />
            </div>
         );
      }
   };

   return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
         <DropdownMenuTrigger asChild>
            <button className="relative w-fit focus:outline-none">{renderAvatar()}</button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="start" className="w-[206px]">
            <DropdownMenuLabel>Assign to...</DropdownMenuLabel>
            <DropdownMenuItem
               onClick={(e) => {
                  e.stopPropagation();
                  setCurrentAssignee(null);
                  setOpen(false);
               }}
            >
               <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  <span>No assignee</span>
               </div>
               {!currentAssignee && <CheckIcon className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            {issue._owner.castAs(Group).members.map(({ account }) => (
               <DropdownMenuItem
                  key={account.id}
                  onClick={(e) => {
                     e.stopPropagation();
                     setCurrentAssignee(account.profile);
                     setOpen(false);
                  }}
               >
                  <div className="flex items-center gap-2">
                     {account.profile && (
                        <UserAvatar user={account.profile as UserProfile} className="h-5 w-5" />
                     )}
                     <span>{account.profile?.name}</span>
                  </div>
                  {currentAssignee?.id === account.profile?.id && (
                     <CheckIcon className="ml-auto h-4 w-4" />
                  )}
               </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>New user</DropdownMenuLabel>
            <DropdownMenuItem>
               <div className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  <span>Invite and assign...</span>
               </div>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}



================================================
FILE: components/common/issues/Comment.tsx
================================================
'use client';

import { useState, useRef, useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import { Comment as CommentType } from '@/lib/jazz-schema';
import { toast } from 'sonner';
import { getTimeAgo } from '@/lib/utils';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Smile, Trash2, MessageSquare, ArrowRight } from 'lucide-react';
import { ID, Profile } from 'jazz-tools';

// Define a string literal type for reaction keys
type ReactionKey =
   | 'thumb-up'
   | 'thumb-down'
   | 'laugh'
   | 'heart'
   | 'sad'
   | 'angry'
   | 'surprised'
   | 'thinking'
   | 'wink'
   | 'clap'
   | 'fire'
   | 'fireworks'
   | 'party';

// Map of emoji characters to ReactionsList accepted values
const EMOJI_TO_REACTION_MAP: Record<string, ReactionKey> = {
   '👍': 'thumb-up',
   '👎': 'thumb-down',
   '😂': 'laugh',
   '❤️': 'heart',
   '😢': 'sad',
   '😠': 'angry',
   '😮': 'surprised',
   '🤔': 'thinking',
   '😉': 'wink',
   '👏': 'clap',
   '🔥': 'fire',
   '🎆': 'fireworks',
   '🎉': 'party',
};

// Reverse map for display purposes
const REACTION_TO_EMOJI_MAP: Record<ReactionKey, string> = {
   'thumb-up': '👍',
   'thumb-down': '👎',
   'laugh': '😂',
   'heart': '❤️',
   'sad': '😢',
   'angry': '😠',
   'surprised': '😮',
   'thinking': '🤔',
   'wink': '😉',
   'clap': '👏',
   'fire': '🔥',
   'fireworks': '🎆',
   'party': '🎉',
};

// Allow only these reactions in the picker
const ALLOWED_REACTIONS = [
   '👍',
   '👎',
   '😂',
   '❤️',
   '😢',
   '😠',
   '😮',
   '🤔',
   '😉',
   '👏',
   '🔥',
   '🎆',
   '🎉',
];

// Define a type for emoji reactions
interface EmojiReaction {
   reactionType: ReactionKey; // Using the allowed reaction values
   emoji: string; // The actual emoji character for display
   count: number;
   users: string[];
}

// We'll use a custom property instead of extending the CommentType
type CommentReactionsMap = Record<ReactionKey, EmojiReaction>;

interface CommentProps {
   comment: CommentType;
   onCommentUpdate: (commentId: string, content: string) => void;
   onReactionUpdate: (commentId: string, reaction: ReactionKey, add: boolean) => void;
   onCommentDelete: (commentId: string) => void;
   onReplyAdd?: (parentId: string, content: string) => void;
   currentUserId: ID<Profile> | undefined;
}

export function Comment({
   comment,
   onCommentUpdate,
   onReactionUpdate,
   onCommentDelete,
   onReplyAdd,
   currentUserId,
}: CommentProps) {
   const [isEditing, setIsEditing] = useState<boolean>(false);
   const [editContent, setEditContent] = useState<string>('');
   const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
   const [isReplying, setIsReplying] = useState<boolean>(false);
   const [replyText, setReplyText] = useState<string>('');
   const emojiPickerRef = useRef<HTMLDivElement>(null);

   // Initialize reactions from the comment
   const [reactions, setReactions] = useState<CommentReactionsMap>({} as CommentReactionsMap);

   const editCommentEditor = useEditor({
      extensions: [
         StarterKit.configure({
            bulletList: false,
         }),
         BulletList.configure({
            keepMarks: true,
            HTMLAttributes: {
               class: 'text-white/90',
            },
         }),
         ListItem,
      ],
      content: editContent,
      editorProps: {
         attributes: {
            class: 'min-h-[60px] bg-[#1f1e1e9a] rounded-lg p-2 px-4 text-white/90 placeholder:text-white/30 focus:outline-none prose-sm prose-invert',
         },
      },
      onUpdate: ({ editor }) => {
         setEditContent(editor.getHTML());
      },
   });

   // Close emoji picker when clicking outside
   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
            setShowEmojiPicker(false);
         }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   const startEditing = () => {
      setIsEditing(true);
      setEditContent(comment.content || '');

      // Update the editor content after state is set
      setTimeout(() => {
         if (editCommentEditor) {
            editCommentEditor.commands.setContent(comment.content || '');
         }
      }, 0);
   };

   const saveEditedComment = () => {
      onCommentUpdate(comment.id, editContent);
      setIsEditing(false);
      toast.success('Comment updated');
   };

   const cancelEditing = () => {
      setIsEditing(false);
   };

   const toggleEmojiPicker = () => {
      setShowEmojiPicker(!showEmojiPicker);
   };

   const addReaction = (emoji: string) => {
      // Check if the emoji is in our allowed map
      const reactionType = EMOJI_TO_REACTION_MAP[emoji];
      if (!reactionType) {
         console.warn(`Emoji ${emoji} is not in the allowed reactions list.`);
         toast.error('This emoji reaction is not supported');
         return;
      }

      // Check if this reaction already exists in our local state
      const hasReaction = reactions[reactionType]?.users.includes(currentUserId || '');

      // Update parent component through callback
      onReactionUpdate(comment.id, reactionType, !hasReaction);

      // Update local state
      setReactions((prevReactions) => {
         if (!currentUserId) return prevReactions;

         const newReactions = { ...prevReactions };

         if (newReactions[reactionType]) {
            if (hasReaction) {
               // Remove user's reaction
               newReactions[reactionType].count -= 1;
               newReactions[reactionType].users = newReactions[reactionType].users.filter(
                  (user) => user !== currentUserId
               );

               // Remove reaction if count is 0
               if (newReactions[reactionType].count === 0) {
                  delete newReactions[reactionType];
               }
            } else {
               // Add user's reaction
               newReactions[reactionType].count += 1;
               newReactions[reactionType].users.push(currentUserId);
            }
         } else {
            // Create new reaction
            newReactions[reactionType] = {
               reactionType,
               emoji,
               count: 1,
               users: [currentUserId],
            };
         }

         return newReactions;
      });

      // Close emoji picker
      setShowEmojiPicker(false);
   };

   // Initialize the reaction state from the comment data when the component mounts
   useEffect(() => {
      if (!comment || !comment.reactions || !currentUserId) return;

      const commentReactionsMap = {} as CommentReactionsMap;

      // Convert each reaction in the list to our format
      comment.reactions.forEach((reactionType) => {
         // Get the emoji for this reaction type - we need to cast the reactionType
         const typedReaction = reactionType as unknown as ReactionKey;
         const emoji = REACTION_TO_EMOJI_MAP[typedReaction];

         if (emoji) {
            commentReactionsMap[typedReaction] = {
               reactionType: typedReaction,
               emoji,
               count: 1, // Just a placeholder count
               users: [currentUserId], // Assume current user for simplicity
            };
         }
      });

      setReactions(commentReactionsMap);
   }, [comment, currentUserId]);

   // Get author name from the comment
   const authorName = comment._edits.content.all?.[0]?.by?.profile?.name || 'Unknown';

   // Check if this is a reply comment
   const isReply = !!comment.parentComment;

   // Get the parent comment author if this is a reply
   const parentAuthor =
      isReply && comment.parentComment?._edits?.content?.all?.[0]?.by?.profile?.name;

   // Add a handler for deleting the comment
   const handleDelete = () => {
      onCommentDelete(comment.id);
      toast.success('Comment deleted');
   };

   // Add handler for reply
   const handleReply = () => {
      setIsReplying(!isReplying);
   };

   const submitReply = () => {
      if (!replyText.trim()) {
         toast.error('Reply cannot be empty');
         return;
      }

      if (onReplyAdd) {
         onReplyAdd(comment.id, replyText);
         setReplyText('');
         setIsReplying(false);
         toast.success('Reply added');
      }
   };

   return (
      <div
         className={`rounded-lg p-3 group relative ${isReply ? 'ml-6 border-l-2 border-neutral-700/30 bg-foreground/3' : 'bg-foreground/5'}`}
      >
         {isReply && (
            <div className="absolute -left-5 top-4 h-3 w-3 border-b border-l border-neutral-700/30"></div>
         )}
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
               <span className="font-medium">{authorName}</span>
               <span className="text-white/50 text-xs">
                  {getTimeAgo(new Date(comment._edits.content.all[0].madeAt))}
               </span>
               {isReply && parentAuthor && (
                  <span className="text-white/40 text-xs ml-1">
                     replying to <span className="text-white/60 font-medium">{parentAuthor}</span>
                  </span>
               )}
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
               <button
                  onClick={toggleEmojiPicker}
                  className="p-1 rounded hover:bg-neutral-800 text-white/50 hover:text-white/90"
               >
                  <Smile className="h-4 w-4" />
               </button>
               <DropdownMenu>
                  <DropdownMenuTrigger>
                     <MoreHorizontal className="h-4 w-4 text-white/50 hover:text-white/90" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-neutral-900 border-neutral-800">
                     <DropdownMenuItem
                        onClick={startEditing}
                        className="text-white/70 hover:text-white focus:text-white cursor-pointer"
                     >
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        onClick={handleDelete}
                        className="text-red-500 hover:text-red-400 focus:text-red-400 cursor-pointer"
                     >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>

         {isEditing ? (
            <div className="space-y-2">
               <EditorContent editor={editCommentEditor} className="text-white/90" />
               <div className="flex justify-end gap-2 mt-2">
                  <button
                     onClick={cancelEditing}
                     className="px-3 py-1 text-xs text-white/50 hover:text-white/90 hover:bg-neutral-800 rounded-md"
                  >
                     Cancel
                  </button>
                  <button
                     onClick={saveEditedComment}
                     className="px-3 py-1 text-xs text-white bg-neutral-800 hover:bg-neutral-700 rounded-md"
                  >
                     Save
                  </button>
               </div>
            </div>
         ) : (
            <>
               <div
                  className="text-white/90 prose-sm prose-invert"
                  dangerouslySetInnerHTML={{ __html: comment.content || '' }}
               />

               {/* Emoji reactions */}
               {Object.keys(reactions).length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                     {Object.values(reactions).map((reaction) => (
                        <button
                           key={reaction.reactionType}
                           onClick={() => addReaction(reaction.emoji)}
                           className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                              reaction.users.includes(currentUserId || '')
                                 ? 'bg-primary/20 text-primary'
                                 : 'bg-neutral-800 text-white/70 hover:bg-neutral-700'
                           }`}
                        >
                           <span className="mr-1">{reaction.emoji}</span>
                           <span>{reaction.count}</span>
                        </button>
                     ))}
                  </div>
               )}

               {/* Simple emoji picker */}
               {showEmojiPicker && (
                  <div className="absolute z-10 right-0 mt-2" ref={emojiPickerRef}>
                     <div className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg p-2">
                        <div className="grid grid-cols-5 gap-2">
                           {ALLOWED_REACTIONS.map((emoji) => (
                              <button
                                 key={emoji}
                                 onClick={() => addReaction(emoji)}
                                 className="hover:bg-neutral-800 p-2 rounded text-lg"
                              >
                                 {emoji}
                              </button>
                           ))}
                        </div>
                     </div>
                  </div>
               )}

               {/* Reply button */}
               <div className="mt-2 flex">
                  <button
                     onClick={handleReply}
                     className="flex items-center text-xs text-white/50 hover:text-white/70 transition-colors"
                  >
                     <MessageSquare className="h-3 w-3 mr-1" />
                     Reply
                  </button>
               </div>

               {/* Reply input */}
               {isReplying && (
                  <div className="mt-3 border-t border-neutral-700/30 pt-3">
                     <div className="relative">
                        <input
                           type="text"
                           value={replyText}
                           onChange={(e) => setReplyText(e.target.value)}
                           placeholder="Leave a reply..."
                           className="w-full bg-[#1f1e1e9a] rounded-lg p-2 px-3 text-white/90 placeholder:text-white/30 focus:outline-none text-sm pr-10"
                        />
                        <button
                           onClick={submitReply}
                           className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white/60 hover:text-white/90"
                        >
                           <ArrowRight className="h-4 w-4" />
                        </button>
                     </div>
                  </div>
               )}
            </>
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/CommentSection.tsx
================================================
'use client';

import { useMemo } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import {
   Issue,
   Comment as CommentCoValue,
   CommentList,
   AttachmentList,
   ReactionsList,
} from '@/lib/jazz-schema';
import { toast } from 'sonner';
import { CoMapInit, ID, Profile } from 'jazz-tools';
import { getTimeAgo } from '@/lib/utils';
import { Comment } from '@/components/common/issues/Comment';

type ReactionKey =
   | 'thumb-up'
   | 'thumb-down'
   | 'laugh'
   | 'heart'
   | 'sad'
   | 'angry'
   | 'surprised'
   | 'thinking'
   | 'wink'
   | 'clap'
   | 'fire'
   | 'fireworks'
   | 'party';

interface CommentSectionProps {
   issueData: Issue;
   currentUserId: ID<Profile> | undefined;
}

// Helper function to recursively render comment with its replies
function CommentWithReplies({
   comment,
   allComments,
   onCommentUpdate,
   onReactionUpdate,
   onCommentDelete,
   onReplyAdd,
   level = 0,
   currentUserId,
}: {
   comment: CommentCoValue;
   allComments: CommentCoValue[];
   onCommentUpdate: (commentId: string, content: string) => void;
   onReactionUpdate: (commentId: string, reaction: ReactionKey, add: boolean) => void;
   onCommentDelete: (commentId: string) => void;
   onReplyAdd: (parentId: string, content: string) => void;
   level?: number;
   currentUserId: ID<Profile> | undefined;
}) {
   // Find all direct replies to this comment
   const replies = allComments.filter(
      (reply) => reply && reply.parentComment && reply.parentComment.id === comment.id
   );

   // Calculate indentation based on nesting level
   const getIndentClass = () => {
      switch (level) {
         case 0:
            return '';
         case 1:
            return 'ml-4';
         case 2:
            return 'ml-8';
         case 3:
            return 'ml-12';
         case 4:
            return 'ml-16';
         default:
            return 'ml-20'; // Max indent for deep nesting
      }
   };

   return (
      <div className={`space-y-3 ${getIndentClass()}`}>
         {/* Render the comment */}
         <Comment
            comment={comment}
            onCommentUpdate={onCommentUpdate}
            onReactionUpdate={onReactionUpdate}
            onCommentDelete={onCommentDelete}
            onReplyAdd={onReplyAdd}
            currentUserId={currentUserId}
         />

         {/* Recursively render replies */}
         {replies.length > 0 && (
            <div className="space-y-3">
               {replies.map((reply) => (
                  <CommentWithReplies
                     key={reply.id}
                     comment={reply}
                     allComments={allComments}
                     onCommentUpdate={onCommentUpdate}
                     onReactionUpdate={onReactionUpdate}
                     onCommentDelete={onCommentDelete}
                     onReplyAdd={onReplyAdd}
                     level={level + 1}
                     currentUserId={currentUserId}
                  />
               ))}
            </div>
         )}
      </div>
   );
}

export function CommentSection({ issueData, currentUserId }: CommentSectionProps) {
   // Comment form editor
   const commentEditor = useEditor({
      extensions: [
         StarterKit.configure({
            bulletList: false,
         }),
         BulletList.configure({
            keepMarks: true,
            HTMLAttributes: {
               class: 'text-white/90',
            },
         }),
         ListItem,
         Placeholder.configure({
            placeholder: 'Leave a comment...',
            emptyEditorClass: 'is-editor-empty',
         }),
      ],
      editorProps: {
         attributes: {
            class: 'min-h-[80px] bg-[#1f1e1e9a] rounded-lg p-2 px-4 text-white/90 placeholder:text-white/30 focus:outline-none prose-sm prose-invert',
         },
      },
   });

   const submitComment = () => {
      if (!commentEditor || !issueData) return;

      const content = commentEditor.getHTML();
      if (!content || content === '<p></p>') {
         toast.error('Comment cannot be empty');
         return;
      }

      // Initialize comments if needed
      if (!issueData.comments) {
         issueData.comments = CommentList.create([], issueData._owner);
      }

      const commentData: CoMapInit<CommentCoValue> = {
         content,
         parentIssue: issueData,
         reactions: ReactionsList.create([], issueData._owner),
         attachments: AttachmentList.create([], issueData._owner),
         deleted: false,
      };

      issueData.comments.push(CommentCoValue.create(commentData, issueData._owner));

      toast.success('Comment added');
      commentEditor.commands.clearContent();
   };

   // Handle comment updates
   const handleCommentUpdate = (commentId: string, content: string) => {
      if (issueData.comments) {
         const comment = issueData.comments.find((c) => c?.id === commentId);
         if (comment) {
            comment.content = content;
         }
      }
   };

   // Handle comment deletion
   const handleCommentDelete = (commentId: string) => {
      if (issueData.comments) {
         const commentIndex = issueData.comments.findIndex((c) => c?.id === commentId);
         if (commentIndex !== -1) {
            // Use splice to remove the comment
            issueData.comments.splice(commentIndex, 1);
         }
      }
   };

   // Handle reaction updates
   const handleReactionUpdate = (commentId: string, reaction: ReactionKey, add: boolean) => {
      if (!issueData.comments) return;

      const comment = issueData.comments.find((c) => c?.id === commentId);
      if (!comment) return;

      // Initialize reactions if needed
      if (!comment.reactions) {
         comment.reactions = ReactionsList.create([], issueData._owner);
      }

      if (add) {
         // Add reaction if not already present
         if (!comment.reactions.includes(reaction)) {
            comment.reactions.push(reaction);
         }
      } else {
         // Remove reaction
         const index = comment.reactions.indexOf(reaction);
         if (index !== -1) {
            comment.reactions.splice(index, 1);
         }
      }
   };

   // Handle reply to a comment
   const handleReplyAdd = (parentId: string, content: string) => {
      if (!issueData.comments) return;

      const parentComment = issueData.comments.find((c) => c?.id === parentId);
      if (!parentComment) return;

      // Create a new comment with the parent reference
      const commentData: CoMapInit<CommentCoValue> = {
         content,
         parentIssue: issueData,
         parentComment: parentComment,
         reactions: ReactionsList.create([], issueData._owner),
         attachments: AttachmentList.create([], issueData._owner),
         deleted: false,
      };

      // Add the reply to the comments list
      issueData.comments.push(CommentCoValue.create(commentData, issueData._owner));
   };

   // Filter out any null comments to avoid TypeScript issues
   const validComments = useMemo(() => {
      return (
         issueData.comments?.filter(
            (comment): comment is NonNullable<typeof comment> =>
               comment !== null && comment !== undefined
         ) || []
      );
   }, [issueData.comments]);

   // Find top-level comments (those without a parent)
   const topLevelComments = useMemo(() => {
      return validComments.filter((comment) => !comment.parentComment);
   }, [validComments]);

   return (
      <div className="flex flex-col w-[98%] mx-auto gap-2 border-t border-border pt-4">
         <div className="flex items-center justify-between">
            <h2 className="text-md font-semibold">Activity</h2>
            <button className="text-white/50 text-xs font-medium hover:text-white hover:bg-foreground/10 px-3 py-1 rounded-md hover:cursor-pointer">
               Unsubscribe
            </button>
         </div>
         <p className="text-white/50 text-xs">
            {issueData.assignee ? `${issueData.assignee?.name} created this issue` : 'Unassigned'}
            <span className="mx-1">·</span>
            <span className="hover:text-white/70 hover:cursor-pointer font-medium">
               {getTimeAgo(issueData._edits.title.all[0].madeAt)}
            </span>
         </p>

         {validComments.length > 0 && (
            <div className="mt-4 space-y-4">
               {/* Render top-level comments and their nested replies */}
               {topLevelComments.map((comment) => (
                  <CommentWithReplies
                     key={comment.id}
                     comment={comment}
                     allComments={validComments}
                     onCommentUpdate={handleCommentUpdate}
                     onReactionUpdate={handleReactionUpdate}
                     onCommentDelete={handleCommentDelete}
                     onReplyAdd={handleReplyAdd}
                     currentUserId={currentUserId}
                  />
               ))}
            </div>
         )}

         <div className="relative mt-4">
            <EditorContent
               className="text-white/90 placeholder:text-white/30"
               editor={commentEditor}
            />
            <div className="absolute right-3 bottom-3 flex items-center gap-2">
               <button className="p-2 cursor-pointer text-white/50 hover:text-white/90 transition-all duration-200">
                  <svg
                     width="12"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                  </svg>
               </button>
               <button
                  className="p-2 cursor-pointer rounded-full bg-neutral-800 text-white/60 hover:text-white/90 transition-all duration-200"
                  onClick={submitComment}
               >
                  <svg
                     width="12"
                     height="14"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path d="M12 20V4M12 4L5 11M12 4L19 11" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   );
}



================================================
FILE: components/common/issues/create-issue-modal-provider.tsx
================================================
'use client';

import { CreateNewIssue } from '@/components/layout/sidebar/create-new-issue';

export function CreateIssueModalProvider() {
   return (
      <div className="hidden">
         <CreateNewIssue />
      </div>
   );
}



================================================
FILE: components/common/issues/group-issues.tsx
================================================
'use client';

import { cn } from '@/lib/utils';
// import { Issue } from '@/mock-data/issues';
import { Status } from '@/lib/status';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { useViewStore } from '@/store/view-store';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { IssueGrid } from './issue-grid';
import { IssueLine } from './issue-line';
import { Issue } from '@/lib/jazz-schema';
// import { Status } from '@/lib/jazz-schema';

interface GroupIssuesProps {
   status: Status;
   issues: Issue[];
   count: number;
   onIssueClick: (issue: Issue) => void;
}

export function GroupIssues({ status, issues, count, onIssueClick }: GroupIssuesProps) {
   const { viewType } = useViewStore();
   const { openModal } = useCreateIssueStore();

   return (
      <div
         className={cn(
            'bg-conainer',
            viewType === 'grid'
               ? 'overflow-hidden rounded-md h-full flex-shrink-0 w-[348px] flex flex-col'
               : ''
         )}
      >
         <div
            className={cn(
               'sticky top-0 z-10 bg-container w-full',
               viewType === 'grid' ? 'rounded-t-md h-[50px]' : 'h-10'
            )}
         >
            <div
               className={cn(
                  'w-full h-full flex items-center justify-between',
                  viewType === 'grid' ? 'px-3' : 'px-6'
               )}
               style={{
                  backgroundColor: viewType === 'grid' ? `${status.color}10` : `${status.color}08`,
               }}
            >
               <div className="flex items-center gap-2">
                  <status.icon />
                  <span className="text-sm font-medium">{status.name}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
               </div>

               <Button
                  className="size-6"
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                     e.stopPropagation();
                     openModal(status);
                  }}
               >
                  <Plus className="size-4" />
               </Button>
            </div>
         </div>

         {viewType === 'list' ? (
            <div className="space-y-0">
               {issues.map((issue) => (
                  <IssueLine key={issue.id} issue={issue} onClick={() => onIssueClick(issue)} />
               ))}
            </div>
         ) : (
            <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-zinc-50/50 dark:bg-zinc-900/50">
               {issues.map((issue) => (
                  <IssueGrid key={issue.id} issue={issue} onClick={() => onIssueClick(issue)} />
               ))}
            </div>
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/issue-attachments.tsx
================================================
'use client';

import { useState, useRef } from 'react';
import { Issue as IssueType, Attachment, AttachmentList } from '@/lib/jazz-schema';
import { FileStream } from 'jazz-tools';
import { ProgressiveImg, createImage } from 'jazz-react';

interface IssueAttachmentsProps {
   issueData: IssueType;
}

type FileType = 'image' | 'video' | 'audio' | 'document' | 'other';

export function IssueAttachments({ issueData }: IssueAttachmentsProps) {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [isUploading, setIsUploading] = useState(false);
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState<string | null>(null);

   // Use a local variable for attachments to avoid mutating props
   const attachments: AttachmentList =
      issueData.attachments ?? AttachmentList.create([], issueData._owner);

   const handleFileClick = () => {
      fileInputRef.current?.click();
   };

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      // Check file size (5MB limit for images)
      if (file.type.startsWith('image/') && file.size > 5000000) {
         setError('Please upload an image less than 5MB.');
         return;
      }

      try {
         setError(null);
         setIsUploading(true);
         setProgress(0);

         // Determine file type
         let fileType: FileType = 'other';
         if (file.type.startsWith('image/')) fileType = 'image';
         else if (file.type.startsWith('video/')) fileType = 'video';
         else if (file.type.startsWith('audio/')) fileType = 'audio';
         else if (file.type.includes('pdf') || file.type.includes('document'))
            fileType = 'document';

         // Create attachment with appropriate properties
         let attachment: Attachment;

         if (fileType === 'image' && attachments) {
            // For images, use createImage and save to attachment.image
            console.log('createImage', createImage);
            const image = await createImage(file, {
               owner: attachments._owner,
               maxSize: 2048,
            });

            console.log('image', image);

            // Update progress manually since createImage doesn't support onProgress
            setProgress(100);

            // Create filestream for compatibility with the Attachment model
            // const fileStream = await FileStream.createFromBlob(file, {});

            // Create attachment with both file (required) and image properties
            attachment = Attachment.create(
               {
                  name: file.name,
                  //    file: fileStream, // File is required by the model
                  image: image, // Store the image for display
                  type: fileType,
               },
               issueData._owner
            );
         } else {
            // For non-images, use FileStream and save to attachment.file
            const fileStream = await FileStream.createFromBlob(file, {
               onProgress: (p: number) => setProgress(Math.round(p * 100)),
            });

            attachment = Attachment.create(
               {
                  name: file.name,
                  file: fileStream, // Use file property for non-images
                  type: fileType,
               },
               issueData._owner
            );
         }

         // Add to the issue
         if (attachments) {
            attachments.push(attachment);
         }
      } catch (err) {
         setError(err instanceof Error ? err.message : 'Failed to upload file');
         console.error('Error uploading file:', err);
      } finally {
         setIsUploading(false);
         // Reset the file input
         if (fileInputRef.current) {
            fileInputRef.current.value = '';
         }
      }
   };

   const handleDeleteAttachment = (attachment: Attachment) => {
      if (!attachments) return;

      const index = attachments.indexOf(attachment);
      if (index !== -1) {
         attachments.splice(index, 1);
      }
   };

   const handleDownloadAttachment = (attachment: Attachment) => {
      // Always use file for download as it's guaranteed to exist
      if (!attachment.file) return;

      try {
         const blob = attachment.file.toBlob();
         const url = URL.createObjectURL(blob || new Blob());
         const a = document.createElement('a');
         a.href = url;
         a.download = attachment.name || 'download';
         a.click();
         URL.revokeObjectURL(url);
      } catch (err) {
         console.error('Error downloading file:', err);
      }
   };

   // Format file size for display
   const formatFileSize = (bytes?: number): string => {
      if (!bytes) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
   };

   return (
      <div className="flex flex-col gap-4">
         <div className="flex items-center justify-between">
            <h3 className="text-md font-medium">Attachments</h3>
            <button
               onClick={handleFileClick}
               className="flex items-center gap-2 text-sm text-white/70 hover:text-white/100 bg-foreground/10 px-3 py-1.5 rounded-md"
               disabled={isUploading}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                  <path d="M18 5V3M18 11V9M12 5h2m4 4h2" />
                  <circle cx="18" cy="7" r="2" />
               </svg>
               {isUploading ? `Uploading... ${progress}%` : 'Add file'}
            </button>
            <input
               type="file"
               ref={fileInputRef}
               className="hidden"
               onChange={handleFileChange}
               accept="image/*, audio/*, video/*, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
               disabled={isUploading}
            />
         </div>

         {error && (
            <div className="text-red-500 text-sm" role="alert">
               {error}
            </div>
         )}

         {attachments && attachments.length > 0 && (
            <div className="flex flex-col gap-4 mt-2">
               {attachments.map((attachment, index) => {
                  if (!attachment || attachment.deleted) return null;

                  console.log('attachment', attachment);

                  // For image type attachments, display the image using attachment.image
                  if (attachment.type === 'image' && attachment.image) {
                     console.log('attachment.image', attachment.image);
                     return (
                        <div
                           key={index}
                           className="flex flex-col bg-foreground/5 rounded-md overflow-hidden"
                        >
                           <div className="flex justify-center p-2">
                              <ProgressiveImg image={attachment.image}>
                                 {({ src }) => (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                       className="h-auto max-h-[20rem] max-w-full rounded-md"
                                       src={src || ''}
                                       alt={attachment.name}
                                    />
                                 )}
                              </ProgressiveImg>
                           </div>
                           <div className="flex items-center justify-between p-3 border-t border-foreground/10">
                              <div className="flex items-center gap-3">
                                 <span>🖼️</span>
                                 <div className="flex flex-col">
                                    <span className="text-sm font-medium">{attachment.name}</span>
                                    <span className="text-xs text-white/50">
                                       {formatFileSize(
                                          attachment.file?.getChunks()?.totalSizeBytes
                                       )}
                                    </span>
                                 </div>
                              </div>
                              <div className="flex gap-2">
                                 <button
                                    onClick={() => handleDownloadAttachment(attachment)}
                                    className="text-white/70 hover:text-white/100"
                                    title="Download"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                       <polyline points="7 10 12 15 17 10" />
                                       <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                 </button>
                                 <button
                                    onClick={() => handleDeleteAttachment(attachment)}
                                    className="text-white/70 hover:text-red-500"
                                    title="Delete"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <polyline points="3 6 5 6 21 6" />
                                       <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  }

                  // For non-image attachments, use the existing display with attachment.file
                  const fileData = attachment.file?.getChunks();
                  return (
                     <div
                        key={index}
                        className="flex items-center justify-between bg-foreground/5 p-3 rounded-md"
                     >
                        <div className="flex items-center gap-3">
                           {attachment.type === 'video' && <span>🎬</span>}
                           {attachment.type === 'audio' && <span>🎵</span>}
                           {attachment.type === 'document' && <span>📄</span>}
                           {attachment.type === 'other' && <span>📎</span>}
                           <div className="flex flex-col">
                              <span className="text-sm font-medium">{attachment.name}</span>
                              <span className="text-xs text-white/50">
                                 {formatFileSize(fileData?.totalSizeBytes)}
                              </span>
                           </div>
                        </div>
                        <div className="flex gap-2">
                           <button
                              onClick={() => handleDownloadAttachment(attachment)}
                              className="text-white/70 hover:text-white/100"
                              title="Download"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                 <polyline points="7 10 12 15 17 10" />
                                 <line x1="12" y1="15" x2="12" y2="3" />
                              </svg>
                           </button>
                           <button
                              onClick={() => handleDeleteAttachment(attachment)}
                              className="text-white/70 hover:text-red-500"
                              title="Delete"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="16"
                                 height="16"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <polyline points="3 6 5 6 21 6" />
                                 <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  );
               })}
            </div>
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/issue-detail.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Organization, Issue as IssueType } from '@/lib/jazz-schema';
import { Issue } from '@/components/common/issues/Issue';
import { useMemo } from 'react';
import { ID, Profile } from 'jazz-tools';

interface IssueDetailProps {
   organization: Organization;
   issueId: string;
   currentUserId: ID<Profile> | undefined;
}

export default function IssueDetail({ organization, issueId, currentUserId }: IssueDetailProps) {
   // Deeply load the organization with teams using useCoState
   const orgWithData = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: {
               issues: {
                  $each: {
                     childIssues: { $each: true }, // Deeply load child issues
                     attachments: { $each: { file: true, image: true } },
                     comments: { $each: { attachments: { $each: true } } },
                  },
               },
            },
         },
      },
   });

   // Find the specific issue across all teams (move useMemo before conditional returns)
   const issueData = useMemo(() => {
      if (orgWithData === undefined || orgWithData === null || !orgWithData.teams) return null;

      let foundIssue: IssueType | null = null;

      // Search for the issue in all teams
      for (const team of orgWithData.teams) {
         if (!team || !team.issues) continue;

         // Look for the issue in this team's issues
         for (const issue of team.issues) {
            if (!issue) continue;
            if (issue.identifier === issueId) {
               foundIssue = issue;
               break;
            }
         }

         if (foundIssue) break;
      }

      return foundIssue;
   }, [orgWithData, issueId]);

   // Handle loading states properly
   if (orgWithData === undefined)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
         </div>
      );

   if (orgWithData === null)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Organization not found or access denied</div>
         </div>
      );

   // Return issue not found if the issue doesn't exist
   if (!issueData) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Issue not found</div>
         </div>
      );
   }

   // Render the issue with all the deeply loaded data
   return <Issue issueData={issueData} currentUserId={currentUserId} />;
}



================================================
FILE: components/common/issues/issue-grid.tsx
================================================
'use client';

import { format } from 'date-fns';
import { motion } from 'motion/react';
import { AssigneeUser } from './assignee-user';
import { LabelBadge } from './label-badge';
import { PrioritySelector } from './priority-selector';
import { StatusSelector } from './status-selector';
import { Issue } from '@/lib/jazz-schema';

interface IssueGridProps {
   issue: Issue;
   onClick?: () => void;
}

export function IssueGrid({ issue, onClick }: IssueGridProps) {
   return (
      <motion.div
         layoutId={`issue-grid-${issue.identifier}`}
         className="w-full p-3 bg-background rounded-md shadow-xs border border-border/50 cursor-pointer"
         onClick={onClick}
      >
         <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
               <PrioritySelector issue={issue} />
               <span className="text-xs text-muted-foreground font-medium">{issue.identifier}</span>
            </div>
            <StatusSelector issue={issue} />
         </div>

         <h3 className="text-sm font-semibold mb-3 line-clamp-2">{issue.title}</h3>

         <div className="flex flex-wrap gap-1.5 mb-3 min-h-[1.5rem]">
            {issue.labels && <LabelBadge labels={issue.labels} />}
         </div>

         <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xs text-muted-foreground">
               {format(new Date(issue._edits.title.all[0].madeAt), 'MMM dd')}
            </span>
            <AssigneeUser issue={issue} />
         </div>
      </motion.div>
   );
}



================================================
FILE: components/common/issues/issue-line.tsx
================================================
'use client';

import { format } from 'date-fns';
import { AssigneeUser } from './assignee-user';
import { LabelBadge } from './label-badge';
import { PrioritySelector } from './priority-selector';
import { StatusSelector } from './status-selector';
import { Issue } from '@/lib/jazz-schema';

interface IssueLineProps {
   issue: Issue;
   onClick?: () => void;
}

export function IssueLine({ issue, onClick }: IssueLineProps) {
   return (
      <div
         onClick={onClick}
         className="w-full flex items-center justify-start h-11 px-6 hover:bg-sidebar/50 cursor-pointer"
      >
         <div className="flex items-center gap-0.5">
            <PrioritySelector issue={issue} />
            <span className="text-sm hidden sm:inline-block text-muted-foreground font-medium w-[66px] truncate shrink-0 mr-0.5">
               {issue.identifier}
            </span>
            <StatusSelector issue={issue} />
         </div>
         <span className="min-w-0 flex items-center justify-start mr-1 ml-0.5">
            <span className="text-xs sm:text-sm font-medium sm:font-semibold truncate">
               {issue.title}
            </span>
         </span>
         <div className="flex items-center justify-end gap-2 ml-auto sm:w-fit">
            <div className="w-3 shrink-0"></div>
            <div className="-space-x-5 hover:space-x-1 lg:space-x-1 items-center justify-end hidden sm:flex duration-200 transition-all">
               {issue.labels && <LabelBadge labels={issue.labels} />}
            </div>
            <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline-block">
               {format(new Date(issue._edits.title.all[0].madeAt), 'MMM dd')}
            </span>
            <AssigneeUser issue={issue} />
         </div>
      </div>
   );
}



================================================
FILE: components/common/issues/issue-sidebar.tsx
================================================
'use client';

import {
   Issue,
   StatusType,
   PriorityType,
   Assignee,
   UserProfile,
   Label,
   LabelList,
} from '@/lib/jazz-schema';
import { StatusSelector } from '@/components/layout/sidebar/create-new-issue/status-selector';
import { PrioritySelector } from '@/components/layout/sidebar/create-new-issue/priority-selector';
import { AssigneeSelector } from '@/components/layout/sidebar/create-new-issue/assignee-selector';
import { LabelSelector } from '@/components/layout/sidebar/create-new-issue/label-selector';
import { toast } from 'sonner';
import { Group } from 'jazz-tools';

interface IssueSidebarProps {
   issueData: Issue;
}

export function IssueSidebar({ issueData }: IssueSidebarProps) {
   const issueOrganization = issueData?.parentOrganization;

   const profiles = issueData._owner
      .castAs(Group)
      .members.map((member) => member.account.profile)
      .filter(Boolean);

   // Get organization labels
   const organizationLabels = issueOrganization?.labels || LabelList.create([], issueData._owner);

   const handleStatusChange = (newStatus: typeof StatusType) => {
      if (issueData && newStatus) {
         issueData.updateIssueStatus(newStatus);
      }
   };

   const handlePriorityChange = (newPriority: typeof PriorityType) => {
      if (issueData && newPriority) {
         issueData.updateIssuePriority(newPriority);
      }
   };

   const handleAssigneeChange = (newAssignee: typeof Assignee) => {
      if (issueData) {
         issueData.updateIssueAssignee(newAssignee);
      }
   };

   // Handler for label changes
   const handleLabelsChange = (newLabels: LabelList | null) => {
      if (issueData) {
         issueData.labels = newLabels;
      }
   };

   // Handler to add a new label to the organization
   const handleCreateLabel = (newLabel: typeof Label.prototype) => {
      if (issueOrganization?.labels) {
         issueOrganization.labels.push(newLabel);
         toast.success('Label added to organization');
      } else {
         toast.error('Could not add label to organization');
      }
   };

   return (
      <>
         <div className="space-y-4">
            <div>
               <h3 className="text-xs font-medium text-white/50 mb-2">Status</h3>
               <StatusSelector status={issueData?.statusType} onChange={handleStatusChange} />
            </div>
            <div>
               <h3 className="text-xs font-medium text-white/50 mb-2">Priority</h3>
               <PrioritySelector priority={issueData?.priority} onChange={handlePriorityChange} />
            </div>
            <div>
               <h3 className="text-xs font-medium text-white/50 mb-2">Assignee</h3>
               <AssigneeSelector
                  assignee={issueData?.assignee}
                  users={profiles as UserProfile[]}
                  onChange={handleAssigneeChange}
               />
            </div>
            <div>
               <h3 className="text-xs font-medium text-white/50 mb-2">Labels</h3>
               <LabelSelector
                  availableLabels={organizationLabels}
                  selectedLabels={issueData?.labels || null}
                  onChange={handleLabelsChange}
                  onCreateLabel={handleCreateLabel}
               />
            </div>
         </div>
      </>
   );
}



================================================
FILE: components/common/issues/Issue.tsx
================================================
'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import { IssueSidebar } from '@/components/common/issues/issue-sidebar';
import { SubIssues } from '@/components/common/issues/sub-issues';
import { CommentSection } from '@/components/common/issues/CommentSection';
import { IssueAttachments } from '@/components/common/issues/issue-attachments';
import { Issue as IssueType } from '@/lib/jazz-schema';
import { ID } from 'jazz-tools';
import { Profile } from 'jazz-tools';

interface IssueProps {
   issueData: IssueType;
   currentUserId: ID<Profile> | undefined;
}

export function Issue({ issueData, currentUserId }: IssueProps) {
   const editor = useEditor(
      {
         extensions: [
            StarterKit.configure({
               bulletList: false,
            }),
            BulletList.configure({
               keepMarks: true,
               HTMLAttributes: {
                  class: 'text-white/50',
               },
            }),
            ListItem,
         ],
         content: issueData.description,
         onUpdate: ({ editor }) => {
            const newContent = editor.getHTML();
            issueData.description = newContent;
         },
      },
      []
   );

   const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTitle = e.target.value;

      issueData.title = newTitle;
   };

   return (
      <div className="flex h-full">
         <div className="flex-1 px-6">
            <div className="max-w-[800px] py-6 mx-auto flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                  <input
                     type="text"
                     value={issueData.title || ''}
                     onChange={changeTitle}
                     className="text-2xl font-bold bg-transparent border-0 focus:outline-none focus:ring-0 p-0 w-full"
                  />
                  <div className="placeholder:text-white/50 text-white/80 font-medium">
                     <EditorContent editor={editor} />
                  </div>

                  <IssueAttachments issueData={issueData} />

                  <SubIssues parentIssue={issueData} />
               </div>

               <CommentSection issueData={issueData} currentUserId={currentUserId} />
            </div>
         </div>

         <div className="w-[300px] min-w-[300px] bg-foreground/3 border-l border-border">
            <div className="sticky top-0 p-6">
               <IssueSidebar issueData={issueData} />
            </div>
         </div>
      </div>
   );
}



================================================
FILE: components/common/issues/issues.tsx
================================================
'use client';

import { GroupIssues } from '@/components/common/issues/group-issues';
import { cn } from '@/lib/utils';
import { status } from '@/lib/status';
import { useSearchStore } from '@/store/search-store';
import { useViewStore } from '@/store/view-store';
import { SearchIssues } from './search-issues';
import { Issue, groupIssuesByStatus, Organization } from '@/lib/jazz-schema';
import { useRouter, useParams } from 'next/navigation';

export default function Issues({
   issues,
   type,
}: {
   issues: Issue[] | undefined;
   type: 'my-issues' | 'all-issues';
   organization?: Organization;
}) {
   const { searchQuery, filters } = useSearchStore();
   const { viewType } = useViewStore();
   const router = useRouter();
   const params = useParams();
   const orgId = params.orgId as string;

   const issuesByStatus = groupIssuesByStatus(issues ?? []);
   const hasNoIssues = !issues || issues.length === 0;

   const navigateToIssue = (issue: Issue) => {
      if (issue && issue.identifier) {
         router.push(`/${orgId}/issue/${issue.identifier}`);
      }
   };

   const hasActiveFiltering = searchQuery.trim() !== '' || Object.keys(filters).length > 0;

   if (type === 'my-issues' && hasNoIssues) {
      return (
         <div className="flex items-center justify-center h-full">
            <p className="text-lg text-muted-foreground">There are no issues assigned to you</p>
         </div>
      );
   }

   const safeIssues = issues?.filter((issue): issue is Issue => issue !== null) || [];

   return (
      <div className={cn('w-full h-full', viewType === 'grid' ? 'overflow-x-auto' : '')}>
         {hasActiveFiltering ? (
            <div className="px-6 mb-6">
               {safeIssues.length > 0 && (
                  <SearchIssues issues={safeIssues} onIssueClick={navigateToIssue} />
               )}
            </div>
         ) : viewType === 'list' ? (
            <div>
               {status.map((statusItem) => {
                  const statusIssues = issuesByStatus[statusItem?.type || ''] || [];
                  if (statusIssues.length === 0) return null;

                  return (
                     <GroupIssues
                        key={statusItem?.type}
                        status={statusItem}
                        issues={statusIssues}
                        count={statusIssues.length}
                        onIssueClick={navigateToIssue}
                     />
                  );
               })}
            </div>
         ) : (
            <div className="flex h-full gap-3 px-2 py-2 min-w-max">
               {status.map((statusItem) => (
                  <GroupIssues
                     key={statusItem?.type}
                     status={statusItem}
                     issues={issuesByStatus[statusItem?.type || ''] || []}
                     count={issuesByStatus[statusItem?.type || '']?.length || 0}
                     onIssueClick={navigateToIssue}
                  />
               ))}
            </div>
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/label-badge.tsx
================================================
import { Badge } from '@/components/ui/badge';
import { LabelList } from '@/lib/jazz-schema';

export function LabelBadge({ labels }: { labels: LabelList }) {
   return (
      <>
         {labels.map((l, index) => (
            <Badge
               key={l?.id ?? l?.name ?? index}
               variant="outline"
               className="gap-1.5 rounded-full text-muted-foreground bg-background"
            >
               <span
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: l?.color }}
                  aria-hidden="true"
               ></span>
               {l?.name}
            </Badge>
         ))}
      </>
   );
}



================================================
FILE: components/common/issues/my-issues-list.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Issue, Organization, UserProfile } from '@/lib/jazz-schema';
import Issues from './issues';
import { useMemo } from 'react';

interface MyIssuesListProps {
   organization: Organization;
   profile: UserProfile;
}

export default function MyIssuesList({ organization, profile }: MyIssuesListProps) {
   // Deeply load teams and their issues for this organization using useCoState
   const orgWithTeams = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: {
               issues: { $each: true }, // Deeply load all issues for each team
            },
         },
      },
   });

   // Collect and filter issues assigned to the current user from all teams
   const myIssues = useMemo(() => {
      if (orgWithTeams === undefined || orgWithTeams === null) return [];
      if (!orgWithTeams.teams || !profile?.id) return [];

      // Collect issues from all teams
      const allIssues: Issue[] = [];
      orgWithTeams.teams.forEach((team) => {
         if (team?.issues) {
            team.issues.forEach((issue) => {
               if (issue) allIssues.push(issue);
            });
         }
      });

      // Filter issues assigned to the current user
      return allIssues.filter((issue) => issue.assignee?.id === profile.id);
   }, [orgWithTeams, profile?.id]);

   // Handle loading states
   if (orgWithTeams === undefined) return <div>Loading...</div>;
   if (orgWithTeams === null) return <div>Organization not found or access denied</div>;

   return <Issues issues={myIssues} type="my-issues" />;
}



================================================
FILE: components/common/issues/priority-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Issue, PriorityType } from '@/lib/jazz-schema';
// import { useIssuesStore } from '@/store/issues-store';
import { priorities } from '@/lib/priorities';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface PrioritySelectorProps {
   issue: Issue;
}

export function PrioritySelector({ issue }: PrioritySelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<string>(issue.priority);

   // const { filterByPriority, updateIssuePriority } = useIssuesStore();

   useEffect(() => {
      setValue(issue.priority);
   }, [issue.priority]);

   const handlePriorityChange = (priorityType: typeof PriorityType) => {
      setValue(priorityType);
      setOpen(false);

      if (issue) {
         const newPriority = priorities.find((p) => p.type === priorityType);
         if (newPriority) {
            issue.updateIssuePriority(priorityType);
         }
      }
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="size-7 flex items-center justify-center"
                  size="icon"
                  variant="ghost"
                  role="combobox"
                  aria-expanded={open}
               >
                  {(() => {
                     const selectedItem = priorities.find((item) => item.type === value);
                     if (selectedItem) {
                        const Icon = selectedItem.icon;
                        return <Icon className="text-muted-foreground size-4" />;
                     }
                     return null;
                  })()}
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Set priority..." />
                  <CommandList>
                     <CommandEmpty>No priority found.</CommandEmpty>
                     <CommandGroup>
                        {priorities.map((item) => (
                           <CommandItem
                              key={item.type}
                              value={item.type}
                              onSelect={() =>
                                 handlePriorityChange(item.type as typeof PriorityType)
                              }
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon className="text-muted-foreground size-4" />
                                 {item.name}
                              </div>
                              {value === item.type && <CheckIcon size={16} className="ml-auto" />}
                              <span className="text-muted-foreground text-xs">
                                 {/* {filterByPriority(item.type).length} */}
                                 PLACEHOLDER
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/common/issues/search-issues.tsx
================================================
'use client';

import { useSearchStore } from '@/store/search-store';
import { useEffect, useState } from 'react';
import { IssueLine } from './issue-line';
import { Issue, IssueList, searchIssues, filterIssues } from '@/lib/jazz-schema';

interface SearchIssuesProps {
   issues: Issue[] | IssueList;
   onIssueClick?: (issue: Issue) => void;
}

export function SearchIssues({ issues, onIssueClick }: SearchIssuesProps) {
   const [filteredResults, setFilteredResults] = useState<Issue[]>([]);
   const { searchQuery, filters } = useSearchStore();

   useEffect(() => {
      const cleanIssues: Issue[] = Array.from(issues).filter(
         (issue): issue is Issue => issue !== null && issue !== undefined
      );

      let results: Issue[] = [...cleanIssues];

      if (Object.keys(filters).length > 0) {
         const filteredResults = filterIssues(cleanIssues, filters);
         results = filteredResults.filter(
            (issue): issue is Issue => issue !== null && issue !== undefined
         );
      }

      if (searchQuery.trim() !== '') {
         const searchResults = searchIssues(results, searchQuery);
         results = searchResults.filter(
            (issue): issue is Issue => issue !== null && issue !== undefined
         );
      }

      setFilteredResults(results);
   }, [searchQuery, issues, filters]);

   console.log('filtered results', filteredResults);

   // if (!isSearchOpen) {
   //    return null;
   // }

   const hasFilters = Object.keys(filters).length > 0;
   const hasSearchQuery = searchQuery.trim() !== '';
   const showResults = hasFilters || hasSearchQuery;

   console.log('showResults', showResults);

   return (
      <div className="w-full">
         {showResults && (
            <div>
               {filteredResults.length > 0 ? (
                  <div className="border rounded-md mt-4">
                     <div className="py-2 px-4 border-b bg-muted/50">
                        <h3 className="text-sm font-medium">Results ({filteredResults.length})</h3>
                     </div>
                     <div className="divide-y">
                        {filteredResults.map((issue) => (
                           <IssueLine
                              key={issue.id}
                              issue={issue}
                              onClick={() => onIssueClick && onIssueClick(issue)}
                           />
                        ))}
                     </div>
                  </div>
               ) : (
                  <div className="text-center py-8 text-muted-foreground">
                     No results found {hasSearchQuery && <>for &quot;{searchQuery}&quot;</>}
                  </div>
               )}
            </div>
         )}
      </div>
   );
}



================================================
FILE: components/common/issues/status-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Issue, StatusType } from '@/lib/jazz-schema';
// import { useIssuesStore } from '@/store/issues-store';
import { status as allStatus } from '@/lib/status';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface StatusSelectorProps {
   issue: Issue;
}

export function StatusSelector({ issue }: StatusSelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<string>(issue.statusType);

   // const { updateIssueStatus, filterByStatus } = useIssuesStore();

   useEffect(() => {
      setValue(issue.statusType);
   }, [issue.statusType]);

   const handleStatusChange = (statusType: typeof StatusType) => {
      setValue(statusType);
      setOpen(false);

      if (issue) {
         const newStatus = allStatus.find((s) => s.type === statusType);
         if (newStatus) {
            issue.updateIssueStatus(statusType);
         }
      }
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="size-7 flex items-center justify-center"
                  size="icon"
                  variant="ghost"
                  role="combobox"
                  aria-expanded={open}
               >
                  {(() => {
                     const selectedItem = allStatus.find((item) => item.type === value);
                     if (selectedItem) {
                        const Icon = selectedItem.icon;
                        return <Icon />;
                     }
                     return null;
                  })()}
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Set status..." />
                  <CommandList>
                     <CommandEmpty>No status found.</CommandEmpty>
                     <CommandGroup>
                        {allStatus.map((item) => (
                           <CommandItem
                              key={item.type}
                              value={item.type}
                              onSelect={() => handleStatusChange(item.type as typeof StatusType)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon />
                                 {item.name}
                              </div>
                              {value === item.type && <CheckIcon size={16} className="ml-auto" />}
                              <span className="text-muted-foreground text-xs">
                                 {/* {filterByStatus(item.type).length} */}
                                 PLACEHOLDER
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/common/issues/sub-issues.tsx
================================================
'use client';

import { useState, useEffect } from 'react';
import { EditorContent, useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from '@/components/ui/button';
import {
   Issue,
   StatusType,
   PriorityType,
   Assignee,
   UserProfile,
   IssueList,
   Team,
} from '@/lib/jazz-schema';
import { StatusSelector } from '@/components/layout/sidebar/create-new-issue/status-selector';
import { PrioritySelector } from '@/components/layout/sidebar/create-new-issue/priority-selector';
import { AssigneeSelector } from '@/components/layout/sidebar/create-new-issue/assignee-selector';
import { status } from '@/lib/status';
import { CoMapInit } from 'jazz-tools';
import { useRouter, useParams } from 'next/navigation';

const isEditorEmpty = (editor: Editor | null) => {
   if (!editor) return true;
   const text = editor.getText().trim();
   return text.length === 0;
};

interface SubIssuesProps {
   parentIssue: Issue;
}

export function SubIssues({ parentIssue }: SubIssuesProps) {
   const subIssues = parentIssue?.childIssues;
   const [showSubIssueEditor, setShowSubIssueEditor] = useState(false);
   const [isSubIssuesExpanded, setIsSubIssuesExpanded] = useState(true);
   const router = useRouter();
   const params = useParams();
   const orgId = params.orgId as string;

   // New sub-issue form state
   const [newSubIssueStatus, setNewSubIssueStatus] = useState<typeof StatusType>('to-do');
   const [newSubIssuePriority, setNewSubIssuePriority] =
      useState<typeof PriorityType>('no-priority');
   const [newSubIssueAssignee, setNewSubIssueAssignee] = useState<typeof Assignee | null>(null);

   // Get parent issue's team
   const issueTeam = parentIssue?.team as Team;

   // Use a simplified approach for profiles
   let profiles: UserProfile[] = [];
   if (parentIssue?.assignee) {
      // At minimum, include the current assignee in the profiles list
      profiles = [parentIssue.assignee];
   }

   const subIssueTitleEditor = useEditor({
      extensions: [
         StarterKit.configure({
            bulletList: false,
         }),
         BulletList.configure({
            keepMarks: true,
            HTMLAttributes: {
               class: 'text-white/90',
            },
         }),
         Placeholder.configure({
            placeholder: 'Issue title',
            emptyEditorClass: 'is-editor-empty',
         }),
      ],
   });

   const subIssueDescriptionEditor = useEditor({
      extensions: [
         StarterKit.configure({
            bulletList: false,
         }),
         BulletList.configure({
            keepMarks: true,
            HTMLAttributes: {
               class: 'text-white/90',
            },
         }),
         Placeholder.configure({
            placeholder: 'Add description...',
            emptyEditorClass: 'is-editor-empty',
         }),
      ],
   });

   useEffect(() => {
      if (subIssueTitleEditor && showSubIssueEditor) {
         subIssueTitleEditor.commands.focus('start');
      }
   }, [subIssueTitleEditor, showSubIssueEditor]);

   // Helper function to get status icon
   const getStatusIcon = (statusType: typeof StatusType) => {
      const statusObj = status.find((s) => s.type === statusType);
      if (statusObj) {
         const Icon = statusObj.icon;
         return <Icon />;
      }
      return null;
   };

   // Function to navigate to issue detail page
   const navigateToIssue = (issue: Issue | null) => {
      if (issue && issue.identifier) {
         router.push(`/${orgId}/issue/${issue.identifier}`);
      }
   };

   return (
      <>
         {/* {subIssues?.length && subIssues.length > 0 && ( */}
         <div className="flex flex-col gap-2 mt-2 w-[98%] mx-auto">
            <div className="flex items-center justify-between text-white/50 font-semibold text-xs gap-2">
               <div className="flex items-center gap-2">
                  <button
                     onClick={() => setIsSubIssuesExpanded(!isSubIssuesExpanded)}
                     className="hover:text-white/90 transition-colors"
                  >
                     <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        className={`transform transition-transform ${isSubIssuesExpanded ? 'rotate-90' : ''}`}
                     >
                        <path
                           d="M6 12l4-4-4-4"
                           strokeWidth="1.5"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     </svg>
                  </button>
                  <span>Sub-issues</span>
                  <p className="text-xs">
                     <span className="text-white/80">
                        {subIssues?.filter((issue) => issue?.statusType === 'completed').length}
                     </span>
                     /<span className="text-white/50">{subIssues?.length}</span>
                  </p>
               </div>
               <button
                  onClick={() => setShowSubIssueEditor(true)}
                  className="text-white/50 text-xs font-medium hover:text-white hover:bg-foreground/10 px-2 py-1 rounded-md hover:cursor-pointer"
               >
                  + Add sub-issues
               </button>
            </div>
            {isSubIssuesExpanded && (
               <div className="flex flex-col gap-2">
                  {subIssues?.map((subIssue) => (
                     <div
                        key={subIssue?.id}
                        className="flex items-center gap-2 p-2 rounded-md hover:cursor-pointer hover:bg-foreground/4"
                        onClick={() => navigateToIssue(subIssue)}
                     >
                        <div className="text-white/50 hover:text-white/90">
                           {getStatusIcon(subIssue?.statusType as typeof StatusType)}
                        </div>

                        <div className="flex-1">
                           <p className="text-sm font-medium text-white/90">{subIssue?.title}</p>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
         {/* )} */}

         {subIssues?.length === 0 && (
            <button
               onClick={() => setShowSubIssueEditor(true)}
               className="text-white/50 mr-auto text-xs font-medium hover:text-white hover:bg-foreground/10 px-2 py-1 rounded-md hover:cursor-pointer"
            >
               + Add sub-issues
            </button>
         )}

         {showSubIssueEditor && (
            <div className="relative mt-4">
               <div className="flex flex-col gap-3 w-full border border-neutral-800 bg-foreground/3 rounded-md p-4">
                  <div className="flex items-center gap-3">
                     <div className="text-white/50 hover:text-white/90">
                        {getStatusIcon(newSubIssueStatus)}
                     </div>
                     <div className="flex-1">
                        <EditorContent
                           className="text-white/90 placeholder:text-white/40 text-sm font-medium focus:outline-none prose-sm prose-invert"
                           editor={subIssueTitleEditor}
                        />
                     </div>
                  </div>

                  <EditorContent
                     className="text-white/90 placeholder:text-white/40 text-sm font-medium focus:outline-none prose-sm prose-invert"
                     editor={subIssueDescriptionEditor}
                  />

                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                     <StatusSelector
                        status={newSubIssueStatus}
                        onChange={(newStatus) => setNewSubIssueStatus(newStatus)}
                     />
                     <PrioritySelector
                        priority={newSubIssuePriority}
                        onChange={(newPriority) => setNewSubIssuePriority(newPriority)}
                     />
                     <AssigneeSelector
                        assignee={newSubIssueAssignee}
                        users={profiles}
                        onChange={(newAssignee) => setNewSubIssueAssignee(newAssignee)}
                     />
                  </div>

                  <div className="flex flex-row border-t pt-3 mt-3">
                     <div className="flex items-center gap-2">
                        <Button
                           size="sm"
                           variant="secondary"
                           className="text-xs px-2 py-1 h-6 bg-neutral-800 hover:bg-neutral-700 text-white/90"
                        >
                           NEW
                        </Button>
                     </div>

                     <div className="flex ml-auto gap-2">
                        <Button
                           onClick={() => {
                              setShowSubIssueEditor(false);
                              subIssueTitleEditor?.commands.clearContent();
                              subIssueDescriptionEditor?.commands.clearContent();
                           }}
                           size="sm"
                           variant="ghost"
                           className="text-white/50 text-xs font-medium hover:text-white hover:bg-foreground/10 px-3 py-1 h-7"
                        >
                           Cancel
                        </Button>
                        <Button
                           onClick={() => {
                              if (isEditorEmpty(subIssueTitleEditor)) {
                                 subIssueTitleEditor?.commands.focus();
                                 return;
                              }

                              const title = subIssueTitleEditor?.getHTML() || '';
                              const description = subIssueDescriptionEditor?.getHTML() || '';

                              // First ensure we have a valid team from the parent issue
                              if (!parentIssue.team) {
                                 console.error(
                                    "Cannot create sub-issue: parent issue doesn't have a team"
                                 );
                                 return;
                              }

                              const newSubIssue: CoMapInit<Issue> = {
                                 identifier: `${parentIssue.identifier}-${(subIssues?.length || 0) + 1}`,
                                 title: title.replace(/<[^>]*>/g, ''),
                                 description: description.replace(/<[^>]*>/g, ''),
                                 statusType: newSubIssueStatus,
                                 priority: newSubIssuePriority,
                                 assignee: newSubIssueAssignee,
                                 parentIssue: parentIssue,
                                 parentOrganization: parentIssue.parentOrganization,
                                 team: parentIssue.team, // Include the team from parent issue
                              };

                              // Create the new sub-issue
                              const createdSubIssue = Issue.create(newSubIssue, parentIssue._owner);

                              // Initialize childIssues if it doesn't exist
                              if (!parentIssue.childIssues) {
                                 parentIssue.childIssues = IssueList.create([], parentIssue._owner);
                              }

                              // Add to parent's sub-issues list
                              parentIssue.childIssues.push(createdSubIssue);

                              // Add to team's issues if the issue has a team reference
                              if (issueTeam?.issues) {
                                 // Check if the sub-issue is already in the team's issues
                                 const isAlreadyInTeam = issueTeam.issues.some(
                                    (issue) => issue && issue.id === createdSubIssue.id
                                 );
                                 if (!isAlreadyInTeam) {
                                    issueTeam.issues.push(createdSubIssue);
                                 }
                              }

                              // Reset form
                              setShowSubIssueEditor(false);
                              setNewSubIssueStatus('to-do');
                              setNewSubIssuePriority('no-priority');
                              setNewSubIssueAssignee(null);
                              subIssueTitleEditor?.commands.clearContent();
                              subIssueDescriptionEditor?.commands.clearContent();
                           }}
                           size="sm"
                           className={`${
                              isEditorEmpty(subIssueTitleEditor)
                                 ? 'bg-neutral-800/50 cursor-not-allowed'
                                 : 'bg-neutral-800 hover:bg-neutral-700'
                           } text-white/90 text-xs font-medium px-3 py-1 h-7`}
                        >
                           Create
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}



================================================
FILE: components/common/members/invite-member-form.tsx
================================================
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';
import { Organization, Team } from '@/lib/jazz-schema';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { createInviteLink } from 'jazz-react';

type InviteContext = 'organization' | 'team';

interface InviteMemberFormProps {
   inviteContext: InviteContext;
   organization: Organization;
   team?: Team;
   closeModal: () => void;
}

type Role = 'reader' | 'writer' | 'admin' | 'writeOnly';

export function InviteMemberForm({
   inviteContext,
   organization,
   team,
   closeModal,
}: InviteMemberFormProps) {
   const [role, setRole] = useState<Role>('writer');
   const [inviteLink, setInviteLink] = useState<string>('');

   const organizationId = organization?.id;
   const teamId = team?.id;

   // Generate invite link function
   const generateInviteLink = () => {
      if (!organization) return;

      let link = '';
      if (inviteContext === 'organization') {
         link = createInviteLink(organization, role, {
            baseURL: window.location.origin,
            valueHint: 'organization',
         });
      } else if (inviteContext === 'team' && team) {
         link = createInviteLink(team, role, {
            baseURL: window.location.origin,
            valueHint: 'team',
         });
      }

      // Remove the # character from the URL
      const formattedLink = link.replace('#', '');
      setInviteLink(formattedLink);
   };

   // Generate invite link on initial render and when role changes
   useEffect(() => {
      generateInviteLink();
      // Only depend on role and stable primitive values
   }, [role, organizationId, teamId, inviteContext]);

   const copyToClipboard = () => {
      if (inviteLink) {
         navigator.clipboard.writeText(inviteLink);
         toast.success('Invite link copied to clipboard');
      }
   };

   return (
      <>
         <div className="px-4 py-4 space-y-4 w-full">
            <div className="space-y-2">
               <Label htmlFor="role">Member Role</Label>
               <Select value={role} onValueChange={(value) => setRole(value as Role)}>
                  <SelectTrigger id="role" className="w-full">
                     <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="z-[200]">
                     <SelectItem value="reader">Reader</SelectItem>
                     <SelectItem value="writer">Writer</SelectItem>
                     <SelectItem value="admin">Admin</SelectItem>
                     <SelectItem value="writeOnly">Write Only</SelectItem>
                  </SelectContent>
               </Select>
               <p className="text-xs text-muted-foreground">
                  {role === 'reader' && 'Can only view content, cannot make changes.'}
                  {role === 'writer' && 'Can view and edit content.'}
                  {role === 'admin' && 'Full access to view, edit, and manage settings.'}
                  {role === 'writeOnly' && 'Can only make changes, cannot view existing content.'}
               </p>
            </div>

            <div className="space-y-2">
               <Label htmlFor="invite-link">Invite Link</Label>
               <div className="flex gap-2">
                  <Input id="invite-link" value={inviteLink} readOnly className="flex-1" />
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={copyToClipboard}
                     className="shrink-0"
                  >
                     <Copy className="h-4 w-4" />
                  </Button>
               </div>
            </div>
         </div>

         <div className="flex items-center justify-end py-2.5 px-4 w-full border-t mt-4">
            <Button size="sm" onClick={closeModal}>
               Done
            </Button>
         </div>
      </>
   );
}



================================================
FILE: components/common/members/invite-member-modal-provider.tsx
================================================
'use client';

import { InviteMemberModal } from './invite-member-modal';

export function InviteMemberModalProvider() {
   return (
      <div className="hidden">
         <InviteMemberModal trigger={null} />
      </div>
   );
}



================================================
FILE: components/common/members/invite-member-modal.tsx
================================================
'use client';

import { useState, useEffect } from 'react';
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { useParams } from 'next/navigation';
import { Organization, Team } from '@/lib/jazz-schema';
import { useAccount } from 'jazz-react';
import { InviteMemberForm } from './invite-member-form';
import { useInviteMemberStore } from '@/store/invite-member-store';

interface InviteMemberModalProps {
   trigger?: React.ReactNode;
}

export function InviteMemberModal({ trigger }: InviteMemberModalProps) {
   const params = useParams();
   const orgId = params.orgId as string;
   const { isOpen, context, teamId, openModal, closeModal } = useInviteMemberStore();
   const [organization, setOrganization] = useState<Organization | null>(null);
   const [team, setTeam] = useState<Team | null>(null);

   // Load the organization using useAccount which is shown in other components
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: {
                  teams: {
                     $each: true,
                  },
               },
            },
         },
      },
   });

   // Find the organization by slug
   useEffect(() => {
      if (me?.root?.organizations) {
         const org = me.root.organizations.find((org) => org?.slug === orgId);
         if (org) {
            setOrganization(org);

            // If team context, find the team
            if (context === 'team' && teamId && org.teams) {
               const foundTeam = org.teams.find((team) => team?.id === teamId);
               if (foundTeam) {
                  setTeam(foundTeam);
               }
            }
         }
      }
   }, [me, orgId, context, teamId]);

   if (!organization) {
      return null; // Don't render if organization data isn't available
   }

   // If team context but team not found, don't render
   if (context === 'team' && !team) {
      return null;
   }

   const modalTitle =
      context === 'organization'
         ? 'Invite Member to Organization'
         : `Invite Member to Team: ${team?.name}`;

   return (
      <Dialog
         open={isOpen}
         onOpenChange={(value) => (value ? openModal(context, teamId) : closeModal())}
      >
         {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
         <DialogContent className="w-full sm:max-w-[550px] p-0 shadow-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
            <DialogHeader className="px-4 pt-5 pb-0">
               <DialogTitle>{modalTitle}</DialogTitle>
            </DialogHeader>

            {organization ? (
               <InviteMemberForm
                  inviteContext={context}
                  organization={organization}
                  team={team || undefined}
                  closeModal={closeModal}
               />
            ) : (
               <div className="p-8 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
               </div>
            )}
         </DialogContent>
      </Dialog>
   );
}



================================================
FILE: components/common/members/member-line.tsx
================================================
import UserAvatar from '@/components/user-avatar';
import { UserProfile, Organization } from '@/lib/jazz-schema';
import { Group } from 'jazz-tools';
import { MoreVertical, UserMinus } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableCell, TableRow } from '@/components/ui/table';

interface MemberLineProps {
   organization: Organization;
   member: Group['members'][0];
}

export default function MemberLine({ organization, member }: MemberLineProps) {
   console.log('member', member);
   // Create date safely with validation
   // const formatJoinDate = () => {
   //    console.log(
   //       'member.account.root?._edits.organizations',
   //       member.account.root?._edits.organizations
   //    );
   //    const dateString = member.account.root?._edits.organizations?.all[0]?.madeAt;
   //    if (!dateString) return 'N/A';

   //    const date = new Date(dateString);
   //    return isValid(date) ? format(date, 'MMM yyyy') : 'N/A';
   // };

   const memberProfile = member.account.profile as UserProfile;

   const handleRemoveMember = async () => {
      const group = organization._owner.castAs(Group);
      console.log('removing member', member.account);
      await member.account.waitForAllCoValuesSync();
      await group.removeMember(member.account);
      console.log('member removed');
      console.log('role:', group.getRoleOf(member.account.id));
   };

   return (
      <TableRow className="hover:bg-muted/50">
         <TableCell>
            <div className="flex items-center gap-2">
               <div className="relative">
                  <UserAvatar user={memberProfile} showStatus={true} />
               </div>
               <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-medium truncate w-full">
                     {member.account.profile?.name}
                  </span>
                  <span className="text-xs text-muted-foreground truncate w-full">
                     {member.account.profile?.email}
                  </span>
               </div>
            </div>
         </TableCell>
         <TableCell className="text-xs text-muted-foreground">{member.role}</TableCell>
         <TableCell className="text-xs text-muted-foreground">
            {organization
               .getTeamsForMember(memberProfile)
               .map((team) => team.name)
               .join(', ')}
         </TableCell>
         <TableCell className="text-right">
            <div className="flex items-center justify-end">
               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <button className="p-1 rounded-sm hover:bg-muted flex items-center justify-center">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                     </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                     <DropdownMenuItem variant="destructive" onClick={handleRemoveMember}>
                        <UserMinus className="mr-2 h-4 w-4" />
                        <span>Remove Member</span>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </TableCell>
      </TableRow>
   );
}



================================================
FILE: components/common/members/members.tsx
================================================
'use client';

import { Group } from 'jazz-tools';
import MemberLine from './member-line';
import { Organization } from '@/lib/jazz-schema';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function Members({
   organization,
   members,
}: {
   organization: Organization;
   members: Group['members'] | undefined;
}) {
   return (
      <div className="w-full h-full p-4">
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[50%]">Name</TableHead>
                  <TableHead className="w-[20%]">Status</TableHead>
                  <TableHead className="w-[20%]">Teams</TableHead>
                  <TableHead className="w-[10%] text-right">Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {members?.map((member) => (
                  <MemberLine key={member.id} organization={organization} member={member} />
               ))}
            </TableBody>
         </Table>
      </div>
   );
}



================================================
FILE: components/common/members/use-members.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Organization } from '@/lib/jazz-schema';
import { Group } from 'jazz-tools';
import { useMemo } from 'react';

/**
 * Custom hook to get members data from an organization
 * Follows the optimal data loading pattern by using useCoState
 */
export function useMembers(organization: Organization | undefined) {
   // Always call useCoState, but with conditional id
   const orgWithData = useCoState(
      Organization,
      organization?.id, // Will be undefined if organization is undefined
      {
         resolve: {
            // No specific properties to deeply resolve here,
            // we just need access to the organization's owner
         },
      }
   );

   // Always call useMemo, handling undefined cases inside
   const members = useMemo(() => {
      if (!organization || orgWithData === undefined || orgWithData === null) return undefined;
      return orgWithData._owner.castAs(Group).members;
   }, [organization, orgWithData]);

   return {
      members,
      isLoading: organization ? orgWithData === undefined : false,
      isError: organization ? orgWithData === null : false,
   };
}



================================================
FILE: components/common/teams/create-team-modal.tsx
================================================
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { PlusCircle, Heart } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useParams } from 'next/navigation';
import { createNewTeam, JazzAccount } from '@/lib/jazz-schema';
import { generateSlug } from '@/lib/utils';
import { useAccount } from 'jazz-react';
import { Group } from 'jazz-tools';

interface CreateTeamModalProps {
   trigger?: React.ReactNode;
}

export function CreateTeamModal({ trigger }: CreateTeamModalProps) {
   const params = useParams();
   const orgId = params.orgId as string;

   const [open, setOpen] = useState(false);
   const [createMore, setCreateMore] = useState(false);
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [icon, setIcon] = useState('👥');
   const [color, setColor] = useState('#0ea5e9');
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: {
                  teams: {
                     $each: true,
                  },
               },
            },
         },
      },
   });

   const organizations = me?.root?.organizations;
   const organization = organizations?.find((org) => org?.slug === orgId);
   const teams = organization?.teams;

   const resetForm = () => {
      setName('');
      setDescription('');
      setIcon('👥');
      setColor('#0ea5e9');
   };

   const createTeam = async () => {
      setIsSubmitting(true);
      setError(null);

      if (!organization) {
         throw new Error('Organization not found');
      }

      try {
         if (!teams) {
            throw new Error('Could not access teams list');
         }

         // Validate team name
         if (!name.trim()) {
            throw new Error('Team name is required');
         }

         // Generate a slug from the name
         const teamSlug = generateSlug(name.trim());

         // Check if team with this slug already exists
         const existingTeam = teams.find((team) => team?.slug === teamSlug);
         if (existingTeam) {
            throw new Error('A team with this name already exists');
         }

         const { team: newTeam } = createNewTeam(JazzAccount.getMe(), {
            teamName: name.trim(),
            organizationGroup: organization._owner.castAs(Group),
            icon: icon,
            color: color,
         });

         // Add to teams list
         teams.push(newTeam);

         // Reset form if createMore is true, otherwise close modal
         if (createMore) {
            resetForm();
         } else {
            setOpen(false);
         }
      } catch (error) {
         console.error('Error creating team:', error);
         setError(error instanceof Error ? error.message : 'An unknown error occurred');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <Dialog open={open} onOpenChange={(value) => (value ? setOpen(true) : setOpen(false))}>
         <DialogTrigger asChild>
            {trigger || (
               <Button className="flex items-center gap-2">
                  <PlusCircle className="size-4" />
                  Create new team
               </Button>
            )}
         </DialogTrigger>
         <DialogContent
            title="Create New Team"
            className="w-full sm:max-w-[650px] p-0 shadow-xl top-[30%]"
         >
            <div className="flex items-center px-4 pt-4 gap-2">
               <Button size="sm" variant="outline" className="gap-1.5">
                  <Heart className="size-4 text-orange-500 fill-orange-500" />
                  <span className="font-medium">{orgId?.toUpperCase() || 'ORG'}</span>
               </Button>
            </div>

            {error && (
               <div className="mt-2 px-4">
                  <div className="p-3 bg-destructive/10 border border-destructive rounded-md text-destructive text-sm">
                     {error}
                  </div>
               </div>
            )}

            <div className="px-4 pb-0 space-y-3 w-full">
               <Input
                  className="border-none w-full shadow-none outline-none text-2xl font-medium px-0 h-auto focus-visible:ring-0 overflow-hidden text-ellipsis whitespace-normal break-words"
                  placeholder="Team name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />

               <Textarea
                  className="border-none w-full shadow-none outline-none resize-none px-0 min-h-16 focus-visible:ring-0 break-words whitespace-normal overflow-wrap"
                  placeholder="Add description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />

               <div className="w-full flex flex-wrap gap-4">
                  <div className="space-y-2">
                     <Label htmlFor="icon">Team Icon</Label>
                     <Input
                        id="icon"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                        placeholder="👥"
                        className="w-24"
                     />
                  </div>

                  <div className="space-y-2">
                     <Label htmlFor="color">Team Color</Label>
                     <div className="flex items-center gap-2">
                        <Input
                           type="color"
                           id="color"
                           value={color}
                           onChange={(e) => setColor(e.target.value)}
                           className="w-12 h-8 p-1"
                        />
                        <Input
                           id="colorHex"
                           value={color}
                           onChange={(e) => setColor(e.target.value)}
                           placeholder="#0ea5e9"
                           className="w-28"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex items-center justify-between py-2.5 px-4 w-full border-t mt-4">
               <div className="flex items-center gap-2">
                  <div className="flex items-center space-x-2">
                     <Switch
                        id="create-more"
                        checked={createMore}
                        onCheckedChange={setCreateMore}
                     />
                     <Label htmlFor="create-more">Create more</Label>
                  </div>
               </div>
               <Button size="sm" onClick={createTeam} disabled={!name.trim() || isSubmitting}>
                  {isSubmitting ? 'Creating team...' : 'Create team'}
               </Button>
            </div>
         </DialogContent>
      </Dialog>
   );
}



================================================
FILE: components/common/teams/team-color-picker.tsx
================================================
'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface TeamColorPickerProps {
   initialColor: string;
   initialIcon: string;
   teamId: string;
   teamName: string;
   onColorChange: (color: string) => Promise<void>;
   onIconChange?: (icon: string) => Promise<void>;
}

export function TeamColorPicker({
   initialColor = '#0ea5e9',
   initialIcon = '👥',
   teamId,
   teamName,
   onColorChange,
   onIconChange,
}: TeamColorPickerProps) {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedColor, setSelectedColor] = useState(initialColor);
   const [selectedIcon, setSelectedIcon] = useState(initialIcon);
   const [isUpdating, setIsUpdating] = useState(false);

   useEffect(() => {
      setSelectedColor(initialColor);
      setSelectedIcon(initialIcon);
   }, [initialColor, initialIcon]);

   const handleUpdate = async () => {
      if (!teamId) return;

      setIsUpdating(true);
      try {
         // Update color
         await onColorChange(selectedColor);

         // Update icon if handler is provided
         if (onIconChange && selectedIcon !== initialIcon) {
            await onIconChange(selectedIcon);
         }

         toast.success('Team appearance updated successfully');
         setIsOpen(false);
      } catch (error) {
         toast.error('Failed to update team appearance');
         console.error('Error updating team appearance:', error);
      } finally {
         setIsUpdating(false);
      }
   };

   return (
      <>
         <div
            className="h-6 w-6 rounded-md flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-primary/50 transition-all"
            style={{ backgroundColor: initialColor }}
            onClick={() => setIsOpen(true)}
            title="Click to change team appearance"
         >
            <span className="text-sm">{initialIcon}</span>
         </div>

         <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>Change Team Appearance for {teamName}</DialogTitle>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                     <Label htmlFor="teamColor">Team Color</Label>
                     <div className="flex items-center gap-2">
                        <Input
                           type="color"
                           id="teamColor"
                           value={selectedColor}
                           onChange={(e) => setSelectedColor(e.target.value)}
                           className="w-12 h-8 p-1"
                        />
                        <Input
                           id="colorHex"
                           value={selectedColor}
                           onChange={(e) => setSelectedColor(e.target.value)}
                           placeholder="#0ea5e9"
                           className="w-28"
                        />
                        <div
                           className="h-8 w-8 rounded-md flex items-center justify-center flex-shrink-0"
                           style={{ backgroundColor: selectedColor }}
                        >
                           <span className="text-base">{selectedIcon}</span>
                        </div>
                     </div>
                  </div>

                  {onIconChange && (
                     <div className="space-y-2">
                        <Label htmlFor="teamIcon">Team Icon</Label>
                        <Input
                           id="teamIcon"
                           value={selectedIcon}
                           onChange={(e) => setSelectedIcon(e.target.value)}
                           placeholder="👥"
                           className="w-full"
                        />
                     </div>
                  )}
               </div>
               <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                     Cancel
                  </Button>
                  <Button onClick={handleUpdate} disabled={isUpdating}>
                     {isUpdating ? 'Updating...' : 'Update Appearance'}
                  </Button>
               </div>
            </DialogContent>
         </Dialog>
      </>
   );
}



================================================
FILE: components/common/teams/team-issues-list.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Organization, Issue, Team } from '@/lib/jazz-schema';
import Issues from '@/components/common/issues/issues';
import { useMemo, useEffect } from 'react';

interface TeamIssuesListProps {
   organization: Organization;
   teamId: string;
}

export default function TeamIssuesList({ organization, teamId }: TeamIssuesListProps) {
   // Log the team context for future filtering implementation
   useEffect(() => {
      console.log(`Viewing issues in team context: ${teamId}`);
   }, [teamId]);

   // Deeply load the organization with teams and their issues using useCoState
   const orgWithData = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: {
               issues: { $each: true }, // Deeply load issues for each team
            },
         },
      },
   });

   // Get the team's issues
   const teamIssues = useMemo(() => {
      if (orgWithData === undefined || orgWithData === null) return undefined;

      // Get the team from the organization that matches the teamId
      const team = orgWithData.teams?.find((team) => team?.slug === teamId) as Team | undefined;

      // If no matching team is found, return no issues
      if (!team || !team.issues) return [];

      // Return issues from the team
      return team.issues.filter((issue): issue is Issue => {
         // Make sure issue exists
         return issue !== null;
      });
   }, [orgWithData, teamId]);

   // Handle loading states
   if (orgWithData === undefined)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
         </div>
      );

   if (orgWithData === null)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Organization not found or access denied</div>
         </div>
      );

   // Show an empty state if no issues are found
   if (!teamIssues || teamIssues.length === 0) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">No issues found for this team</div>
         </div>
      );
   }

   // Render the Issues component with the team's issues
   return <Issues issues={teamIssues} type="all-issues" />;
}



================================================
FILE: components/common/teams/team-settings-content.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Organization } from '@/lib/jazz-schema';
import { TeamColorPicker } from '@/components/common/teams/team-color-picker';
import { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface TeamSettingsContentProps {
   organization: Organization;
   teamId: string;
}

export default function TeamSettingsContent({ organization, teamId }: TeamSettingsContentProps) {
   const [isEditingName, setIsEditingName] = useState(false);
   const [isEditingSlug, setIsEditingSlug] = useState(false);
   const [editedName, setEditedName] = useState('');
   const [editedSlug, setEditedSlug] = useState('');
   const [isSaving, setIsSaving] = useState(false);

   // Deeply load the organization with teams using useCoState
   const orgWithData = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: true, // Deeply load all teams
         },
      },
   });

   // Find the team with the matching slug - Call useMemo before conditionals
   const team = useMemo(() => {
      if (orgWithData === undefined || orgWithData === null) return null;
      return orgWithData.teams?.find((team) => team?.slug === teamId);
   }, [orgWithData, teamId]);

   // Setup form values when team data changes - Call useEffect before conditionals
   useEffect(() => {
      if (team) {
         setEditedName(team.name);
         setEditedSlug(team.slug);
      }
   }, [team]);

   // Handle loading states
   if (orgWithData === undefined)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
         </div>
      );

   if (orgWithData === null)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Organization not found or access denied</div>
         </div>
      );

   // If the team doesn't exist, show not found message
   if (!team)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Team not found</div>
         </div>
      );

   const handleColorChange = async (newColor: string) => {
      team.color = newColor;
   };

   const handleIconChange = async (newIcon: string) => {
      team.icon = newIcon;
   };

   const handleSaveChanges = async () => {
      // Validate inputs
      if (isEditingName && !editedName.trim()) {
         toast.error('Team name cannot be empty');
         return;
      }

      if (isEditingSlug) {
         if (!editedSlug.trim()) {
            toast.error('Team identifier cannot be empty');
            return;
         }

         const slugRegex = /^[a-z0-9-]+$/;
         if (!slugRegex.test(editedSlug)) {
            toast.error('Identifier must contain only lowercase letters, numbers, and hyphens');
            return;
         }
      }

      setIsSaving(true);
      try {
         if (isEditingName) team.name = editedName;
         if (isEditingSlug) {
            team.slug = editedSlug;
         }

         toast.success('Team updated successfully');
         setIsEditingName(false);
         setIsEditingSlug(false);
      } catch (error) {
         toast.error('Failed to update team');
         console.error(error);
      } finally {
         setIsSaving(false);
      }
   };

   const cancelEditing = () => {
      setEditedName(team.name);
      setEditedSlug(team.slug);
      setIsEditingName(false);
      setIsEditingSlug(false);
   };

   const isEditing = isEditingName || isEditingSlug;

   const handleDeleteTeam = () => {
      team.deleted = true;
      toast.success('Team deleted successfully');
   };

   return (
      <div className="max-w-[900px] mx-auto py-10 px-6">
         <header className="mb-10">
            <h1 className="text-2xl font-bold">{team.name}</h1>
         </header>

         <div className="border rounded-md mb-8">
            <div className="flex items-center justify-between border-b p-4">
               <div className="flex-1">
                  <h2 className="text-sm font-medium">Icon & Name</h2>
               </div>
               <div className="flex-1">
                  <h2 className="text-sm font-medium">Identifier</h2>
               </div>
               {isEditing && <div className="w-24"></div>}
            </div>
            <div className="flex items-center justify-between p-4">
               <div className="flex-1 flex items-center">
                  <TeamColorPicker
                     initialColor={team.color || '#e91e63'}
                     initialIcon={team.icon || '👥'}
                     teamId={team.id}
                     teamName={team.name}
                     onColorChange={handleColorChange}
                     onIconChange={handleIconChange}
                  />
                  {isEditingName ? (
                     <Input
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="text-sm ml-2 h-7 py-1 w-40"
                     />
                  ) : (
                     <span
                        className="text-sm ml-2 cursor-pointer hover:underline"
                        onClick={() => setIsEditingName(true)}
                        title="Click to edit team name"
                     >
                        {team.name}
                     </span>
                  )}
               </div>
               <div className="flex-1">
                  {isEditingSlug ? (
                     <Input
                        value={editedSlug}
                        onChange={(e) => setEditedSlug(e.target.value.toLowerCase())}
                        className="text-sm h-7 py-1 w-32"
                        autoFocus={!isEditingName}
                        placeholder="team-identifier"
                     />
                  ) : (
                     <span
                        className="text-sm text-muted-foreground cursor-pointer hover:underline"
                        onClick={() => setIsEditingSlug(true)}
                        title="Click to edit team identifier"
                     >
                        {team.slug}
                     </span>
                  )}
               </div>
               {isEditing && (
                  <div className="w-24 flex justify-end gap-1">
                     <Button
                        size="sm"
                        variant="outline"
                        onClick={handleSaveChanges}
                        disabled={isSaving}
                        className="h-7 text-xs"
                     >
                        {isSaving ? 'Saving...' : 'Save'}
                     </Button>
                     <Button
                        size="sm"
                        variant="ghost"
                        onClick={cancelEditing}
                        className="h-7 text-xs"
                     >
                        Cancel
                     </Button>
                  </div>
               )}
            </div>
         </div>

         <section className="mt-12">
            <h2 className="text-lg font-semibold text-destructive mb-4">Danger zone</h2>

            <div className="space-y-4">
               <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center">
                     <div className="text-sm font-medium">Delete team</div>
                     <Button variant="destructive" size="sm" onClick={handleDeleteTeam}>
                        Delete team...
                     </Button>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}



================================================
FILE: components/common/teams/teams-list-container.tsx
================================================
'use client';

import { useCoState } from 'jazz-react';
import { Organization, TeamList } from '@/lib/jazz-schema';
import Teams from '@/components/common/teams/teams';
import { useMemo } from 'react';
import { Group } from 'jazz-tools';
import { getThreeLettersFromString } from '@/lib/utils';

interface TeamsListContainerProps {
   organization: Organization;
   searchQuery: string;
   currentUserId?: string;
}

export default function TeamsListContainer({
   organization,
   searchQuery,
   currentUserId,
}: TeamsListContainerProps) {
   // Deeply load the organization with teams using useCoState
   const orgWithData = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: true, // Deeply load all teams
         },
      },
   });

   // Filter teams based on viewMode and searchQuery
   const filteredTeams = useMemo(() => {
      if (orgWithData === undefined || orgWithData === null || !orgWithData.teams) {
         return undefined;
      }

      return orgWithData.teams.filter((team) => {
         if (!team) return false;

         const members = team._owner.castAs(Group).members;
         const isUserMember = members?.some((member) => member.id === currentUserId) || false;

         // Search filter - case insensitive search on name, slug, and identifier
         const teamName = team.name?.toLowerCase() || '';
         const teamSlug = team.slug?.toLowerCase() || '';
         const teamIdentifier = getThreeLettersFromString(teamSlug).toLowerCase();
         const searchLower = searchQuery.toLowerCase();

         const matchesSearch =
            !searchQuery ||
            teamName.includes(searchLower) ||
            teamSlug.includes(searchLower) ||
            teamIdentifier.includes(searchLower);

         // Both filters must pass
         return matchesSearch && isUserMember;
      }) as TeamList;
   }, [orgWithData, searchQuery, currentUserId]);

   // Handle loading states
   if (orgWithData === undefined)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
         </div>
      );

   if (orgWithData === null)
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">Organization not found or access denied</div>
         </div>
      );

   // Show an empty state if no teams are found
   if (!filteredTeams || filteredTeams.length === 0) {
      return (
         <div className="flex items-center justify-center h-screen">
            <div className="text-white/50">No teams found</div>
         </div>
      );
   }

   // Render the Teams component with the deeply loaded and filtered teams
   return <Teams teams={filteredTeams} />;
}



================================================
FILE: components/common/teams/teams.tsx
================================================
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from '@/components/ui/table';
import { UsersIcon, MoreVertical, Settings, LogOut, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CreateTeamModal } from './create-team-modal';
import { TeamList } from '@/lib/jazz-schema';
import { Group } from 'jazz-tools';
import { getThreeLettersFromString, getTwoLettersFromString } from '@/lib/utils';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useInviteMemberStore } from '@/store/invite-member-store';

export default function Teams({ teams }: { teams: TeamList | undefined }) {
   const params = useParams();
   const orgId = params.orgId as string;

   const { openModal } = useInviteMemberStore();

   // Handle empty state
   if (!teams || teams.length === 0) {
      return (
         <div className="flex flex-col items-center justify-center h-full w-full p-8">
            <div className="flex flex-col items-center justify-center max-w-md text-center">
               <div className="bg-secondary/30 p-4 rounded-full mb-4">
                  <UsersIcon className="h-8 w-8 text-muted-foreground" />
               </div>
               <h2 className="text-xl font-semibold mb-2">No teams</h2>
               <p className="text-muted-foreground mb-6">
                  Teams help you organize your work and collaborate with others. Create a team to
                  get started.
               </p>
               <CreateTeamModal />
            </div>
         </div>
      );
   }

   return (
      <div className="w-full h-full p-4">
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[40%]">Name</TableHead>
                  <TableHead className="w-[15%]">Membership</TableHead>
                  <TableHead className="w-[15%]">Identifier</TableHead>
                  <TableHead className="w-[20%]">Members</TableHead>
                  <TableHead className="w-[10%] text-right">Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {teams.map((team) => {
                  const members = team?._owner.castAs(Group).members;

                  return (
                     <TableRow
                        key={team?.id || team?.slug}
                        className="cursor-pointer hover:bg-muted/50"
                     >
                        <TableCell className="py-3">
                           <Link
                              href={`/${orgId}/team/${team?.slug}/issues`}
                              className="flex items-center gap-2"
                           >
                              <span
                                 className="flex items-center justify-center size-6 rounded-md"
                                 style={{
                                    backgroundColor: team?.color
                                       ? `${team.color}`
                                       : 'var(--primary-10)',
                                 }}
                              >
                                 {team?.icon}
                              </span>
                              <span className="font-medium">{team?.name}</span>
                           </Link>
                        </TableCell>
                        <TableCell>
                           <div className="flex items-center gap-1.5">
                              <span className="text-muted-foreground">
                                 {/* {team?.joined ? 'Joined' : 'Not joined'} */}
                                 Joined
                              </span>
                           </div>
                        </TableCell>
                        <TableCell>
                           <div className="flex items-center gap-1.5 text-muted-foreground">
                              {getThreeLettersFromString(team?.slug || '')}
                           </div>
                        </TableCell>
                        <TableCell>
                           {/* Display member avatars (first one only for now) */}
                           <div className="flex -space-x-2">
                              {members?.map((member) => (
                                 <Avatar
                                    className="size-6 border-2 border-background"
                                    key={member.id}
                                 >
                                    <AvatarImage src={member.account.profile?.avatarUrl} />
                                    <AvatarFallback>
                                       {getTwoLettersFromString(member.account.profile?.name || '')}
                                    </AvatarFallback>
                                 </Avatar>
                              ))}
                           </div>
                        </TableCell>
                        <TableCell className="text-right">
                           <div className="flex items-center justify-end">
                              <DropdownMenu>
                                 <DropdownMenuTrigger asChild>
                                    <button className="p-1 rounded-sm hover:bg-muted flex items-center justify-center">
                                       <MoreVertical className="h-4 w-4 text-muted-foreground" />
                                    </button>
                                 </DropdownMenuTrigger>
                                 <DropdownMenuContent align="end">
                                    <DropdownMenuItem asChild>
                                       <Link href={`/${orgId}/settings/teams/${team?.slug}`}>
                                          <Settings className="mr-2 h-4 w-4" />
                                          <span>Team Settings</span>
                                       </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => openModal('team', team?.id)}>
                                       <UserPlus className="mr-2 h-4 w-4" />
                                       <span>Invite Members</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem variant="destructive">
                                       <LogOut className="mr-2 h-4 w-4" />
                                       <span>Leave Team</span>
                                    </DropdownMenuItem>
                                 </DropdownMenuContent>
                              </DropdownMenu>
                           </div>
                        </TableCell>
                     </TableRow>
                  );
               })}
            </TableBody>
         </Table>
      </div>
   );
}



================================================
FILE: components/layout/main-layout.tsx
================================================
import { AppSidebar } from '@/components/layout/sidebar/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CreateIssueModalProvider } from '@/components/common/issues/create-issue-modal-provider';
import { InviteMemberModalProvider } from '@/components/common/members/invite-member-modal-provider';

interface MainLayoutProps {
   children: React.ReactNode;
   header: React.ReactNode;
}

export default function MainLayout({ children, header }: MainLayoutProps) {
   return (
      <SidebarProvider>
         <CreateIssueModalProvider />
         <InviteMemberModalProvider />
         <AppSidebar />
         <div className="h-svh overflow-hidden lg:p-2 w-full">
            <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-center justify-start bg-container h-full w-full">
               {header}
               <div className="overflow-auto h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)] w-full">
                  {children}
               </div>
            </div>
         </div>
      </SidebarProvider>
   );
}



================================================
FILE: components/layout/settings-layout.tsx
================================================
'use client';

import { SettingsSidebar } from '@/components/layout/sidebar/settings-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CreateIssueModalProvider } from '@/components/common/issues/create-issue-modal-provider';

interface SettingsLayoutProps {
   children: React.ReactNode;
   header?: React.ReactNode;
}

export default function SettingsLayout({ children, header }: SettingsLayoutProps) {
   return (
      <SidebarProvider>
         <CreateIssueModalProvider />
         <SettingsSidebar />
         <div className="h-svh overflow-hidden lg:p-2 w-full">
            <div className="lg:border lg:rounded-md overflow-hidden flex flex-col items-start justify-start bg-container h-full w-full">
               {header && header}
               <div className="overflow-auto h-[calc(100svh-80px)] lg:h-[calc(100svh-96px)] w-full">
                  {children}
               </div>
            </div>
         </div>
      </SidebarProvider>
   );
}



================================================
FILE: components/layout/theme-provider.tsx
================================================
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}



================================================
FILE: components/layout/theme-toggle.tsx
================================================
'use client';

import * as React from 'react';
import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
   const { theme, setTheme } = useTheme();

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
               {theme === 'light' ? (
                  <Sun className="h-4 w-4" />
               ) : theme === 'dark' ? (
                  <Moon className="h-4 w-4" />
               ) : (
                  <Laptop className="h-4 w-4" />
               )}
               <span className="sr-only">Toggle theme</span>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
               <Sun className="mr-2 h-4 w-4" />
               <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
               <Moon className="mr-2 h-4 w-4" />
               <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
               <Laptop className="mr-2 h-4 w-4" />
               <span>System</span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}



================================================
FILE: components/layout/headers/issues/filter.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';
import { useSearchStore } from '@/store/search-store';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { StatusSelector } from '@/components/layout/sidebar/create-new-issue/status-selector';
import { PrioritySelector } from '@/components/layout/sidebar/create-new-issue/priority-selector';
import { AssigneeSelector } from '@/components/layout/sidebar/create-new-issue/assignee-selector';
import { LabelSelector } from '@/components/layout/sidebar/create-new-issue/label-selector';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { Label, LabelList, UserProfile } from '@/lib/jazz-schema';

interface FilterProps {
   users?: UserProfile[];
   labels?: LabelList;
   onOpenChange?: (open: boolean) => void;
}

export function Filter({ users = [], labels, onOpenChange }: FilterProps) {
   const {
      isFilterOpen,
      filters,
      setStatusFilter,
      setPriorityFilter,
      setAssigneeFilter,
      setLabelsFilter,
      resetFilters,
   } = useSearchStore();

   const [activeFilterCount, setActiveFilterCount] = useState(0);

   // Calculate active filter count whenever filters change
   useEffect(() => {
      let count = 0;
      if (filters.status) count++;
      if (filters.priority) count++;
      if (filters.assignee) count++;
      if (filters.labels && filters.labels.length > 0) count++;
      setActiveFilterCount(count);
   }, [filters]);

   return (
      <div className="flex items-center">
         <Popover open={isFilterOpen} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
               <Button
                  size="xs"
                  variant={activeFilterCount > 0 ? 'default' : 'ghost'}
                  className="flex gap-1"
               >
                  <ListFilter className="size-4" />
                  Filter
                  {activeFilterCount > 0 && (
                     <Badge variant="secondary" className="ml-1 h-5 px-1.5">
                        {activeFilterCount}
                     </Badge>
                  )}
               </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72" align="start" sideOffset={8}>
               <div className="space-y-4 py-2">
                  <div className="flex justify-between items-center">
                     <h3 className="font-medium">Filters</h3>
                     {activeFilterCount > 0 && (
                        <Button
                           variant="ghost"
                           size="xs"
                           onClick={resetFilters}
                           className="text-xs h-7"
                        >
                           <X className="size-3 mr-1" />
                           Clear all
                        </Button>
                     )}
                  </div>

                  <div className="filter-selectors">
                     <h4 className="text-xs font-medium text-muted-foreground mb-1">Status</h4>
                     <StatusSelector
                        status={filters.status || 'backlog'}
                        onChange={setStatusFilter}
                     />
                  </div>

                  <div className="filter-selectors">
                     <h4 className="text-xs font-medium text-muted-foreground mb-1">Priority</h4>
                     <PrioritySelector
                        priority={filters.priority || 'no-priority'}
                        onChange={setPriorityFilter}
                     />
                  </div>

                  <div className="filter-selectors">
                     <h4 className="text-xs font-medium text-muted-foreground mb-1">Assignee</h4>
                     <AssigneeSelector
                        assignee={filters.assignee}
                        users={users}
                        onChange={setAssigneeFilter}
                     />
                  </div>

                  <div className="filter-selectors">
                     <h4 className="text-xs font-medium text-muted-foreground mb-1">Labels</h4>
                     {labels && (
                        <LabelSelector
                           availableLabels={labels}
                           selectedLabels={
                              filters.labels ? LabelList.create(filters.labels as Label[]) : null
                           }
                           onChange={(newLabels) => {
                              if (newLabels) {
                                 const labelArray = [...newLabels].filter(Boolean) as Label[];
                                 setLabelsFilter(labelArray);
                              } else {
                                 setLabelsFilter(undefined);
                              }
                           }}
                        />
                     )}
                  </div>
               </div>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/layout/headers/issues/header-nav.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useSearchStore } from '@/store/search-store';
import { SearchIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function HeaderNav() {
   const { isSearchOpen, toggleSearch, closeSearch, setSearchQuery, searchQuery } =
      useSearchStore();
   const searchInputRef = useRef<HTMLInputElement>(null);
   const searchContainerRef = useRef<HTMLDivElement>(null);
   const previousValueRef = useRef<string>('');

   useEffect(() => {
      if (isSearchOpen && searchInputRef.current) {
         searchInputRef.current.focus();
      }
   }, [isSearchOpen]);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target as Node) &&
            isSearchOpen
         ) {
            closeSearch();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [isSearchOpen, closeSearch]);

   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Issues</span>
            </div>
         </div>

         <div className="flex items-center gap-2">
            {isSearchOpen ? (
               <div
                  ref={searchContainerRef}
                  className="relative flex items-center justify-center w-64 transition-all duration-200 ease-in-out"
               >
                  <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                     type="search"
                     ref={searchInputRef}
                     value={searchQuery}
                     onChange={(e) => {
                        // Store the previous value before updating
                        previousValueRef.current = searchQuery;

                        // Update the value
                        const newValue = e.target.value;
                        setSearchQuery(newValue);

                        // If the value goes from non-empty to empty, it's probably a click on the cross
                        if (previousValueRef.current && newValue === '') {
                           closeSearch();
                        }
                     }}
                     placeholder="Search issues..."
                     className="pl-8 h-7 text-sm"
                     onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                           closeSearch();
                        }
                     }}
                  />
               </div>
            ) : (
               <>
                  <Button
                     variant="ghost"
                     size="icon"
                     onClick={toggleSearch}
                     className="h-8 w-8"
                     aria-label="Search"
                  >
                     <SearchIcon className="h-4 w-4" />
                  </Button>
               </>
            )}
         </div>
      </div>
   );
}



================================================
FILE: components/layout/headers/issues/header-options.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useViewStore, ViewType } from '@/store/view-store';
import { LayoutGrid, LayoutList, SlidersHorizontal } from 'lucide-react';
import { Filter } from './filter';
import { Organization, UserProfile } from '@/lib/jazz-schema';
import { useCoState } from 'jazz-react';
import { useMemo } from 'react';
import { useSearchStore } from '@/store/search-store';

export default function HeaderOptions({
   organization,
}: {
   organization: Organization | undefined;
}) {
   const { viewType, setViewType } = useViewStore();
   const { openFilter, closeFilter } = useSearchStore();

   const handleViewChange = (type: ViewType) => {
      setViewType(type);
   };

   // Load organization with teams and their issues to get all assignees
   const orgWithTeams = useCoState(Organization, organization?.id, {
      resolve: {
         teams: {
            $each: {
               issues: {
                  $each: {
                     assignee: true,
                  },
               },
            },
         },
      },
   });

   // Get users and labels from organization for filter selectors
   const issueOwnerUsers = useMemo(() => {
      if (!orgWithTeams || !orgWithTeams.teams) return [];

      // Collect all unique assignee profiles from all issues
      const profiles: UserProfile[] = [];
      const profileIds = new Set<string>();

      orgWithTeams.teams.forEach((team) => {
         if (team?.issues) {
            team.issues.forEach((issue) => {
               if (issue?.assignee && !profileIds.has(issue.assignee.id)) {
                  profileIds.add(issue.assignee.id);
                  profiles.push(issue.assignee);
               }
            });
         }
      });

      return profiles;
   }, [orgWithTeams]);

   const handleFilterOpenChange = (open: boolean) => {
      // Directly control the filter state based on the requested state
      if (open) {
         openFilter();
      } else {
         closeFilter();
      }
   };

   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <Filter
            users={issueOwnerUsers}
            labels={organization?.labels || undefined}
            onOpenChange={handleFilterOpenChange}
         />
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button className="relative" size="xs" variant="secondary">
                  <SlidersHorizontal className="size-4 mr-1" />
                  Display
                  {viewType === 'grid' && (
                     <span className="absolute right-0 top-0 w-2 h-2 bg-orange-500 rounded-full" />
                  )}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72 flex p-3 gap-2" align="end">
               <DropdownMenuItem
                  onClick={() => handleViewChange('list')}
                  className={cn(
                     'w-full text-xs border border-accent flex flex-col gap-1',
                     viewType === 'list' ? 'bg-accent' : ''
                  )}
               >
                  <LayoutList className="size-4" />
                  List
               </DropdownMenuItem>
               <DropdownMenuItem
                  onClick={() => handleViewChange('grid')}
                  className={cn(
                     'w-full text-xs border border-accent flex flex-col gap-1',
                     viewType === 'grid' ? 'bg-accent' : ''
                  )}
               >
                  <LayoutGrid className="size-4" />
                  Board
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   );
}



================================================
FILE: components/layout/headers/issues/header.tsx
================================================
import HeaderNav from './header-nav';
import HeaderOptions from './header-options';
import { Organization } from '@/lib/jazz-schema';

export function IssuesHeader({ organization }: { organization: Organization | undefined }) {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav />
         <HeaderOptions organization={organization} />
      </div>
   );
}



================================================
FILE: components/layout/headers/members/header-nav.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useInviteMemberStore } from '@/store/invite-member-store';
import { Group } from 'jazz-tools';
import { Plus } from 'lucide-react';

export default function HeaderNav({ members }: { members: Group['members'] | undefined }) {
   const { openModal } = useInviteMemberStore();
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Members</span>
               <span className="text-xs bg-accent rounded-md px-1.5 py-1">{members?.length}</span>
            </div>
         </div>
         <div className="flex items-center gap-2">
            <Button
               className="relative"
               size="xs"
               variant="secondary"
               onClick={() => openModal('organization')}
            >
               <Plus className="size-4" />
               Invite
            </Button>
         </div>
      </div>
   );
}



================================================
FILE: components/layout/headers/members/header-options.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';

export default function HeaderOptions() {
   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <Button size="xs" variant="ghost">
            <ListFilter className="size-4 mr-1" />
            Filter
         </Button>
      </div>
   );
}



================================================
FILE: components/layout/headers/members/header.tsx
================================================
import HeaderNav from './header-nav';
import { Group } from 'jazz-tools';

export default function Header({ members }: { members: Group['members'] | undefined }) {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav members={members} />
         {/* <HeaderOptions /> */}
      </div>
   );
}



================================================
FILE: components/layout/headers/teams/header-nav.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useSearchStore } from '@/store/search-store';
import { Plus, SearchIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { CreateTeamModal } from '@/components/common/teams/create-team-modal';

interface HeaderNavProps {
   onSearch: (query: string) => void;
}

export default function HeaderNav({ onSearch }: HeaderNavProps) {
   const { isSearchOpen, toggleSearch, closeSearch, setSearchQuery, searchQuery } =
      useSearchStore();
   const searchInputRef = useRef<HTMLInputElement>(null);
   const searchContainerRef = useRef<HTMLDivElement>(null);
   const previousValueRef = useRef<string>('');

   useEffect(() => {
      // Focus the search input when search is opened
      if (isSearchOpen && searchInputRef.current) {
         searchInputRef.current.focus();
      }
   }, [isSearchOpen]);

   useEffect(() => {
      // Handle clicking outside of the search container
      const handleClickOutside = (event: MouseEvent) => {
         if (
            searchContainerRef.current &&
            !searchContainerRef.current.contains(event.target as Node) &&
            isSearchOpen
         ) {
            closeSearch();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [closeSearch, isSearchOpen]);

   // Update parent component when search query changes
   useEffect(() => {
      onSearch(searchQuery);
   }, [searchQuery, onSearch]);

   return (
      <div className="w-full flex justify-between items-center border-b py-1.5 px-6 h-10">
         <div className="flex items-center gap-2">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-1">
               <span className="text-sm font-medium">Teams</span>
            </div>
         </div>

         <div className="flex items-center gap-2">
            {isSearchOpen ? (
               <div
                  ref={searchContainerRef}
                  className="relative flex items-center justify-center w-64 transition-all duration-200 ease-in-out"
               >
                  <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                     type="search"
                     ref={searchInputRef}
                     value={searchQuery}
                     onChange={(e) => {
                        previousValueRef.current = searchQuery;
                        const newValue = e.target.value;
                        setSearchQuery(newValue);
                        if (previousValueRef.current && newValue === '') {
                           closeSearch();
                        }
                     }}
                     placeholder="Search teams..."
                     className="pl-8 h-7 text-sm"
                     onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                           closeSearch();
                        }
                     }}
                  />
               </div>
            ) : (
               <>
                  <Button
                     variant="ghost"
                     size="icon"
                     onClick={toggleSearch}
                     className="h-8 w-8"
                     aria-label="Search"
                  >
                     <SearchIcon className="h-4 w-4" />
                  </Button>
                  <CreateTeamModal
                     trigger={
                        <Button className="relative" size="xs" variant="secondary">
                           <Plus className="size-4" />
                           Create
                        </Button>
                     }
                  />
               </>
            )}
         </div>
      </div>
   );
}



================================================
FILE: components/layout/headers/teams/header-options.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import { SlidersHorizontal } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export type ViewMode = 'all' | 'joined' | 'not-joined';

interface HeaderOptionsProps {
   viewMode: ViewMode;
   setViewMode: (mode: ViewMode) => void;
}

export default function HeaderOptions({ viewMode, setViewMode }: HeaderOptionsProps) {
   return (
      <div className="w-full flex justify-end items-center border-b py-1.5 px-6 h-10">
         {/* <Button size="xs" variant="ghost">
            <ListFilter className="size-4 mr-1" />
            Filter
         </Button> */}
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <Button className="relative" size="xs" variant="secondary">
                  <SlidersHorizontal className="size-4 mr-1" />
                  Display
                  {viewMode !== 'all' && (
                     <span className="absolute right-0 top-0 w-2 h-2 bg-orange-500 rounded-full" />
                  )}
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 p-1" align="end">
               <DropdownMenuItem
                  onClick={() => setViewMode('all')}
                  className={cn('w-full text-xs', viewMode === 'all' ? 'bg-accent' : '')}
               >
                  All Teams
               </DropdownMenuItem>
               <DropdownMenuItem
                  onClick={() => setViewMode('joined')}
                  className={cn('w-full text-xs', viewMode === 'joined' ? 'bg-accent' : '')}
               >
                  Joined Teams
               </DropdownMenuItem>
               <DropdownMenuItem
                  onClick={() => setViewMode('not-joined')}
                  className={cn('w-full text-xs', viewMode === 'not-joined' ? 'bg-accent' : '')}
               >
                  Not Joined Teams
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   );
}



================================================
FILE: components/layout/headers/teams/header.tsx
================================================
import HeaderNav from './header-nav';

interface TeamsHeaderProps {
   // viewMode: ViewMode;
   // setViewMode: (mode: ViewMode) => void;
   onSearch: (query: string) => void;
}

export function TeamsHeader({ onSearch }: TeamsHeaderProps) {
   return (
      <div className="w-full flex flex-col items-center">
         <HeaderNav onSearch={onSearch} />
         {/* <HeaderOptions viewMode={viewMode} setViewMode={setViewMode} /> */}
      </div>
   );
}



================================================
FILE: components/layout/sidebar/app-sidebar.tsx
================================================
'use client';

import * as React from 'react';

import { HelpButton } from '@/components/layout/sidebar/help-button';
import { NavInbox } from '@/components/layout/sidebar/nav-inbox';
import { NavTeams } from '@/components/layout/sidebar/nav-teams';
import { NavWorkspace } from '@/components/layout/sidebar/nav-workspace';
import { OrgSwitcher } from '@/components/layout/sidebar/org-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const params = useParams();
   const orgId = params.orgId as string;

   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: {
                  teams: true,
               },
            },
         },
      },
   });

   const organizations = me?.root?.organizations;

   const organization = organizations && organizations.find((org) => org?.slug === orgId);

   const teams = organization?.teams;

   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader>
            <OrgSwitcher
               orgs={organizations}
               currentOrg={organization}
               currentUser={me?.profile?.name || ''}
            />
         </SidebarHeader>
         <SidebarContent>
            <NavInbox orgId={orgId} />
            <NavWorkspace orgId={orgId} />
            <NavTeams orgId={orgId} teams={teams} />
         </SidebarContent>
         <SidebarFooter>
            <div className="w-full flex flex-col gap-2">
               <div className="w-full flex items-center justify-between">
                  <HelpButton />
               </div>
            </div>
         </SidebarFooter>
      </Sidebar>
   );
}



================================================
FILE: components/layout/sidebar/help-button.tsx
================================================
'use client';

import * as React from 'react';
import { ExternalLink, HelpCircle } from 'lucide-react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RiGithubFill, RiThreadsFill, RiTwitterXFill } from '@remixicon/react';

export function HelpButton() {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
               <HelpCircle className="size-4" />
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end" className="w-60">
            <DropdownMenuLabel>Join Us</DropdownMenuLabel>
            <DropdownMenuItem asChild>
               <Link href="https://x.com/jazz_tools" target="_blank">
                  <RiTwitterXFill className="mr-2 h-4 w-4" />
                  <span>X</span>
                  <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="https://discord.gg/6bFccYDf" target="_blank">
                  <RiThreadsFill className="mr-2 h-4 w-4" />
                  <span>Discord</span>
                  <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
               </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="https://github.com/garden-co/slim-issue-tracker" target="_blank">
                  <RiGithubFill className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
               </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
         </DropdownMenuContent>
      </DropdownMenu>
   );
}



================================================
FILE: components/layout/sidebar/nav-inbox.tsx
================================================
'use client';

import { FolderKanban } from 'lucide-react';

import {
   SidebarGroup,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const getInboxItems = (orgId: string) => [
   {
      name: 'My issues',
      url: `/${orgId}/my-issues`,
      icon: FolderKanban,
   },
];

export function NavInbox({ orgId }: { orgId: string }) {
   return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
         <SidebarMenu>
            {getInboxItems(orgId).map((item) => (
               <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                     <Link href={item.url}>
                        <item.icon />
                        <span>{item.name}</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}



================================================
FILE: components/layout/sidebar/nav-teams.tsx
================================================
'use client';

import { ChevronRight, CopyMinus, MoreHorizontal, Settings, UserPlus } from 'lucide-react';
import Link from 'next/link';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuAction,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { TeamList } from '@/lib/jazz-schema';
import { useInviteMemberStore } from '@/store/invite-member-store';

export function NavTeams({ orgId, teams }: { orgId: string; teams: TeamList | undefined }) {
   const { openModal } = useInviteMemberStore();
   return (
      <SidebarGroup>
         <SidebarGroupLabel>Your teams</SidebarGroupLabel>
         <SidebarMenu>
            {teams
               ?.filter((item) => !item?.deleted)
               .map((item, index) => (
                  <Collapsible
                     key={item?.slug ?? index}
                     asChild
                     defaultOpen={index === 0}
                     className="group/collapsible"
                  >
                     <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                           <SidebarMenuButton tooltip={item?.name}>
                              <div className="inline-flex size-6 bg-muted/50 items-center justify-center rounded shrink-0">
                                 <span
                                    className="flex items-center justify-center size-6 rounded-md"
                                    style={{
                                       backgroundColor: item?.color
                                          ? `${item.color}`
                                          : 'var(--primary-10)',
                                    }}
                                 >
                                    {item?.icon}
                                 </span>
                              </div>
                              <span className="text-sm">{item?.name}</span>
                              <span className="w-3 shrink-0">
                                 <ChevronRight className="w-full transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                              </span>
                              <DropdownMenu>
                                 <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction showOnHover>
                                       <MoreHorizontal />
                                       <span className="sr-only">More</span>
                                    </SidebarMenuAction>
                                 </DropdownMenuTrigger>
                                 <DropdownMenuContent
                                    className="w-48 rounded-lg"
                                    side="right"
                                    align="start"
                                 >
                                    <DropdownMenuItem asChild>
                                       <Link href={`/${orgId}/settings/teams/${item?.slug}`}>
                                          <Settings className="size-4" />
                                          <span>Team settings</span>
                                       </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => openModal('team', item?.id)}>
                                       <UserPlus className="mr-2 h-4 w-4" />
                                       <span>Invite Members</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                       <span>Leave team...</span>
                                    </DropdownMenuItem>
                                 </DropdownMenuContent>
                              </DropdownMenu>
                           </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                           <SidebarMenuSub>
                              <SidebarMenuSubItem>
                                 <SidebarMenuSubButton asChild>
                                    <Link href={`/${orgId}/team/${item?.slug}/issues`}>
                                       <CopyMinus size={14} />
                                       <span>Issues</span>
                                    </Link>
                                 </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                           </SidebarMenuSub>
                        </CollapsibleContent>
                     </SidebarMenuItem>
                  </Collapsible>
               ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}



================================================
FILE: components/layout/sidebar/nav-workspace.tsx
================================================
'use client';

import { ContactRound, UserRound } from 'lucide-react';

import {
   SidebarGroup,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const getWorkspaceItems = (orgId: string) => [
   {
      name: 'Teams',
      url: `/${orgId}/teams`,
      icon: ContactRound,
   },
   {
      name: 'Members',
      url: `/${orgId}/members`,
      icon: UserRound,
   },
];

export function NavWorkspace({ orgId }: { orgId: string }) {
   return (
      <SidebarGroup className="group-data-[collapsible=icon]:hidden">
         <SidebarGroupLabel>Workspace</SidebarGroupLabel>
         <SidebarMenu>
            {getWorkspaceItems(orgId).map((item) => (
               <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                     <Link href={item.url}>
                        <item.icon />
                        <span>{item.name}</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            ))}
         </SidebarMenu>
      </SidebarGroup>
   );
}



================================================
FILE: components/layout/sidebar/org-switcher.tsx
================================================
'use client';

import * as React from 'react';
import { ChevronsUpDown, Check } from 'lucide-react';

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuPortal,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { CreateNewIssue } from './create-new-issue';
import { ThemeToggle } from '../theme-toggle';
import { Organization, OrganizationList } from '@/lib/jazz-schema';
import Link from 'next/link';
import { getTwoLettersFromString } from '@/lib/utils';
import { useInviteMemberStore } from '@/store/invite-member-store';

export function OrgSwitcher({
   orgs,
   currentOrg,
   currentUser,
}: {
   orgs: OrganizationList | undefined;
   currentOrg: Organization | undefined;
   currentUser: string;
}) {
   const { openModal } = useInviteMemberStore();

   return (
      <SidebarMenu>
         <SidebarMenuItem>
            <DropdownMenu>
               <div className="w-full flex gap-1 items-center pt-2">
                  <DropdownMenuTrigger asChild>
                     <SidebarMenuButton
                        size="lg"
                        className="h-8 p-1 data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                     >
                        <div className="flex aspect-square size-6 items-center justify-center rounded bg-orange-500 text-sidebar-primary-foreground">
                           {getTwoLettersFromString(currentOrg?.name ?? '')}
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                           <span className="truncate font-semibold">{currentOrg?.name}</span>
                        </div>
                        <ChevronsUpDown className="ml-auto" />
                     </SidebarMenuButton>
                  </DropdownMenuTrigger>

                  <ThemeToggle />

                  <CreateNewIssue />
               </div>
               <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-60 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
               >
                  <DropdownMenuGroup>
                     <DropdownMenuItem onSelect={() => openModal('organization')}>
                        Invite and manage members
                     </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                     <DropdownMenuSubTrigger>Switch Workspace</DropdownMenuSubTrigger>
                     <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                           <DropdownMenuLabel>{currentUser}</DropdownMenuLabel>
                           <DropdownMenuSeparator />
                           {orgs?.map((org) => (
                              <DropdownMenuItem key={org?.id} asChild>
                                 <Link
                                    href={`/${org?.slug}`}
                                    className="flex w-full items-center justify-between"
                                 >
                                    <div className="flex items-center gap-2">
                                       <div className="flex aspect-square size-6 items-center justify-center rounded bg-orange-500 text-sidebar-primary-foreground">
                                          {getTwoLettersFromString(org?.name ?? '')}
                                       </div>
                                       <span className="truncate font-semibold">{org?.name}</span>
                                    </div>
                                    {currentOrg?.id === org?.id && (
                                       <Check className="ml-2 h-4 w-4" />
                                    )}
                                 </Link>
                              </DropdownMenuItem>
                           ))}
                           <DropdownMenuSeparator />
                           <DropdownMenuItem>
                              <Link href="/new-org">Create new workspace</Link>
                           </DropdownMenuItem>
                        </DropdownMenuSubContent>
                     </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                     Log out
                     <DropdownMenuShortcut>⌥⇧Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </SidebarMenuItem>
      </SidebarMenu>
   );
}



================================================
FILE: components/layout/sidebar/settings-sidebar.tsx
================================================
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useAccount } from 'jazz-react';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sidebar, SidebarContent, SidebarHeader } from '@/components/ui/sidebar';
import { Users } from 'lucide-react';

export function SettingsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   const params = useParams();
   const pathname = usePathname();
   const orgId = params.orgId as string;

   const { me } = useAccount({
      resolve: {
         root: {
            organizations: {
               $each: {
                  teams: true,
               },
            },
         },
      },
   });

   const organizations = me?.root?.organizations;
   const organization = organizations && organizations.find((org) => org?.slug === orgId);
   const teams = organization?.teams;

   const isSettingsTeamsPage = pathname.includes('/settings/teams');

   const administrationItems = [
      { label: 'Teams', icon: <Users className="h-4 w-4" />, href: `/${orgId}/settings/teams` },
   ];

   // Your teams section based on screenshot
   const teamItems =
      teams
         ?.map((team) => {
            if (!team) return null;
            return {
               label: team.name,
               icon: (
                  <span className="flex items-center justify-center size-4 bg-primary/10 text-primary rounded-sm">
                     {team.icon}
                  </span>
               ),
               color: team.color,
               deleted: team.deleted,
               href: `/${orgId}/settings/teams/${team.slug}`,
            };
         })
         .filter(Boolean) || [];

   return (
      <Sidebar collapsible="offcanvas" {...props}>
         <SidebarHeader className="border-b p-3">
            <Link
               href={`/${orgId}`}
               className="flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
               <ChevronLeft className="mr-1 h-4 w-4" />
               Back to app
            </Link>
         </SidebarHeader>

         <SidebarContent className="p-2">
            {/* Administration Section */}
            <div className="mb-4">
               <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                  Administration
               </h3>
               <div className="space-y-1">
                  {administrationItems.map((item) => (
                     <Button
                        key={item.label}
                        variant={
                           pathname === item.href ||
                           (item.href.includes('/settings/teams') && isSettingsTeamsPage)
                              ? 'secondary'
                              : 'ghost'
                        }
                        size="sm"
                        className="w-full justify-start"
                        asChild
                     >
                        <Link href={item.href}>
                           {item.icon}
                           <span className="ml-2">{item.label}</span>
                        </Link>
                     </Button>
                  ))}
               </div>
            </div>

            {/* Your Teams Section */}
            {teamItems.length > 0 && (
               <div className="mb-4">
                  <h3 className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                     Your teams
                  </h3>
                  <div className="space-y-1">
                     {teamItems
                        .filter((item) => !item?.deleted)
                        .map((item) => (
                           <Button
                              key={item?.label}
                              variant={pathname.includes(item?.href || '') ? 'secondary' : 'ghost'}
                              size="sm"
                              className="w-full justify-start"
                              asChild
                           >
                              <Link href={item?.href || ''}>
                                 <span
                                    className="flex items-center justify-center size-6 rounded-md"
                                    style={{
                                       backgroundColor: item?.color
                                          ? `${item.color}`
                                          : 'var(--primary-10)',
                                    }}
                                 >
                                    {item?.icon}
                                 </span>
                                 <span className="ml-2">{item?.label}</span>
                              </Link>
                           </Button>
                        ))}
                  </div>
               </div>
            )}
         </SidebarContent>
      </Sidebar>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/assignee-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { User, users } from '@/mock-data/users';
import { CheckIcon, UserCircle } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Assignee, UserProfile } from '@/lib/jazz-schema';

interface AssigneeSelectorProps {
   assignee: typeof Assignee | null;
   onChange: (assignee: typeof Assignee) => void;
   users: UserProfile[] | undefined;
}

export function AssigneeSelector({ assignee, onChange, users }: AssigneeSelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<string | null>(assignee?.id || null);

   // const { filterByAssignee } = useIssuesStore();

   useEffect(() => {
      setValue(assignee?.id || null);
   }, [assignee]);

   const handleAssigneeChange = (userId: string) => {
      if (userId === 'unassigned') {
         setValue(null);
         onChange(null);
      } else {
         setValue(userId);
         const newAssignee = users?.find((u) => u.id === userId);
         if (newAssignee) {
            onChange(newAssignee);
         }
      }
      setOpen(false);
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="flex items-center justify-center"
                  size="xs"
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
               >
                  {value ? (
                     (() => {
                        const selectedUser = users?.find((user) => user.id === value);
                        if (selectedUser) {
                           return (
                              <Avatar className="size-5">
                                 <AvatarImage
                                    src={selectedUser.avatarUrl}
                                    alt={selectedUser.name}
                                 />
                                 <AvatarFallback>{selectedUser.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                           );
                        }
                        return <UserCircle className="size-5" />;
                     })()
                  ) : (
                     <UserCircle className="size-5" />
                  )}
                  <span>
                     {value ? users?.find((user) => user.id === value)?.name : 'Unassigned'}
                  </span>
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Assign to..." />
                  <CommandList>
                     <CommandEmpty>No users found.</CommandEmpty>
                     <CommandGroup>
                        <CommandItem
                           value="unassigned"
                           onSelect={() => handleAssigneeChange('unassigned')}
                           className="flex items-center justify-between"
                        >
                           <div className="flex items-center gap-2">
                              <UserCircle className="size-5" />
                              Unassigned
                           </div>
                           {value === null && <CheckIcon size={16} className="ml-auto" />}
                           <span className="text-muted-foreground text-xs">
                              {/* {filterByAssignee(null).length} */}
                              PLACEHOLDERx
                           </span>
                        </CommandItem>
                        {users
                           // .filter((user) => user.teamIds.includes('CORE'))
                           ?.map((user) => (
                              <CommandItem
                                 key={user.id}
                                 value={user.id}
                                 onSelect={() => handleAssigneeChange(user.id)}
                                 className="flex items-center justify-between"
                              >
                                 <div className="flex items-center gap-2">
                                    <Avatar className="size-5">
                                       <AvatarImage src={user.avatarUrl} alt={user.name} />
                                       <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    {user.name}
                                 </div>
                                 {value === user.id && <CheckIcon size={16} className="ml-auto" />}
                                 <span className="text-muted-foreground text-xs">
                                    {/* {filterByAssignee(user.id).length} */}
                                    {user.id}
                                 </span>
                              </CommandItem>
                           ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/create-issue-form.tsx
================================================
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label as UILabel } from '@/components/ui/label';
import { StatusSelector } from './status-selector';
import { PrioritySelector } from './priority-selector';
import { AssigneeSelector } from './assignee-selector';
import { LabelSelector } from './label-selector';
import { TeamSelector } from './team-selector';
import { toast } from 'sonner';
import { useCoState } from 'jazz-react';
import { Organization, Issue, Label, LabelList, Team } from '@/lib/jazz-schema';
import { CoMapInit, Group } from 'jazz-tools';
import { getThreeLettersFromString } from '@/lib/utils';

interface CreateIssueFormProps {
   organization: Organization;
   teamId: string;
   closeModal: () => void;
}

export function CreateIssueForm({ organization, teamId, closeModal }: CreateIssueFormProps) {
   const [createMore, setCreateMore] = useState<boolean>(false);

   // Deeply load the organization with teams, and labels using useCoState
   const orgWithData = useCoState(Organization, organization.id, {
      resolve: {
         teams: {
            $each: {
               issues: { $each: true }, // Load issues for each team
            },
         },
         labels: {
            $each: true, // Deeply load all labels
         },
      },
   });

   // Define createDefaultData before any conditional returns
   const createDefaultData = useCallback((): CoMapInit<Issue> => {
      // Find the team that matches teamId, or use the first team as fallback
      const teams = orgWithData?.teams || [];
      const targetTeam = teams.find((t) => t?.slug === teamId) || teams[0];

      const identifier = getThreeLettersFromString(orgWithData?.name || '');

      // Calculate next issue number by counting all issues across all teams
      let totalIssueCount = 0;
      if (orgWithData?.teams) {
         for (const team of orgWithData.teams) {
            if (team?.issues) {
               totalIssueCount += team.issues.length;
            }
         }
      }

      return {
         identifier: `${identifier}-${totalIssueCount + 1}`,
         title: '',
         description: '',
         statusType: 'to-do',
         assignee: null,
         priority: 'no-priority',
         labels: null,
         parentOrganization: orgWithData,
         parentIssue: null,
         attachments: null,
         comments: null,
         reactions: null,
         deleted: false,
         team: targetTeam,
      };
   }, [orgWithData, teamId]);

   // Initialize state before any conditional returns
   const [addIssueForm, setAddIssueForm] = useState<CoMapInit<Issue>>(createDefaultData());

   // Update form data when org data changes
   useEffect(() => {
      setAddIssueForm(createDefaultData());
   }, [createDefaultData]);

   // Handle loading states
   if (orgWithData === undefined) {
      return (
         <div className="p-8 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
         </div>
      );
   }

   if (orgWithData === null) {
      return (
         <div className="p-8 flex items-center justify-center">
            <div className="text-white/50">Organization not found or access denied</div>
         </div>
      );
   }

   // Get data from deeply loaded organization
   const teams = orgWithData.teams;

   // Get the selected team
   const selectedTeam = addIssueForm.team as Team;

   const organizationLabels = orgWithData.labels || LabelList.create([], selectedTeam._owner);

   // Get users from the team's issues owner (if available)
   const users =
      selectedTeam?.issues?._owner
         ?.castAs(Group)
         ?.members?.map((member) => member.account.profile)
         ?.filter((user) => user !== null) || [];

   // Handler to add a new label to the organization
   const handleCreateLabel = (newLabel: typeof Label.prototype) => {
      if (orgWithData.labels) {
         orgWithData.labels.push(newLabel);
         toast.success('Label added to organization');
      } else {
         toast.error('Could not add label to organization');
      }
   };

   const createIssue = () => {
      if (!addIssueForm.title) {
         toast.error('Title is required');
         return;
      }

      // Get the team to add the issue to
      const team = addIssueForm.team as Team;
      if (!team || !team.issues) {
         toast.error('No team selected or team issues not available');
         return;
      }

      toast.success('Issue created');

      // Create the issue and add it to the team's issues
      const newIssue = Issue.create(addIssueForm, team._owner);
      team.issues.push(newIssue);

      if (!createMore) {
         closeModal();
      }
      setAddIssueForm(createDefaultData());
   };

   return (
      <>
         <div className="flex items-center px-4 pt-4 gap-2">
            <TeamSelector
               teams={teams || []}
               team={addIssueForm.team}
               onChange={(newTeam) => setAddIssueForm({ ...addIssueForm, team: newTeam })}
            />
         </div>

         <div className="px-4 pb-0 space-y-3 w-full">
            <Input
               className="border-none w-full shadow-none outline-none text-2xl font-medium px-0 h-auto focus-visible:ring-0 overflow-hidden text-ellipsis whitespace-normal break-words"
               placeholder="Issue title"
               value={addIssueForm.title}
               onChange={(e) => setAddIssueForm({ ...addIssueForm, title: e.target.value })}
            />

            <Textarea
               className="border-none w-full shadow-none outline-none resize-none px-0 min-h-16 focus-visible:ring-0 break-words whitespace-normal overflow-wrap"
               placeholder="Add description..."
               value={addIssueForm.description}
               onChange={(e) => setAddIssueForm({ ...addIssueForm, description: e.target.value })}
            />

            <div className="w-full flex items-center justify-start gap-1.5 flex-wrap">
               <StatusSelector
                  status={addIssueForm.statusType}
                  onChange={(newStatus) =>
                     setAddIssueForm({ ...addIssueForm, statusType: newStatus })
                  }
               />
               <PrioritySelector
                  priority={addIssueForm.priority}
                  onChange={(newPriority) =>
                     setAddIssueForm({ ...addIssueForm, priority: newPriority })
                  }
               />
               <AssigneeSelector
                  assignee={addIssueForm.assignee}
                  users={users}
                  onChange={(newAssignee) =>
                     setAddIssueForm({ ...addIssueForm, assignee: newAssignee })
                  }
               />
               <LabelSelector
                  availableLabels={organizationLabels}
                  selectedLabels={addIssueForm.labels ? addIssueForm.labels : null}
                  onChange={(newLabels) => setAddIssueForm({ ...addIssueForm, labels: newLabels })}
                  onCreateLabel={handleCreateLabel}
               />
            </div>
         </div>

         <div className="flex items-center justify-between py-2.5 px-4 w-full border-t">
            <div className="flex items-center gap-2">
               <div className="flex items-center space-x-2">
                  <Switch id="create-more" checked={createMore} onCheckedChange={setCreateMore} />
                  <UILabel htmlFor="create-more">Create more</UILabel>
               </div>
            </div>
            <Button
               size="sm"
               onClick={() => {
                  createIssue();
               }}
            >
               Create issue
            </Button>
         </div>
      </>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/index.tsx
================================================
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { RiEditLine } from '@remixicon/react';
import { useCreateIssueStore } from '@/store/create-issue-store';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import { CreateIssueForm } from './create-issue-form';

export function CreateNewIssue() {
   const params = useParams();
   const orgId = params.orgId as string;
   const teamId = params.teamId as string;

   const { isOpen, openModal, closeModal } = useCreateIssueStore();

   // Use useAccount with shallow loading of organizations
   const { me } = useAccount({
      resolve: {
         root: {
            organizations: true, // Shallow loading
         },
      },
   });

   // Find the organization by slug
   const organization = me?.root?.organizations?.find((org) => org?.slug === orgId) || undefined;

   return (
      <Dialog open={isOpen} onOpenChange={(value) => (value ? openModal() : closeModal())}>
         <DialogTrigger asChild>
            <Button className="size-8 shrink-0" variant="secondary" size="icon">
               <RiEditLine />
            </Button>
         </DialogTrigger>
         <DialogContent
            title="Create New Issue"
            className="w-full sm:max-w-[750px] p-0 shadow-xl top-[30%]"
         >
            {organization ? (
               <CreateIssueForm
                  organization={organization}
                  teamId={teamId}
                  closeModal={closeModal}
               />
            ) : (
               <div className="p-8 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-400"></div>
               </div>
            )}
         </DialogContent>
      </Dialog>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/label-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
   CommandSeparator,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CheckIcon, PlusIcon, TagIcon } from 'lucide-react';
import { useId, useState } from 'react';
import { cn } from '@/lib/utils';
import { Label, LabelList } from '@/lib/jazz-schema';
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface LabelSelectorProps {
   availableLabels: LabelList;
   selectedLabels: LabelList | null;
   onChange: (labels: LabelList) => void;
   onCreateLabel?: (label: typeof Label.prototype) => void;
}

export function LabelSelector({
   availableLabels,
   selectedLabels,
   onChange,
   onCreateLabel,
}: LabelSelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [newLabelDialog, setNewLabelDialog] = useState<boolean>(false);
   const [newLabelName, setNewLabelName] = useState<string>('');
   const [newLabelColor, setNewLabelColor] = useState<string>('#3b82f6');

   const handleLabelToggle = (label: typeof Label.prototype) => {
      // Create a new LabelList if selectedLabels is null
      const currentLabels = selectedLabels || LabelList.create([], availableLabels._owner);

      const isSelected = currentLabels.some((l) => l?.id === label?.id);
      const newLabels = LabelList.create([], availableLabels._owner);

      if (isSelected) {
         // Remove the label
         currentLabels
            .filter((l) => l?.id !== label?.id)
            .forEach((l) => {
               if (l) newLabels.push(l);
            });
      } else {
         // Add the label
         currentLabels.forEach((l) => {
            if (l) newLabels.push(l);
         });
         newLabels.push(label);
      }

      onChange(newLabels);
   };

   const handleCreateLabel = () => {
      if (!newLabelName.trim()) {
         toast.error('Label name is required');
         return;
      }

      // Create new label instance
      const newLabel = Label.create(
         {
            name: newLabelName,
            color: newLabelColor,
         },
         availableLabels._owner
      );

      // Add to organization labels via callback
      if (onCreateLabel) {
         onCreateLabel(newLabel);
      }

      // Add to selected labels
      const currentLabels = selectedLabels || LabelList.create([], availableLabels._owner);
      const newLabels = LabelList.create([], availableLabels._owner);

      currentLabels.forEach((l) => {
         if (l) newLabels.push(l);
      });

      newLabels.push(newLabel);
      onChange(newLabels);

      // Reset form and close dialog
      setNewLabelName('');
      setNewLabelColor('#3b82f6');
      setNewLabelDialog(false);
      toast.success('New label created');
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className={cn(
                     'flex items-center justify-center',
                     (!selectedLabels || selectedLabels.length === 0) && 'size-7'
                  )}
                  size={selectedLabels && selectedLabels.length > 0 ? 'xs' : 'icon'}
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
               >
                  <TagIcon className="size-4" />
                  {selectedLabels && selectedLabels.length > 0 && (
                     <div className="flex -space-x-0.5">
                        {selectedLabels.map((label) => (
                           <div
                              key={label?.id}
                              className={`size-3 rounded-full`}
                              style={{ backgroundColor: label?.color }}
                           />
                        ))}
                     </div>
                  )}
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Search labels..." />
                  <CommandList>
                     <CommandEmpty>
                        <div className="flex flex-col items-center justify-center py-4 gap-2">
                           <p>No labels found.</p>
                           <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                 setNewLabelDialog(true);
                                 setOpen(false);
                              }}
                           >
                              <PlusIcon className="size-4 mr-2" />
                              Create new label
                           </Button>
                        </div>
                     </CommandEmpty>
                     <CommandGroup>
                        {availableLabels.map((label) => {
                           if (!label) return null;
                           const isSelected =
                              selectedLabels?.some((l) => l?.id === label?.id) ?? false;
                           return (
                              <CommandItem
                                 key={label?.id}
                                 value={label?.name}
                                 onSelect={() => handleLabelToggle(label)}
                                 className="flex items-center justify-between"
                              >
                                 <div className="flex items-center gap-2">
                                    <div
                                       className={`size-3 rounded-full`}
                                       style={{ backgroundColor: label.color }}
                                    />
                                    <span>{label.name}</span>
                                 </div>
                                 {isSelected && <CheckIcon size={16} className="ml-auto" />}
                              </CommandItem>
                           );
                        })}
                     </CommandGroup>
                     <CommandSeparator />
                     <CommandGroup>
                        <CommandItem
                           onSelect={() => {
                              setNewLabelDialog(true);
                              setOpen(false);
                           }}
                        >
                           <div className="flex items-center gap-2">
                              <PlusIcon className="size-4" />
                              <span>Create new label</span>
                           </div>
                        </CommandItem>
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>

         <Dialog open={newLabelDialog} onOpenChange={setNewLabelDialog}>
            <DialogContent className="sm:max-w-[425px]">
               <DialogHeader>
                  <DialogTitle>Create New Label</DialogTitle>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                     <Input
                        placeholder="Label name"
                        value={newLabelName}
                        onChange={(e) => setNewLabelName(e.target.value)}
                        className="col-span-3"
                     />
                     <div className="flex gap-2 items-center">
                        <div
                           className="size-6 rounded-full border border-gray-300"
                           style={{ backgroundColor: newLabelColor }}
                        />
                        <Input
                           type="color"
                           value={newLabelColor}
                           onChange={(e) => setNewLabelColor(e.target.value)}
                           className="w-10 h-8 p-0 cursor-pointer"
                        />
                     </div>
                  </div>
               </div>
               <DialogFooter>
                  <Button variant="outline" onClick={() => setNewLabelDialog(false)}>
                     Cancel
                  </Button>
                  <Button onClick={handleCreateLabel}>Create</Button>
               </DialogFooter>
            </DialogContent>
         </Dialog>
      </div>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/priority-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { useIssuesStore } from '@/store/issues-store';
import { priorities } from '@/lib/priorities';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { PriorityType } from '@/lib/jazz-schema';

interface PrioritySelectorProps {
   priority: typeof PriorityType;
   onChange: (priority: typeof PriorityType) => void;
}

export function PrioritySelector({ priority, onChange }: PrioritySelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<string>(priority);

   // const { filterByPriority } = useIssuesStore();

   useEffect(() => {
      setValue(priority);
   }, [priority]);

   const handlePriorityChange = (priorityType: typeof PriorityType) => {
      setValue(priorityType);
      setOpen(false);

      const newPriority = priorities.find((p) => p.type === priorityType);
      if (newPriority) {
         onChange(priorityType);
      }
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="flex items-center justify-center"
                  size="xs"
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
               >
                  {(() => {
                     const selectedItem = priorities.find((item) => item.type === value);
                     if (selectedItem) {
                        const Icon = selectedItem.icon;
                        return <Icon className="text-muted-foreground size-4" />;
                     }
                     return null;
                  })()}
                  <span>
                     {value ? priorities.find((p) => p.type === value)?.name : 'No priority'}
                  </span>
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Set priority..." />
                  <CommandList>
                     <CommandEmpty>No priority found.</CommandEmpty>
                     <CommandGroup>
                        {priorities.map((item) => (
                           <CommandItem
                              key={item.type}
                              value={item.type}
                              onSelect={() =>
                                 handlePriorityChange(item.type as typeof PriorityType)
                              }
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon className="text-muted-foreground size-4" />
                                 {item.name}
                              </div>
                              {value === item.type && <CheckIcon size={16} className="ml-auto" />}
                              <span className="text-muted-foreground text-xs">
                                 {/* {filterByPriority(item.id).length} */}
                                 {item.type}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/status-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { StatusType } from '@/lib/jazz-schema';
// import { useIssuesStore } from '@/store/issues-store';
import { status as allStatus } from '@/lib/status';
import { CheckIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

interface StatusSelectorProps {
   status: typeof StatusType;
   onChange: (status: typeof StatusType) => void;
}

export function StatusSelector({ status, onChange }: StatusSelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<string>(status);

   // const { filterByStatus } = useIssuesStore();

   useEffect(() => {
      setValue(status);
   }, [status]);

   const handleStatusChange = (statusType: typeof StatusType) => {
      setValue(statusType);
      setOpen(false);

      const newStatus = allStatus.find((s) => s.type === statusType);
      if (newStatus) {
         onChange(statusType);
      }
   };

   return (
      <div className="*:not-first:mt-2">
         <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
               <Button
                  id={id}
                  className="flex items-center justify-center"
                  size="xs"
                  variant="secondary"
                  role="combobox"
                  aria-expanded={open}
               >
                  {(() => {
                     const selectedItem = allStatus.find((item) => item.type === value);
                     if (selectedItem) {
                        const Icon = selectedItem.icon;
                        return <Icon />;
                     }
                     return null;
                  })()}
                  <span>{value ? allStatus.find((s) => s.type === value)?.name : 'To do'}</span>
               </Button>
            </PopoverTrigger>
            <PopoverContent
               className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
               align="start"
            >
               <Command>
                  <CommandInput placeholder="Set status..." />
                  <CommandList>
                     <CommandEmpty>No status found.</CommandEmpty>
                     <CommandGroup>
                        {allStatus.map((item) => (
                           <CommandItem
                              key={item.type}
                              value={item.type}
                              onSelect={() => handleStatusChange(item.type as typeof StatusType)}
                              className="flex items-center justify-between"
                           >
                              <div className="flex items-center gap-2">
                                 <item.icon />
                                 {item.name}
                              </div>
                              {value === item.type && <CheckIcon size={16} className="ml-auto" />}
                              <span className="text-muted-foreground text-xs">
                                 {/* {filterByStatus(item.id).length} */}
                                 {item.type}
                              </span>
                           </CommandItem>
                        ))}
                     </CommandGroup>
                  </CommandList>
               </Command>
            </PopoverContent>
         </Popover>
      </div>
   );
}



================================================
FILE: components/layout/sidebar/create-new-issue/team-selector.tsx
================================================
'use client';

import { Button } from '@/components/ui/button';
import {
   Command,
   CommandEmpty,
   CommandGroup,
   CommandInput,
   CommandItem,
   CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, CheckIcon } from 'lucide-react';
import { useId, useState, useEffect } from 'react';
import { Team } from '@/lib/jazz-schema';

interface TeamSelectorProps {
   teams: readonly (Team | null)[];
   team: Team | null | undefined;
   onChange: (team: Team) => void;
}

export function TeamSelector({ teams, team, onChange }: TeamSelectorProps) {
   const id = useId();
   const [open, setOpen] = useState<boolean>(false);
   const [value, setValue] = useState<Team | null | undefined>(team);

   useEffect(() => {
      setValue(team);
   }, [team]);

   const handleTeamChange = (selectedTeam: Team) => {
      setValue(selectedTeam);
      onChange(selectedTeam);
      setOpen(false);
   };

   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger asChild>
            <Button
               id={id}
               size="sm"
               variant="outline"
               className="gap-1.5"
               role="combobox"
               aria-expanded={open}
            >
               {value ? (
                  <div className="flex items-center gap-2">
                     <span
                        className="flex items-center justify-center size-6 rounded-md"
                        style={{
                           backgroundColor: value.color ? `${value.color}` : 'var(--primary-10)',
                        }}
                     >
                        {value.icon}
                     </span>
                     <span className="font-medium">{value.name}</span>
                  </div>
               ) : (
                  <span className="font-medium">Select team</span>
               )}
               <ChevronDown className="size-3 opacity-50" />
            </Button>
         </PopoverTrigger>
         <PopoverContent className="border-input w-[220px] p-0" align="start">
            <Command>
               <CommandInput placeholder="Select team..." />
               <CommandList>
                  <CommandEmpty>No teams found.</CommandEmpty>
                  <CommandGroup>
                     {teams?.map(
                        (teamItem) =>
                           teamItem && (
                              <CommandItem
                                 key={String(teamItem.id)}
                                 value={teamItem.name}
                                 onSelect={() => handleTeamChange(teamItem)}
                                 className="flex items-center justify-between"
                              >
                                 <div className="flex items-center gap-2">
                                    <span
                                       className="flex items-center justify-center size-6 rounded-md"
                                       style={{
                                          backgroundColor: teamItem?.color
                                             ? `${teamItem.color}`
                                             : 'var(--primary-10)',
                                       }}
                                    >
                                       {teamItem?.icon}
                                    </span>
                                    {teamItem.name}
                                 </div>
                                 {value?.id === teamItem.id && (
                                    <CheckIcon size={16} className="ml-auto" />
                                 )}
                              </CommandItem>
                           )
                     )}
                  </CommandGroup>
               </CommandList>
            </Command>
         </PopoverContent>
      </Popover>
   );
}



================================================
FILE: components/ui/avatar.tsx
================================================
'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/utils';

function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
   return (
      <AvatarPrimitive.Root
         data-slot="avatar"
         className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
         {...props}
      />
   );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
   return (
      <AvatarPrimitive.Image
         data-slot="avatar-image"
         className={cn('aspect-square size-full', className)}
         {...props}
      />
   );
}

function AvatarFallback({
   className,
   ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
   return (
      <AvatarPrimitive.Fallback
         data-slot="avatar-fallback"
         className={cn(
            'bg-muted flex size-full items-center justify-center rounded-full',
            className
         )}
         {...props}
      />
   );
}

export { Avatar, AvatarImage, AvatarFallback };



================================================
FILE: components/ui/badge.tsx
================================================
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
   'inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-auto',
   {
      variants: {
         variant: {
            default:
               'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary:
               'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive:
               'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
         },
      },
      defaultVariants: {
         variant: 'default',
      },
   }
);

function Badge({
   className,
   variant,
   asChild = false,
   ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
   const Comp = asChild ? Slot : 'span';

   return (
      <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
   );
}

export { Badge, badgeVariants };



================================================
FILE: components/ui/button.tsx
================================================
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
   {
      variants: {
         variant: {
            default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
            destructive:
               'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
            outline:
               'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline',
         },
         size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            xxs: 'h-6 rounded-md gap-1.5 px-2.5 has-[>svg]:px-2',
            xs: 'h-7 rounded-md gap-1.5 px-2.5 has-[>svg]:px-2',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
);

function Button({
   className,
   variant,
   size,
   asChild = false,
   ...props
}: React.ComponentProps<'button'> &
   VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
   }) {
   const Comp = asChild ? Slot : 'button';

   return (
      <Comp
         data-slot="button"
         className={cn(buttonVariants({ variant, size, className }))}
         {...props}
      />
   );
}

export { Button, buttonVariants };



================================================
FILE: components/ui/collapsible.tsx
================================================
'use client';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
   return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
   ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
   return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({
   ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
   return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };



================================================
FILE: components/ui/command.tsx
================================================
'use client';

import * as React from 'react';
import { Command as CommandPrimitive } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from '@/components/ui/dialog';

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
   return (
      <CommandPrimitive
         data-slot="command"
         className={cn(
            'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
            className
         )}
         {...props}
      />
   );
}

function CommandDialog({
   title = 'Command Palette',
   description = 'Search for a command to run...',
   children,
   ...props
}: React.ComponentProps<typeof Dialog> & {
   title?: string;
   description?: string;
}) {
   return (
      <Dialog {...props}>
         <DialogHeader className="sr-only">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
         </DialogHeader>
         <DialogContent title={title} className="overflow-hidden p-0">
            <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
               {children}
            </Command>
         </DialogContent>
      </Dialog>
   );
}

function CommandInput({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
   return (
      <div data-slot="command-input-wrapper" className="flex h-9 items-center gap-2 border-b px-3">
         <SearchIcon className="size-4 shrink-0 opacity-50" />
         <CommandPrimitive.Input
            data-slot="command-input"
            className={cn(
               'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
               className
            )}
            {...props}
         />
      </div>
   );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
   return (
      <CommandPrimitive.List
         data-slot="command-list"
         className={cn('max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto', className)}
         {...props}
      />
   );
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
   return (
      <CommandPrimitive.Empty
         data-slot="command-empty"
         className="py-6 text-center text-sm"
         {...props}
      />
   );
}

function CommandGroup({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
   return (
      <CommandPrimitive.Group
         data-slot="command-group"
         className={cn(
            'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
            className
         )}
         {...props}
      />
   );
}

function CommandSeparator({
   className,
   ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
   return (
      <CommandPrimitive.Separator
         data-slot="command-separator"
         className={cn('bg-border -mx-1 h-px', className)}
         {...props}
      />
   );
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
   return (
      <CommandPrimitive.Item
         data-slot="command-item"
         className={cn(
            "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
         )}
         {...props}
      />
   );
}

function CommandShortcut({ className, ...props }: React.ComponentProps<'span'>) {
   return (
      <span
         data-slot="command-shortcut"
         className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
         {...props}
      />
   );
}

export {
   Command,
   CommandDialog,
   CommandInput,
   CommandList,
   CommandEmpty,
   CommandGroup,
   CommandItem,
   CommandShortcut,
   CommandSeparator,
};



================================================
FILE: components/ui/dialog.tsx
================================================
'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
   return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
   return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
   return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
   return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
   className,
   ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
   return (
      <DialogPrimitive.Overlay
         data-slot="dialog-overlay"
         className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
            className
         )}
         {...props}
      />
   );
}

function DialogContent({
   className,
   children,
   title,
   ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { title?: string }) {
   // Check if children already include a DialogTitle
   const hasDialogTitle = React.Children.toArray(children).some(
      (child) =>
         React.isValidElement(child) &&
         // @ts-expect-error Checking for displayName on React element type for DialogTitle detection
         (child.type?.displayName === 'DialogTitle' || child.type?.name === 'DialogTitle')
   );

   return (
      <DialogPortal data-slot="dialog-portal">
         <DialogOverlay />
         <DialogPrimitive.Content
            data-slot="dialog-content"
            className={cn(
               'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
               className
            )}
            {...props}
         >
            {!hasDialogTitle && title && <DialogTitle className="sr-only">{title}</DialogTitle>}
            {children}
            <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
               <XIcon />
               <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
         </DialogPrimitive.Content>
      </DialogPortal>
   );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="dialog-header"
         className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
         {...props}
      />
   );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="dialog-footer"
         className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
         {...props}
      />
   );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
   return (
      <DialogPrimitive.Title
         data-slot="dialog-title"
         className={cn('text-lg leading-none font-semibold', className)}
         {...props}
      />
   );
}

function DialogDescription({
   className,
   ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
   return (
      <DialogPrimitive.Description
         data-slot="dialog-description"
         className={cn('text-muted-foreground text-sm', className)}
         {...props}
      />
   );
}

export {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogOverlay,
   DialogPortal,
   DialogTitle,
   DialogTrigger,
};

DialogTitle.displayName = 'DialogTitle';



================================================
FILE: components/ui/dropdown-menu.tsx
================================================
'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
   return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
   return <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
   return <DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
   className,
   sideOffset = 4,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
   return (
      <DropdownMenuPrimitive.Portal>
         <DropdownMenuPrimitive.Content
            data-slot="dropdown-menu-content"
            sideOffset={sideOffset}
            className={cn(
               'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
               className
            )}
            {...props}
         />
      </DropdownMenuPrimitive.Portal>
   );
}

function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
   return <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuItem({
   className,
   inset,
   variant = 'default',
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
   inset?: boolean;
   variant?: 'default' | 'destructive';
}) {
   return (
      <DropdownMenuPrimitive.Item
         data-slot="dropdown-menu-item"
         data-inset={inset}
         data-variant={variant}
         className={cn(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
         )}
         {...props}
      />
   );
}

function DropdownMenuCheckboxItem({
   className,
   children,
   checked,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
   return (
      <DropdownMenuPrimitive.CheckboxItem
         data-slot="dropdown-menu-checkbox-item"
         className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
         )}
         checked={checked}
         {...props}
      >
         <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
               <CheckIcon className="size-4" />
            </DropdownMenuPrimitive.ItemIndicator>
         </span>
         {children}
      </DropdownMenuPrimitive.CheckboxItem>
   );
}

function DropdownMenuRadioGroup({
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
   return <DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

function DropdownMenuRadioItem({
   className,
   children,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
   return (
      <DropdownMenuPrimitive.RadioItem
         data-slot="dropdown-menu-radio-item"
         className={cn(
            "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
         )}
         {...props}
      >
         <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
               <CircleIcon className="size-2 fill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
         </span>
         {children}
      </DropdownMenuPrimitive.RadioItem>
   );
}

function DropdownMenuLabel({
   className,
   inset,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
   inset?: boolean;
}) {
   return (
      <DropdownMenuPrimitive.Label
         data-slot="dropdown-menu-label"
         data-inset={inset}
         className={cn('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className)}
         {...props}
      />
   );
}

function DropdownMenuSeparator({
   className,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
   return (
      <DropdownMenuPrimitive.Separator
         data-slot="dropdown-menu-separator"
         className={cn('bg-border -mx-1 my-1 h-px', className)}
         {...props}
      />
   );
}

function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
   return (
      <span
         data-slot="dropdown-menu-shortcut"
         className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)}
         {...props}
      />
   );
}

function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
   return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
   className,
   inset,
   children,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
   inset?: boolean;
}) {
   return (
      <DropdownMenuPrimitive.SubTrigger
         data-slot="dropdown-menu-sub-trigger"
         data-inset={inset}
         className={cn(
            'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8',
            className
         )}
         {...props}
      >
         {children}
         <ChevronRightIcon className="ml-auto size-4" />
      </DropdownMenuPrimitive.SubTrigger>
   );
}

function DropdownMenuSubContent({
   className,
   ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
   return (
      <DropdownMenuPrimitive.SubContent
         data-slot="dropdown-menu-sub-content"
         className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
            className
         )}
         {...props}
      />
   );
}

export {
   DropdownMenu,
   DropdownMenuPortal,
   DropdownMenuTrigger,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuLabel,
   DropdownMenuItem,
   DropdownMenuCheckboxItem,
   DropdownMenuRadioGroup,
   DropdownMenuRadioItem,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubTrigger,
   DropdownMenuSubContent,
};



================================================
FILE: components/ui/form.tsx
================================================
'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
   Controller,
   ControllerProps,
   FieldPath,
   FieldValues,
   FormProvider,
   useFormContext,
   useFormState,
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

const Form = FormProvider;

type FormFieldContextValue<
   TFieldValues extends FieldValues = FieldValues,
   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
   name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue);

const FormField = <
   TFieldValues extends FieldValues = FieldValues,
   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
   ...props
}: ControllerProps<TFieldValues, TName>) => {
   return (
      <FormFieldContext.Provider value={{ name: props.name }}>
         <Controller {...props} />
      </FormFieldContext.Provider>
   );
};

const useFormField = () => {
   const fieldContext = React.useContext(FormFieldContext);
   const itemContext = React.useContext(FormItemContext);
   const { getFieldState } = useFormContext();
   const formState = useFormState({ name: fieldContext.name });
   const fieldState = getFieldState(fieldContext.name, formState);

   if (!fieldContext) {
      throw new Error('useFormField should be used within <FormField>');
   }

   const { id } = itemContext;

   return {
      id,
      name: fieldContext.name,
      formItemId: `${id}-form-item`,
      formDescriptionId: `${id}-form-item-description`,
      formMessageId: `${id}-form-item-message`,
      ...fieldState,
   };
};

type FormItemContextValue = {
   id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue);

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
   const id = React.useId();

   return (
      <FormItemContext.Provider value={{ id }}>
         <div data-slot="form-item" className={cn('grid gap-2', className)} {...props} />
      </FormItemContext.Provider>
   );
}

function FormLabel({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
   const { error, formItemId } = useFormField();

   return (
      <Label
         data-slot="form-label"
         data-error={!!error}
         className={cn('data-[error=true]:text-destructive-foreground', className)}
         htmlFor={formItemId}
         {...props}
      />
   );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
   const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

   return (
      <Slot
         data-slot="form-control"
         id={formItemId}
         aria-describedby={
            !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`
         }
         aria-invalid={!!error}
         {...props}
      />
   );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
   const { formDescriptionId } = useFormField();

   return (
      <p
         data-slot="form-description"
         id={formDescriptionId}
         className={cn('text-muted-foreground text-sm', className)}
         {...props}
      />
   );
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
   const { error, formMessageId } = useFormField();
   const body = error ? String(error?.message ?? '') : props.children;

   if (!body) {
      return null;
   }

   return (
      <p
         data-slot="form-message"
         id={formMessageId}
         className={cn('text-destructive-foreground text-sm', className)}
         {...props}
      >
         {body}
      </p>
   );
}

export {
   useFormField,
   Form,
   FormItem,
   FormLabel,
   FormControl,
   FormDescription,
   FormMessage,
   FormField,
};



================================================
FILE: components/ui/input.tsx
================================================
import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
   return (
      <input
         type={type}
         data-slot="input"
         className={cn(
            'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            className
         )}
         {...props}
      />
   );
}

export { Input };



================================================
FILE: components/ui/label.tsx
================================================
'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
   return (
      <LabelPrimitive.Root
         data-slot="label"
         className={cn(
            'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            className
         )}
         {...props}
      />
   );
}

export { Label };



================================================
FILE: components/ui/popover.tsx
================================================
'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

function Popover({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Root>) {
   return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
   return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
   className,
   align = 'center',
   sideOffset = 4,
   ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
   return (
      <PopoverPrimitive.Portal>
         <PopoverPrimitive.Content
            data-slot="popover-content"
            align={align}
            sideOffset={sideOffset}
            className={cn(
               'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden',
               className
            )}
            {...props}
         />
      </PopoverPrimitive.Portal>
   );
}

function PopoverAnchor({ ...props }: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
   return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };



================================================
FILE: components/ui/progress.tsx
================================================
'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

function Progress({
   className,
   value,
   ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
   return (
      <ProgressPrimitive.Root
         data-slot="progress"
         className={cn('bg-primary/20 relative h-2 w-full overflow-hidden rounded-full', className)}
         {...props}
      >
         <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            className="bg-primary h-full w-full flex-1 transition-all"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
         />
      </ProgressPrimitive.Root>
   );
}

export { Progress };



================================================
FILE: components/ui/select.tsx
================================================
'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
   return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
   return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
   return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
   className,
   children,
   ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
   return (
      <SelectPrimitive.Trigger
         data-slot="select-trigger"
         className={cn(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            className
         )}
         {...props}
      >
         {children}
         <SelectPrimitive.Icon asChild>
            <ChevronDownIcon className="size-4 opacity-50" />
         </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
   );
}

function SelectContent({
   className,
   children,
   position = 'popper',
   ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
   return (
      <SelectPrimitive.Portal>
         <SelectPrimitive.Content
            data-slot="select-content"
            className={cn(
               'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
               position === 'popper' &&
                  'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
               className
            )}
            position={position}
            {...props}
         >
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
               className={cn(
                  'p-1',
                  position === 'popper' &&
                     'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
               )}
            >
               {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
         </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
   );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
   return (
      <SelectPrimitive.Label
         data-slot="select-label"
         className={cn('px-2 py-1.5 text-sm font-medium', className)}
         {...props}
      />
   );
}

function SelectItem({
   className,
   children,
   ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
   return (
      <SelectPrimitive.Item
         data-slot="select-item"
         className={cn(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            className
         )}
         {...props}
      >
         <span className="absolute right-2 flex size-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
               <CheckIcon className="size-4" />
            </SelectPrimitive.ItemIndicator>
         </span>
         <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
   );
}

function SelectSeparator({
   className,
   ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
   return (
      <SelectPrimitive.Separator
         data-slot="select-separator"
         className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
         {...props}
      />
   );
}

function SelectScrollUpButton({
   className,
   ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
   return (
      <SelectPrimitive.ScrollUpButton
         data-slot="select-scroll-up-button"
         className={cn('flex cursor-default items-center justify-center py-1', className)}
         {...props}
      >
         <ChevronUpIcon className="size-4" />
      </SelectPrimitive.ScrollUpButton>
   );
}

function SelectScrollDownButton({
   className,
   ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
   return (
      <SelectPrimitive.ScrollDownButton
         data-slot="select-scroll-down-button"
         className={cn('flex cursor-default items-center justify-center py-1', className)}
         {...props}
      >
         <ChevronDownIcon className="size-4" />
      </SelectPrimitive.ScrollDownButton>
   );
}

export {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectScrollDownButton,
   SelectScrollUpButton,
   SelectSeparator,
   SelectTrigger,
   SelectValue,
};



================================================
FILE: components/ui/separator.tsx
================================================
'use client';

import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';

function Separator({
   className,
   orientation = 'horizontal',
   decorative = true,
   ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
   return (
      <SeparatorPrimitive.Root
         data-slot="separator-root"
         decorative={decorative}
         orientation={orientation}
         className={cn(
            'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
            className
         )}
         {...props}
      />
   );
}

export { Separator };



================================================
FILE: components/ui/sheet.tsx
================================================
'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
   return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
   return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
   return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
   return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
   className,
   ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
   return (
      <SheetPrimitive.Overlay
         data-slot="sheet-overlay"
         className={cn(
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
            className
         )}
         {...props}
      />
   );
}

function SheetContent({
   className,
   children,
   side = 'right',
   ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
   side?: 'top' | 'right' | 'bottom' | 'left';
}) {
   return (
      <SheetPortal>
         <SheetOverlay />
         <SheetPrimitive.Content
            data-slot="sheet-content"
            className={cn(
               'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
               side === 'right' &&
                  'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
               side === 'left' &&
                  'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
               side === 'top' &&
                  'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
               side === 'bottom' &&
                  'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
               className
            )}
            {...props}
         >
            {children}
            <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
               <XIcon className="size-4" />
               <span className="sr-only">Close</span>
            </SheetPrimitive.Close>
         </SheetPrimitive.Content>
      </SheetPortal>
   );
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sheet-header"
         className={cn('flex flex-col gap-1.5 p-4', className)}
         {...props}
      />
   );
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sheet-footer"
         className={cn('mt-auto flex flex-col gap-2 p-4', className)}
         {...props}
      />
   );
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
   return (
      <SheetPrimitive.Title
         data-slot="sheet-title"
         className={cn('text-foreground font-semibold', className)}
         {...props}
      />
   );
}

function SheetDescription({
   className,
   ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
   return (
      <SheetPrimitive.Description
         data-slot="sheet-description"
         className={cn('text-muted-foreground text-sm', className)}
         {...props}
      />
   );
}

export {
   Sheet,
   SheetTrigger,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetFooter,
   SheetTitle,
   SheetDescription,
};



================================================
FILE: components/ui/sidebar.tsx
================================================
'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { PanelLeftIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '244px'; // 16rem
const SIDEBAR_WIDTH_MOBILE = '260px'; // 18rem
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContext = {
   state: 'expanded' | 'collapsed';
   open: boolean;
   setOpen: (open: boolean) => void;
   openMobile: boolean;
   setOpenMobile: (open: boolean) => void;
   isMobile: boolean;
   toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
   const context = React.useContext(SidebarContext);
   if (!context) {
      throw new Error('useSidebar must be used within a SidebarProvider.');
   }

   return context;
}

function SidebarProvider({
   defaultOpen = true,
   open: openProp,
   onOpenChange: setOpenProp,
   className,
   style,
   children,
   ...props
}: React.ComponentProps<'div'> & {
   defaultOpen?: boolean;
   open?: boolean;
   onOpenChange?: (open: boolean) => void;
}) {
   const isMobile = useIsMobile();
   const [openMobile, setOpenMobile] = React.useState(false);

   // This is the internal state of the sidebar.
   // We use openProp and setOpenProp for control from outside the component.
   const [_open, _setOpen] = React.useState(defaultOpen);
   const open = openProp ?? _open;
   const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
         const openState = typeof value === 'function' ? value(open) : value;
         if (setOpenProp) {
            setOpenProp(openState);
         } else {
            _setOpen(openState);
         }

         // This sets the cookie to keep the sidebar state.
         document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
   );

   // Helper to toggle the sidebar.
   const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
   }, [isMobile, setOpen, setOpenMobile]);

   React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
         if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            toggleSidebar();
         }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
   }, [toggleSidebar]);

   // We add a state so that we can do data-state="expanded" or "collapsed".
   // This makes it easier to style the sidebar with Tailwind classes.
   const state = open ? 'expanded' : 'collapsed';

   const contextValue = React.useMemo<SidebarContext>(
      () => ({
         state,
         open,
         setOpen,
         isMobile,
         openMobile,
         setOpenMobile,
         toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
   );

   return (
      <SidebarContext.Provider value={contextValue}>
         <TooltipProvider delayDuration={0}>
            <div
               data-slot="sidebar-wrapper"
               style={
                  {
                     '--sidebar-width': SIDEBAR_WIDTH,
                     '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                     ...style,
                  } as React.CSSProperties
               }
               className={cn(
                  'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex h-svh overflow-hidden w-full',
                  className
               )}
               {...props}
            >
               {children}
            </div>
         </TooltipProvider>
      </SidebarContext.Provider>
   );
}

function Sidebar({
   side = 'left',
   variant = 'sidebar',
   collapsible = 'offcanvas',
   className,
   children,
   ...props
}: React.ComponentProps<'div'> & {
   side?: 'left' | 'right';
   variant?: 'sidebar' | 'floating' | 'inset';
   collapsible?: 'offcanvas' | 'icon' | 'none';
}) {
   const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

   if (collapsible === 'none') {
      return (
         <div
            data-slot="sidebar"
            className={cn(
               'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
               className
            )}
            {...props}
         >
            {children}
         </div>
      );
   }

   if (isMobile) {
      return (
         <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
            <SheetContent
               data-sidebar="sidebar"
               data-slot="sidebar"
               data-mobile="true"
               className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
               style={
                  {
                     '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                  } as React.CSSProperties
               }
               side={side}
            >
               <SheetHeader className="sr-only">
                  <SheetTitle>Sidebar</SheetTitle>
                  <SheetDescription>Displays the mobile sidebar.</SheetDescription>
               </SheetHeader>
               <div className="flex h-full w-full flex-col">{children}</div>
            </SheetContent>
         </Sheet>
      );
   }

   return (
      <div
         className="group peer text-sidebar-foreground hidden md:block"
         data-state={state}
         data-collapsible={state === 'collapsed' ? collapsible : ''}
         data-variant={variant}
         data-side={side}
         data-slot="sidebar"
      >
         {/* This is what handles the sidebar gap on desktop */}
         <div
            className={cn(
               'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
               'group-data-[collapsible=offcanvas]:w-0',
               'group-data-[side=right]:rotate-180',
               variant === 'floating' || variant === 'inset'
                  ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
                  : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
            )}
         />
         <div
            className={cn(
               'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
               side === 'left'
                  ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
                  : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
               // Adjust the padding for floating and inset variants.
               variant === 'floating' || variant === 'inset'
                  ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
                  : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
               className
            )}
            {...props}
         >
            <div
               data-sidebar="sidebar"
               className="bg-background group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
            >
               {children}
            </div>
         </div>
      </div>
   );
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
   const { toggleSidebar } = useSidebar();

   return (
      <Button
         data-sidebar="trigger"
         data-slot="sidebar-trigger"
         variant="ghost"
         size="icon"
         className={cn('h-7 w-7', className)}
         onClick={(event) => {
            onClick?.(event);
            toggleSidebar();
         }}
         {...props}
      >
         <PanelLeftIcon />
         <span className="sr-only">Toggle Sidebar</span>
      </Button>
   );
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
   const { toggleSidebar } = useSidebar();

   return (
      <button
         data-sidebar="rail"
         data-slot="sidebar-rail"
         aria-label="Toggle Sidebar"
         tabIndex={-1}
         onClick={toggleSidebar}
         title="Toggle Sidebar"
         className={cn(
            'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
            'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
            '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
            'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
            '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
            '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
            className
         )}
         {...props}
      />
   );
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
   return (
      <main
         data-slot="sidebar-inset"
         className={cn(
            'bg-background relative flex w-full flex-1 flex-col',
            'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
            className
         )}
         {...props}
      />
   );
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
   return (
      <Input
         data-slot="sidebar-input"
         data-sidebar="input"
         className={cn('bg-background h-8 w-full shadow-none', className)}
         {...props}
      />
   );
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-header"
         data-sidebar="header"
         className={cn('flex flex-col gap-2 p-2', className)}
         {...props}
      />
   );
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-footer"
         data-sidebar="footer"
         className={cn('flex flex-col gap-2 p-2', className)}
         {...props}
      />
   );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
   return (
      <Separator
         data-slot="sidebar-separator"
         data-sidebar="separator"
         className={cn('bg-sidebar-border mx-2 w-auto', className)}
         {...props}
      />
   );
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-content"
         data-sidebar="content"
         className={cn(
            'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
            className
         )}
         {...props}
      />
   );
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-group"
         data-sidebar="group"
         className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
         {...props}
      />
   );
}

function SidebarGroupLabel({
   className,
   asChild = false,
   ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
   const Comp = asChild ? Slot : 'div';

   return (
      <Comp
         data-slot="sidebar-group-label"
         data-sidebar="group-label"
         className={cn(
            'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
            className
         )}
         {...props}
      />
   );
}

function SidebarGroupAction({
   className,
   asChild = false,
   ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
   const Comp = asChild ? Slot : 'button';

   return (
      <Comp
         data-slot="sidebar-group-action"
         data-sidebar="group-action"
         className={cn(
            'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            // Increases the hit area of the button on mobile.
            'after:absolute after:-inset-2 md:after:hidden',
            'group-data-[collapsible=icon]:hidden',
            className
         )}
         {...props}
      />
   );
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-group-content"
         data-sidebar="group-content"
         className={cn('w-full text-sm', className)}
         {...props}
      />
   );
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
   return (
      <ul
         data-slot="sidebar-menu"
         data-sidebar="menu"
         className={cn('flex w-full min-w-0 flex-col gap-1', className)}
         {...props}
      />
   );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
   return (
      <li
         data-slot="sidebar-menu-item"
         data-sidebar="menu-item"
         className={cn('group/menu-item relative', className)}
         {...props}
      />
   );
}

const sidebarMenuButtonVariants = cva(
   'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
   {
      variants: {
         variant: {
            default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline:
               'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
         },
         size: {
            default: 'h-8 text-sm',
            sm: 'h-7 text-xs',
            lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
         },
      },
      defaultVariants: {
         variant: 'default',
         size: 'default',
      },
   }
);

function SidebarMenuButton({
   asChild = false,
   isActive = false,
   variant = 'default',
   size = 'default',
   tooltip,
   className,
   ...props
}: React.ComponentProps<'button'> & {
   asChild?: boolean;
   isActive?: boolean;
   tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
   const Comp = asChild ? Slot : 'button';
   const { isMobile, state } = useSidebar();

   const button = (
      <Comp
         data-slot="sidebar-menu-button"
         data-sidebar="menu-button"
         data-size={size}
         data-active={isActive}
         className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
         {...props}
      />
   );

   if (!tooltip) {
      return button;
   }

   if (typeof tooltip === 'string') {
      tooltip = {
         children: tooltip,
      };
   }

   return (
      <Tooltip>
         <TooltipTrigger asChild>{button}</TooltipTrigger>
         <TooltipContent
            side="right"
            align="center"
            hidden={state !== 'collapsed' || isMobile}
            {...tooltip}
         />
      </Tooltip>
   );
}

function SidebarMenuAction({
   className,
   asChild = false,
   showOnHover = false,
   ...props
}: React.ComponentProps<'div'> & {
   asChild?: boolean;
   showOnHover?: boolean;
}) {
   const Comp = asChild ? Slot : 'div';

   return (
      <Comp
         data-slot="sidebar-menu-action"
         data-sidebar="menu-action"
         suppressHydrationWarning
         role="button"
         tabIndex={0}
         className={cn(
            'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
            // Increases the hit area of the button on mobile.
            'after:absolute after:-inset-2 md:after:hidden',
            'peer-data-[size=sm]/menu-button:top-1',
            'peer-data-[size=default]/menu-button:top-1.5',
            'peer-data-[size=lg]/menu-button:top-2.5',
            'group-data-[collapsible=icon]:hidden',
            showOnHover &&
               'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
            className
         )}
         {...props}
      />
   );
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="sidebar-menu-badge"
         data-sidebar="menu-badge"
         className={cn(
            'text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
            'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
            'peer-data-[size=sm]/menu-button:top-1',
            'peer-data-[size=default]/menu-button:top-1.5',
            'peer-data-[size=lg]/menu-button:top-2.5',
            'group-data-[collapsible=icon]:hidden',
            className
         )}
         {...props}
      />
   );
}

function SidebarMenuSkeleton({
   className,
   showIcon = false,
   ...props
}: React.ComponentProps<'div'> & {
   showIcon?: boolean;
}) {
   // Random width between 50 to 90%.
   const width = React.useMemo(() => {
      return `${Math.floor(Math.random() * 40) + 50}%`;
   }, []);

   return (
      <div
         data-slot="sidebar-menu-skeleton"
         data-sidebar="menu-skeleton"
         className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
         {...props}
      >
         {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
         <Skeleton
            className="h-4 max-w-(--skeleton-width) flex-1"
            data-sidebar="menu-skeleton-text"
            style={
               {
                  '--skeleton-width': width,
               } as React.CSSProperties
            }
         />
      </div>
   );
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
   return (
      <ul
         data-slot="sidebar-menu-sub"
         data-sidebar="menu-sub"
         className={cn(
            'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
            'group-data-[collapsible=icon]:hidden',
            className
         )}
         {...props}
      />
   );
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>) {
   return (
      <li
         data-slot="sidebar-menu-sub-item"
         data-sidebar="menu-sub-item"
         className={cn('group/menu-sub-item relative', className)}
         {...props}
      />
   );
}

function SidebarMenuSubButton({
   asChild = false,
   size = 'md',
   isActive = false,
   className,
   ...props
}: React.ComponentProps<'a'> & {
   asChild?: boolean;
   size?: 'sm' | 'md';
   isActive?: boolean;
}) {
   const Comp = asChild ? Slot : 'a';

   return (
      <Comp
         data-slot="sidebar-menu-sub-button"
         data-sidebar="menu-sub-button"
         data-size={size}
         data-active={isActive}
         className={cn(
            'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
            'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            'group-data-[collapsible=icon]:hidden',
            className
         )}
         {...props}
      />
   );
}

export {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarGroup,
   SidebarGroupAction,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarInput,
   SidebarInset,
   SidebarMenu,
   SidebarMenuAction,
   SidebarMenuBadge,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarMenuSkeleton,
   SidebarMenuSub,
   SidebarMenuSubButton,
   SidebarMenuSubItem,
   SidebarProvider,
   SidebarRail,
   SidebarSeparator,
   SidebarTrigger,
   useSidebar,
};



================================================
FILE: components/ui/skeleton.tsx
================================================
import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
   return (
      <div
         data-slot="skeleton"
         className={cn('bg-primary/10 animate-pulse rounded-md', className)}
         {...props}
      />
   );
}

export { Skeleton };



================================================
FILE: components/ui/sonner.tsx
================================================
'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
   const { theme = 'system' } = useTheme();

   return (
      <Sonner
         theme={theme as ToasterProps['theme']}
         className="toaster group"
         toastOptions={{
            classNames: {
               toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
               description: 'group-[.toast]:text-muted-foreground',
               actionButton:
                  'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium',
               cancelButton:
                  'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium',
            },
         }}
         {...props}
      />
   );
};

export { Toaster };



================================================
FILE: components/ui/switch.tsx
================================================
'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
   return (
      <SwitchPrimitive.Root
         data-slot="switch"
         className={cn(
            'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-5 w-9 shrink-0 items-center rounded-full border-2 border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
            className
         )}
         {...props}
      >
         <SwitchPrimitive.Thumb
            data-slot="switch-thumb"
            className={cn(
               'bg-background pointer-events-none block size-4 rounded-full ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
            )}
         />
      </SwitchPrimitive.Root>
   );
}

export { Switch };



================================================
FILE: components/ui/table.tsx
================================================
'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

function Table({ className, ...props }: React.ComponentProps<'table'>) {
   return (
      <div data-slot="table-container" className="relative w-full overflow-x-auto">
         <table
            data-slot="table"
            className={cn('w-full caption-bottom text-sm', className)}
            {...props}
         />
      </div>
   );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
   return (
      <thead data-slot="table-header" className={cn('[&_tr]:border-b', className)} {...props} />
   );
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
   return (
      <tbody
         data-slot="table-body"
         className={cn('[&_tr:last-child]:border-0', className)}
         {...props}
      />
   );
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
   return (
      <tfoot
         data-slot="table-footer"
         className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
         {...props}
      />
   );
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
   return (
      <tr
         data-slot="table-row"
         className={cn(
            'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
            className
         )}
         {...props}
      />
   );
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
   return (
      <th
         data-slot="table-head"
         className={cn(
            'text-muted-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
            className
         )}
         {...props}
      />
   );
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
   return (
      <td
         data-slot="table-cell"
         className={cn(
            'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
            className
         )}
         {...props}
      />
   );
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
   return (
      <caption
         data-slot="table-caption"
         className={cn('text-muted-foreground mt-4 text-sm', className)}
         {...props}
      />
   );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };



================================================
FILE: components/ui/textarea.tsx
================================================
import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
   return (
      <textarea
         data-slot="textarea"
         className={cn(
            'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className
         )}
         {...props}
      />
   );
}

export { Textarea };



================================================
FILE: components/ui/tooltip.tsx
================================================
'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

function TooltipProvider({
   delayDuration = 0,
   ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
   return (
      <TooltipPrimitive.Provider
         data-slot="tooltip-provider"
         delayDuration={delayDuration}
         {...props}
      />
   );
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
   return (
      <TooltipProvider>
         <TooltipPrimitive.Root data-slot="tooltip" {...props} />
      </TooltipProvider>
   );
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
   return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
   className,
   sideOffset = 0,
   children,
   ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
   return (
      <TooltipPrimitive.Portal>
         <TooltipPrimitive.Content
            data-slot="tooltip-content"
            sideOffset={sideOffset}
            className={cn(
               'bg-background border text-muted-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance',
               className
            )}
            {...props}
         >
            {children}
         </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
   );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };



================================================
FILE: hooks/use-get-presence.tsx
================================================
'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import { PresenceStatus } from '@/lib/jazz-schema';

export function useGetPresence(userId: string): PresenceStatus {
   const params = useParams();
   const orgId = params.orgId as string;
   const [status, setStatus] = useState<PresenceStatus>('offline');

   const { me } = useAccount({
      resolve: {
         profile: true,
         root: {
            organizations: {
               $each: {
                  liveUpdates: true,
               },
            },
         },
      },
   });

   const organization = me?.root.organizations.find((org) => org.slug === orgId);

   useEffect(() => {
      if (!organization) {
         return;
      }

      const unsubscribe = organization.liveUpdates.subscribe((feedValue) => {
         let latestStatus: PresenceStatus = 'offline';

         if (feedValue.perSession) {
            latestStatus =
               Object.entries(feedValue.perSession)
                  .filter(([, sessionData]) => sessionData.value.type === 'presence')
                  .sort((a, b) => a[1].madeAt.getTime() - b[1].madeAt.getTime())
                  .pop()?.[1].value.data.status || 'offline';
         }

         if (status !== latestStatus) {
            setStatus(latestStatus);
         }
      });

      return () => {
         unsubscribe();
      };
   }, [organization, userId, status]);

   return status;
}



================================================
FILE: hooks/use-mobile.ts
================================================
import * as React from 'react';

const MOBILE_BREAKPOINT = 1024;

export function useIsMobile() {
   const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

   React.useEffect(() => {
      const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
         setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      };
      mql.addEventListener('change', onChange);
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      return () => mql.removeEventListener('change', onChange);
   }, []);

   return !!isMobile;
}



================================================
FILE: hooks/use-set-presence.tsx
================================================
'use client';

import { useEffect, useRef } from 'react';
import { useAccount } from 'jazz-react';
import { useParams } from 'next/navigation';
import { PresenceStatus } from '@/lib/jazz-schema';

export function useSetPresence(): void {
   const params = useParams();
   const orgId = params?.orgId as string;
   const currentStatusRef = useRef<PresenceStatus>('offline');
   const listenersMountedRef = useRef(false);

   const { me } = useAccount({
      resolve: {
         profile: true,
         root: {
            organizations: {
               $each: {
                  liveUpdates: true,
               },
            },
         },
      },
   });

   const organizationId = me?.root?.organizations.find((org) => org?.slug === orgId)?.id;

   const getOrganization = () => me?.root?.organizations.find((org) => org?.slug === orgId);

   const updatePresence = (newStatus: PresenceStatus) => {
      const organization = getOrganization();
      if (!organization?.liveUpdates) return;

      if (currentStatusRef.current === newStatus) return;

      organization.liveUpdates.push({
         type: 'presence',
         data: { status: newStatus },
      });

      currentStatusRef.current = newStatus;
   };

   useEffect(() => {
      const organization = getOrganization();
      if (!organization?.liveUpdates) return;

      updatePresence('online');

      if (!listenersMountedRef.current) {
         const handleOffline = () => updatePresence('offline');

         const handleVisibilityChange = () => {
            updatePresence(document.visibilityState === 'visible' ? 'online' : 'away');
         };

         window.addEventListener('beforeunload', handleOffline);
         document.addEventListener('visibilitychange', handleVisibilityChange);

         listenersMountedRef.current = true;

         return () => {
            if (listenersMountedRef.current) {
               updatePresence('offline');
               window.removeEventListener('beforeunload', handleOffline);
               document.removeEventListener('visibilitychange', handleVisibilityChange);
               listenersMountedRef.current = false;
            }
         };
      }
   }, [organizationId]);
}



================================================
FILE: lib/jazz-schema.mermaid
================================================
classDiagram
    %% Main account and root structure
    JazzAccount --> UserProfile : contains
    JazzAccount --> AccountRoot : contains
    AccountRoot --> OrganizationList : contains
    OrganizationList --> Organization : contains
    
    %% Organization structure
    Organization --> TeamList : contains
    Organization --> LabelList : contains
    Organization --> LiveUpdates : contains
    Organization --> Issue : referenced by
    
    %% Teams and issues
    TeamList --> Team : contains
    Team --> IssueList : contains
    
    %% Issues and related items
    IssueList --> Issue : contains
    Issue --> Issue : parentIssue
    Issue --> IssueList : childIssues
    Issue --> Team : belongs to
    Issue --> UserProfile : assignee
    Issue --> LabelList : has
    Issue --> CommentList : has
    Issue --> AttachmentList : has
    Issue --> ReactionsList : has
    
    %% Comments
    CommentList --> Comment : contains
    Comment --> Issue : parentIssue
    Comment --> Comment : parentComment
    Comment --> ReactionsList : has
    Comment --> AttachmentList : has
    
    %% Supporting entities
    AttachmentList --> Attachment : contains
    LabelList --> Label : contains
    ReactionsList --> ReactionType : contains
    
    %% Class properties
    class JazzAccount {
        profile: UserProfile
        root: AccountRoot
        migrate()
    }
    
    class AccountRoot {
        organizations: OrganizationList
        version: number
    }
    
    class Organization {
        name: string
        slug: string
        teams: TeamList
        labels: LabelList
        liveUpdates: LiveUpdates
        deleted: boolean
        getTeamsForMember()
    }
    
    class Team {
        name: string
        slug: string
        icon: string
        color: string
        issues: IssueList
        deleted: boolean
    }
    
    class Issue {
        identifier: string
        title: string
        description: string
        assignee: UserProfile
        estimate: number
        dueDate: Date
        statusType: StatusType
        priority: PriorityType
        team: Team
        parentIssue: Issue
        childIssues: IssueList
        attachments: AttachmentList
        labels: LabelList
        comments: CommentList
        reactions: ReactionsList
        deleted: boolean
        parentOrganization: Organization
        updateIssueStatus()
        updateIssuePriority()
        updateIssueAssignee()
        addIssueLabel()
        removeIssueLabel()
    }
    
    class UserProfile {
        name: string
        email: string
        avatarUrl: string
    }
    
    class Comment {
        content: string
        parentIssue: Issue
        parentComment: Comment
        reactions: ReactionsList
        attachments: AttachmentList
        deleted: boolean
    }
    
    class Label {
        name: string
        color: string
        deleted: boolean
    }
    
    class Attachment {
        name: string
        file: FileStream
        image: ImageDefinition
        type: string
        deleted: boolean
    }
    
    class IssueList {
        filterByStatus()
        filterByPriority()
        filterByAssignee()
        filterByLabel()
        searchIssues()
        filterIssues()
        groupIssuesByStatus()
    }
    
    class ReactionsList {
    }
    
    class ReactionType {
        thumb-up|thumb-down|laugh|heart|sad|angry|surprised|thinking|wink|clap|fire|fireworks|party
    }
    
    class StatusType {
        backlog|to-do|in-progress|technical-review|completed|paused|archived
    }
    
    class PriorityType {
        no-priority|low|medium|high|urgent
    }


================================================
FILE: lib/jazz-schema.ts
================================================
import {
   Account,
   CoFeed,
   CoList,
   CoMap,
   FileStream,
   Group,
   ImageDefinition,
   Profile,
   co,
} from 'jazz-tools';
import { generateRandomCode, generateSlug } from './utils';

export const ReactionType = co.literal(
   'thumb-up',
   'thumb-down',
   'laugh',
   'heart',
   'sad',
   'angry',
   'surprised',
   'thinking',
   'wink',
   'clap',
   'fire',
   'fireworks',
   'party'
);

export class ReactionsList extends CoList.Of(ReactionType) {}

// Main entities
export class Label extends CoMap {
   name = co.string;
   color = co.string;
   deleted = co.optional.boolean;
}

export class LabelList extends CoList.Of(co.ref(Label)) {}

export class Attachment extends CoMap {
   name = co.string;
   file = co.optional.ref(FileStream);
   image = co.optional.ref(ImageDefinition);
   type = co.literal('image', 'video', 'audio', 'document', 'other');
   deleted = co.optional.boolean;
}

export class AttachmentList extends CoList.Of(co.ref(Attachment)) {}

export class Comment extends CoMap {
   content = co.string;
   parentIssue = co.ref(Issue);
   parentComment = co.optional.ref(Comment);
   reactions = co.ref(ReactionsList);
   attachments = co.ref(AttachmentList);
   deleted = co.optional.boolean;
}

export class CommentList extends CoList.Of(co.ref(Comment)) {}

export class PriorityList extends CoList.Of(
   co.literal('no-priority', 'low', 'medium', 'high', 'urgent')
) {}

export class UserProfile extends Profile {
   name = co.string;
   email = co.string;
   avatarUrl = co.optional.string;

   static validate(data: { name?: string; email?: string; other?: Record<string, unknown> }) {
      const errors: string[] = [];
      if (!data.name?.trim()) {
         errors.push('Please enter a name');
      }
      if (!data.email?.trim()) {
         errors.push('Please enter an email');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
         errors.push('Please enter a valid email address');
      }
      return { errors };
   }
}

export const StatusType = co.literal(
   'backlog',
   'to-do',
   'in-progress',
   'technical-review',
   'completed',
   'paused',
   'archived'
);

export const PriorityType = co.literal('no-priority', 'low', 'medium', 'high', 'urgent');

export const Assignee = co.optional.ref(UserProfile);

export class Issue extends CoMap {
   identifier = co.string; // e.g., "JAZZ-101"
   title = co.string;
   description = co.string;
   assignee = Assignee;
   estimate = co.optional.number;
   dueDate = co.optional.Date;
   // status = co.optional.ref(Status);
   statusType = StatusType;
   priority = PriorityType;
   team = co.ref(Team);

   parentIssue = co.optional.ref(Issue);
   childIssues = co.optional.ref(IssueList);

   attachments = co.optional.ref(AttachmentList);
   labels = co.optional.ref(LabelList);
   comments = co.optional.ref(CommentList);
   reactions = co.optional.ref(ReactionsList);
   deleted = co.optional.boolean;

   parentOrganization = co.optional.ref(Organization);

   updateIssueStatus(newStatus: typeof StatusType) {
      this.statusType = newStatus;
   }

   updateIssuePriority(newPriority: typeof PriorityType) {
      this.priority = newPriority;
   }

   updateIssueAssignee(newAssignee: typeof Assignee) {
      this.assignee = newAssignee;
   }

   addIssueLabel(label: Label) {
      this.labels?.push(label);
   }

   removeIssueLabel(label: Label) {
      if (!this.labels) return;
      const filtered = this.labels.filter((l) => l !== label);
      const newLabels = LabelList.create([], this._owner);
      filtered.forEach((l) => {
         if (l) newLabels.push(l);
      });
      this.labels = newLabels;
   }
}

export function groupIssuesByStatus(issues: Issue[] | IssueList): Record<string, Issue[]> {
   return issues.reduce<Record<string, Issue[]>>((acc, issue) => {
      if (!issue) return acc;
      const statusType = issue.statusType;

      if (!acc[statusType]) {
         acc[statusType] = [];
      }

      acc[statusType].push(issue);

      return acc;
   }, {});
}

export function searchIssues(issues: Issue[] | IssueList, query: string) {
   return issues.filter(
      (issue) =>
         issue?.title?.toLowerCase().includes(query.toLowerCase()) ||
         issue?.description?.toLowerCase().includes(query.toLowerCase())
   );
}

export interface IssueFilters {
   status?: typeof StatusType;
   priority?: typeof PriorityType;
   assignee?: typeof Assignee;
   labels?: Label[];
}

export function filterIssues(issues: Issue[] | IssueList, filters: IssueFilters) {
   return issues.filter((issue) => {
      if (!issue) return false;

      // Filter by status if provided
      if (filters.status && issue.statusType !== filters.status) return false;

      // Filter by priority if provided
      if (filters.priority && issue.priority !== filters.priority) return false;

      // Filter by assignee if provided
      if (filters.assignee && issue.assignee !== filters.assignee) return false;

      // Filter by labels if provided
      if (filters.labels && filters.labels.length > 0) {
         if (!issue.labels) return false;

         // Check if issue has all the specified labels
         return filters.labels.every((label) => issue.labels?.includes(label));
      }

      return true;
   });
}

export class IssueList extends CoList.Of(co.ref(Issue)) {
   filterByStatus(status: typeof StatusType) {
      return this.filter((issue) => issue?.statusType === status);
   }

   filterByPriority(priority: typeof PriorityType) {
      return this.filter((issue) => issue?.priority === priority);
   }

   filterByAssignee(assignee: typeof Assignee) {
      return this.filter((issue) => issue?.assignee === assignee);
   }

   filterByLabel(label: Label) {
      return this.filter((issue) => issue?.labels?.includes(label));
   }

   searchIssues(query: string) {
      return searchIssues(this, query);
   }

   filterIssues(filters: IssueFilters) {
      return filterIssues(this, filters);
   }

   groupIssuesByStatus(): Record<string, Issue[]> {
      return groupIssuesByStatus(this);
   }
}

export class Team extends CoMap {
   name = co.string;
   slug = co.string;
   icon = co.string;
   color = co.string;

   issues = co.ref(IssueList);
   deleted = co.optional.boolean;
}

export class TeamList extends CoList.Of(co.ref(Team)) {}

export type PresenceStatus = 'online' | 'offline' | 'away';

interface PresenceUpdate {
   type: 'presence';
   data: {
      status: PresenceStatus;
   };
}

type LiveUpdate = PresenceUpdate;

export const LiveUpdates = CoFeed.Of(co.json<LiveUpdate>());

export class Organization extends CoMap {
   name = co.string;
   slug = co.string;
   teams = co.ref(TeamList);
   labels = co.ref(LabelList);
   liveUpdates = co.ref(LiveUpdates);
   deleted = co.optional.boolean;

   getTeamsForMember(userProfile: UserProfile) {
      const allTeams: Team[] = [];

      if (this.teams) {
         this.teams.forEach((team) => {
            if (
               team &&
               !team.deleted &&
               team._owner
                  .castAs(Group)
                  .members?.some((member) => member.account.profile?.id === userProfile.id)
            ) {
               allTeams.push(team);
            }
         });
      }

      return allTeams;
   }
}

export class OrganizationList extends CoList.Of(co.ref(Organization)) {}

export class AccountRoot extends CoMap {
   organizations = co.ref(OrganizationList);
   version = co.optional.number;
}

export class JazzAccount extends Account {
   profile = co.ref(UserProfile);
   root = co.ref(AccountRoot);

   async migrate(creationProps?: { name: string; email: string; other?: Record<string, unknown> }) {
      if (!this._refs.root && creationProps) {
         await this.initialMigration(this, creationProps);
         return;
      }

      // uncomment this to add migrations
      // const currentVersion = this.root?.version || 0;
      // if (currentVersion < 1) {
      //   await this.migrationV1();
      // }
   }

   private async initialMigration(
      me: JazzAccount,
      creationProps: {
         name: string;
         email: string;
         other?: Record<string, unknown>;
      }
   ) {
      const { name, email } = creationProps;
      // const profileErrors = UserProfile.validate({ name, email, ...other });
      // if (profileErrors.errors.length > 0) {
      //    throw new Error(`Invalid profile data: ${profileErrors.errors.join(', ')}`);
      // }

      const publicProfileGroup = Group.create(me);
      publicProfileGroup.addMember('everyone', 'reader');

      this.profile = UserProfile.create({ name, email }, publicProfileGroup);

      const randomCode = generateRandomCode();

      const defaultOrganization = createNewOrganization(me, {
         teamName: 'Dev',
         orgName: `Jazz-${randomCode}`,
         orgSlug: `jazz-${randomCode}`,
      });

      // Initialize root structure with version
      this.root = AccountRoot.create(
         {
            organizations: OrganizationList.create([defaultOrganization], Group.create(me)),
            version: 0, // Set initial version
         },
         Group.create(me)
      );
   }
}

export function createNewTeam(
   me: JazzAccount,
   props: {
      teamName: string;
      organizationGroup: Group;
      icon?: string;
      color?: string;
   }
) {
   const privateTeamGroup = Group.create(me);
   privateTeamGroup.extend(props.organizationGroup);

   // Create default team first without issues
   const newTeam = Team.create(
      {
         name: props.teamName,
         slug: generateSlug(props.teamName),
         icon: props.icon || '👥',
         color: props.color || '#0ea5e9',
         issues: IssueList.create([], privateTeamGroup),
      },
      privateTeamGroup
   );

   // Create issues with team reference
   const defaultIssue = Issue.create(
      {
         identifier: 'JAZZ-1',
         title: 'My Issue',
         description: 'My Issue Description',
         priority: 'medium',
         statusType: 'in-progress',
         assignee: me.profile,
         team: newTeam,
      },
      privateTeamGroup
   );

   const defaultComment = Comment.create(
      {
         content: 'This is a default comment',
         parentIssue: defaultIssue,
         reactions: ReactionsList.create([], privateTeamGroup),
         attachments: AttachmentList.create([], privateTeamGroup),
      },
      privateTeamGroup
   );

   defaultIssue.comments = CommentList.create([defaultComment], privateTeamGroup);

   const defaultSubissue = Issue.create(
      {
         identifier: 'JAZZ-1-1',
         title: 'My Subissue',
         description: 'My Subissue Description',
         priority: 'low',
         statusType: 'to-do',
         assignee: me.profile,
         parentIssue: defaultIssue,
         team: newTeam,
      },
      privateTeamGroup
   );

   defaultIssue.childIssues = IssueList.create([defaultSubissue], privateTeamGroup);

   // Add issues to the team
   newTeam.issues = IssueList.create([defaultIssue, defaultSubissue], {
      owner: privateTeamGroup,
   });

   return {
      team: newTeam,
      defaultIssue,
      defaultSubissue,
   };
}

export function createNewOrganization(
   me: JazzAccount,
   props: {
      teamName: string;
      orgName: string;
      orgSlug: string;
   }
) {
   const privateOrgGroup = Group.create(me);

   const {
      team: defaultTeam,
      defaultIssue,
      defaultSubissue,
   } = createNewTeam(me, {
      teamName: props.teamName,
      organizationGroup: privateOrgGroup,
   });

   const privateTeamGroup = defaultTeam._owner.castAs(Group);

   const defaultLabel_bug = Label.create(
      {
         name: 'Bug',
         color: '#f97316',
      },
      privateTeamGroup
   );

   const defaultLabel_feature = Label.create(
      {
         name: 'Feature',
         color: '#0ea5e9',
      },
      privateTeamGroup
   );

   const defaultLabel_documentation = Label.create(
      {
         name: 'Documentation',
         color: '#8b5cf6',
      },
      privateTeamGroup
   );

   const defaultLabel_question = Label.create(
      {
         name: 'Question',
         color: '#ec4899',
      },
      privateTeamGroup
   );

   const newOrganization = Organization.create(
      {
         name: props.orgName,
         slug: props.orgSlug,
         teams: TeamList.create([defaultTeam], privateTeamGroup),
         labels: LabelList.create(
            [
               defaultLabel_bug,
               defaultLabel_feature,
               defaultLabel_documentation,
               defaultLabel_question,
            ],
            {
               owner: privateTeamGroup,
            }
         ),
         liveUpdates: LiveUpdates.create([], privateTeamGroup),
      },
      privateOrgGroup
   );

   // Set organization reference on issues
   defaultIssue.parentOrganization = newOrganization;
   defaultSubissue.parentOrganization = newOrganization;

   return newOrganization;
}



================================================
FILE: lib/priorities.tsx
================================================
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
   className?: string;
}

const NoPriorityIcon = ({ className, ...props }: IconProps) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-label="No Priority"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <rect x="1.5" y="7.25" width="3" height="1.5" rx="0.5" opacity="0.9"></rect>
      <rect x="6.5" y="7.25" width="3" height="1.5" rx="0.5" opacity="0.9"></rect>
      <rect x="11.5" y="7.25" width="3" height="1.5" rx="0.5" opacity="0.9"></rect>
   </svg>
);

const UrgentPriorityIcon = ({ className, ...props }: IconProps) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-label="Urgent Priority"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4L9 4L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"></path>
   </svg>
);

const HighPriorityIcon = ({ className, ...props }: IconProps) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-label="High Priority"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
      <rect x="11.5" y="2" width="3" height="12" rx="1"></rect>
   </svg>
);

const MediumPriorityIcon = ({ className, ...props }: IconProps) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-label="Medium Priority"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
      <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
   </svg>
);

const LowPriorityIcon = ({ className, ...props }: IconProps) => (
   <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-label="Low Priority"
      role="img"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
      <rect x="6.5" y="5" width="3" height="9" rx="1" fillOpacity="0.4"></rect>
      <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
   </svg>
);

interface Priority {
   type: string;
   name: string;
   icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const priorities: Priority[] = [
   { type: 'no-priority', name: 'No priority', icon: NoPriorityIcon },
   { type: 'high', name: 'High', icon: HighPriorityIcon },
   { type: 'medium', name: 'Medium', icon: MediumPriorityIcon },
   { type: 'low', name: 'Low', icon: LowPriorityIcon },
   { type: 'urgent', name: 'Urgent', icon: UrgentPriorityIcon },
];



================================================
FILE: lib/status.tsx
================================================
import React from 'react';

export interface Status {
   type: string;
   name: string;
   color: string;
   icon: React.FC;
}

export const BacklogIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#bec2c8"
            strokeWidth="2"
            strokeDasharray="1.4 1.74"
            strokeDashoffset="0.65"
         ></circle>
         <circle
            className="progress"
            cx="7"
            cy="7"
            r="2"
            fill="none"
            stroke="#bec2c8"
            strokeWidth="4"
            strokeDasharray="0 100"
            strokeDashoffset="0"
            transform="rotate(-90 7 7)"
         ></circle>
      </svg>
   );
};

export const PausedIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeDasharray="3.14 0"
            strokeDashoffset="-0.7"
         ></circle>
         <circle
            className="progress"
            cx="7"
            cy="7"
            r="2"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="4"
            strokeDasharray="6.2517693806436885 100"
            strokeDashoffset="0"
            transform="rotate(-90 7 7)"
         ></circle>
      </svg>
   );
};

export const ToDoIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#e2e2e2"
            strokeWidth="2"
            strokeDasharray="3.14 0"
            strokeDashoffset="-0.7"
         ></circle>
         <circle
            className="progress"
            cx="7"
            cy="7"
            r="2"
            fill="none"
            stroke="#e2e2e2"
            strokeWidth="4"
            strokeDasharray="0 100"
            strokeDashoffset="0"
            transform="rotate(-90 7 7)"
         ></circle>
      </svg>
   );
};

export const InProgressIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#facc15"
            strokeWidth="2"
            strokeDasharray="3.14 0"
            strokeDashoffset="-0.7"
         ></circle>
         <circle
            className="progress"
            cx="7"
            cy="7"
            r="2"
            fill="none"
            stroke="#facc15"
            strokeWidth="4"
            strokeDasharray="2.0839231268812295 100"
            strokeDashoffset="0"
            transform="rotate(-90 7 7)"
         ></circle>
      </svg>
   );
};

export const TechnicalReviewIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="3.14 0"
            strokeDashoffset="-0.7"
         ></circle>
         <circle
            className="progress"
            cx="7"
            cy="7"
            r="2"
            fill="none"
            stroke="#22c55e"
            strokeWidth="4"
            strokeDasharray="4.167846253762459 100"
            strokeDashoffset="0"
            transform="rotate(-90 7 7)"
         ></circle>
      </svg>
   );
};

export const CompletedIcon: React.FC = () => {
   return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
         <circle
            cx="7"
            cy="7"
            r="6"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            strokeDasharray="3.14 0"
            strokeDashoffset="-0.7"
         ></circle>
         <path
            d="M4.5 7L6.5 9L9.5 5"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export const status: Status[] = [
   { type: 'in-progress', name: 'In Progress', color: '#facc15', icon: InProgressIcon },
   {
      type: 'technical-review',
      name: 'Technical Review',
      color: '#22c55e',
      icon: TechnicalReviewIcon,
   },
   { type: 'completed', name: 'Completed', color: '#8b5cf6', icon: CompletedIcon },
   { type: 'paused', name: 'Paused', color: '#0ea5e9', icon: PausedIcon },
   { type: 'to-do', name: 'Todo', color: '#f97316', icon: ToDoIcon },
   { type: 'backlog', name: 'Backlog', color: '#ec4899', icon: BacklogIcon },
];



================================================
FILE: lib/utils.ts
================================================
import { clsx, type ClassValue } from 'clsx';
import { formatDistance } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export function getTwoLettersFromString(org: string) {
   if (org.split(' ').length === 1) {
      return org.slice(0, 2).toUpperCase();
   }
   return org
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
}

export function getThreeLettersFromString(org: string) {
   // if the org has one word, get the first three letters
   if (org.split(' ').length === 1) {
      return org.slice(0, 3).toUpperCase();
   }

   //if the org has two or more words, get the first three letters of each word
   return org
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
}

export function generateSlug(name: string): string {
   return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

export function getTimeAgo(date: Date): string {
   return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

/**
 * Get initials from a name
 * @param name The full name
 * @returns Initials (first letter of first and last name)
 */
export function getInitials(name: string): string {
   if (!name) return '';

   const parts = name.split(' ');
   if (parts.length === 1) return parts[0].charAt(0).toUpperCase();

   return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Generates a string of 4 random alphanumeric uppercase characters
 * @returns A string of 4 random characters from [0-9, A-Z]
 */
export function generateRandomCode(): string {
   const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let result = '';

   for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
   }

   return result;
}



================================================
FILE: store/create-issue-store.ts
================================================
import { Status } from '@/lib/status';
import { create } from 'zustand';

interface CreateIssueState {
   isOpen: boolean;
   defaultStatus: Status | null;

   // Actions
   openModal: (status?: Status) => void;
   closeModal: () => void;
   setDefaultStatus: (status: Status | null) => void;
}

export const useCreateIssueStore = create<CreateIssueState>((set) => ({
   // Initial state
   isOpen: false,
   defaultStatus: null,

   // Actions
   openModal: (status) => set({ isOpen: true, defaultStatus: status || null }),
   closeModal: () => set({ isOpen: false }),
   setDefaultStatus: (status) => set({ defaultStatus: status }),
}));



================================================
FILE: store/invite-member-store.ts
================================================
import { create } from 'zustand';

type InviteContext = 'organization' | 'team';

interface InviteMemberState {
   isOpen: boolean;
   context: InviteContext;
   teamId?: string;
   openModal: (context: InviteContext, teamId?: string) => void;
   closeModal: () => void;
}

export const useInviteMemberStore = create<InviteMemberState>((set) => ({
   isOpen: false,
   context: 'organization',
   teamId: undefined,
   openModal: (context, teamId) => set({ isOpen: true, context, teamId }),
   closeModal: () => set({ isOpen: false }),
}));



================================================
FILE: store/search-store.ts
================================================
import { create } from 'zustand';
import { StatusType, PriorityType, Assignee, Label, IssueFilters } from '@/lib/jazz-schema';

interface SearchState {
   isSearchOpen: boolean;
   searchQuery: string;
   isFilterOpen: boolean;
   filters: IssueFilters;

   openSearch: () => void;
   closeSearch: () => void;
   toggleSearch: () => void;
   setSearchQuery: (query: string) => void;
   resetSearch: () => void;

   openFilter: () => void;
   closeFilter: () => void;
   toggleFilter: () => void;
   setStatusFilter: (status: typeof StatusType | undefined) => void;
   setPriorityFilter: (priority: typeof PriorityType | undefined) => void;
   setAssigneeFilter: (assignee: typeof Assignee | undefined) => void;
   setLabelsFilter: (labels: Label[] | undefined) => void;
   resetFilters: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
   isSearchOpen: false,
   searchQuery: '',
   isFilterOpen: false,
   filters: {},

   openSearch: () => set({ isSearchOpen: true }),
   closeSearch: () => set({ isSearchOpen: false }),
   toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),
   setSearchQuery: (query: string) => set({ searchQuery: query }),
   resetSearch: () => set({ isSearchOpen: false, searchQuery: '' }),

   openFilter: () => set({ isFilterOpen: true }),
   closeFilter: () => set({ isFilterOpen: false }),
   toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),
   setStatusFilter: (status) =>
      set((state) => ({
         filters: { ...state.filters, status },
      })),
   setPriorityFilter: (priority) =>
      set((state) => ({
         filters: { ...state.filters, priority },
      })),
   setAssigneeFilter: (assignee) =>
      set((state) => ({
         filters: { ...state.filters, assignee },
      })),
   setLabelsFilter: (labels) =>
      set((state) => ({
         filters: { ...state.filters, labels },
      })),
   resetFilters: () => set({ filters: {} }),
}));



================================================
FILE: store/view-store.ts
================================================
import { create } from 'zustand';

export type ViewType = 'list' | 'grid';

interface ViewState {
   viewType: ViewType;
   setViewType: (viewType: ViewType) => void;
}

export const useViewStore = create<ViewState>((set) => ({
   viewType: 'list',
   setViewType: (viewType: ViewType) => set({ viewType }),
}));



================================================
FILE: .cursor/rules/optimal-data-loading.mdc
================================================
---
description: 
globs: 
alwaysApply: false
---


# Jazz 0.12.0 Deeply Resolved Data Pattern

## Core Loading Pattern Rules

1. **Page-Level Loading (useAccount only)**:
   - Use `useAccount` exactly ONCE in page components
   - Load data shallowly at the page level with `true` instead of deep structures
   - Never use `useCoState` in page components
   - Pass shallowly loaded data down to child components

2. **Component-Level Loading (useCoState)**:
   - Use `useCoState` in non-page components to deeply load specific data
   - Always handle loading states properly (undefined vs null)
   - Perform deep loading close to where the data is actually needed

3. **Resolve API Syntax**:
   - Shallow loading: `property: true`
   - Deep collection loading: `collection: { $each: true }`
   - Nested property loading: `property: { nestedProperty: true }`

## Loading State Handling

- `undefined` → Data is still loading
- `null` → Data not found or access denied
- Handle these states before attempting to use the data

```tsx
if (data === undefined) return <div>Loading...</div>;
if (data === null) return <div>Not found or access denied</div>;
```

## Performance Optimization Techniques

1. **Conditional Loading**:
   - Only deeply load data for specific items that are needed
   - Use conditional loading patterns to avoid unnecessary data fetching

2. **Data Processing**:
   - Use `useMemo` to avoid recalculating filtered/processed data
   - Ensure React Hook rules are followed (no conditional hook calls)

## Implementation Flow

1. Page component shallowly loads and identifies needed data
2. Child components receive shallow references
3. Child components deeply load specific data they need
4. Components handle loading states appropriately
5. Once loaded, components can safely access and work with deeply loaded data

This approach optimizes for:
- Performance (only loading what's needed when it's needed)
- Type safety (using the new resolve API)
- Error handling (proper loading state management)
- Component isolation (each component handles its own data needs)
