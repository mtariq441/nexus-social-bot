# Postify - Frontend React Application

## Overview

Postify is a frontend-only social media management platform UI built with React, TypeScript, and Tailwind CSS. The application provides a modern, responsive interface for social media management features including scheduling posts, managing a unified inbox, tracking analytics, and viewing integrations.

**Current Status:** Frontend-only React + Tailwind CSS application (October 24, 2025).
**Note:** This is a UI-only application with no backend. Authentication is mock-only and non-persistent.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Structure

```
workspace/
├── client/              # Frontend React application
│   ├── index.html       # HTML entry point
│   └── src/
│       ├── components/  # Reusable React components
│       ├── pages/       # Page components for routing
│       ├── lib/         # Utility functions and queryClient
│       └── hooks/       # Custom React hooks
├── public/              # Static assets
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)
- Vite configured with root set to `client/` directory
- Production build outputs to `dist/` directory

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library built on top of Radix UI
- Tailwind CSS for utility-first styling with custom design system
- Custom theme using CSS variables for consistent colors and spacing (primary: HSL 221 83% 53%, accent: HSL 262 83% 58%)

**State Management**
- TanStack Query (React Query v5) configured for client-side state management
- React hooks for local component state
- localStorage for client-side data persistence

**Key Pages & Features**
- Landing page with marketing sections (Hero, Features, Pricing, Testimonials)
- Mock authentication flow (signup/login) with client-side redirect
- Dashboard with stats cards showing scheduled posts, pending messages, followers, and engagement
- Post Composer for creating and scheduling social media content
- Unified Inbox for managing messages across all platforms
- Analytics dashboard with engagement metrics and performance tracking
- Integrations page for connecting social media accounts (9 platforms supported)
- Settings panel for profile, notifications, billing, and team management

**Supported Social Media Platforms** (9 total):
1. Facebook - Pages and groups management
2. Instagram - Photos, stories, and direct messages
3. Twitter/X - Tweets, threads, and engagement
4. LinkedIn - Professional content publishing
5. TikTok - Video content scheduling
6. YouTube - Video upload and management
7. Snapchat - Stories and audience engagement
8. Threads - Community engagement on Instagram's text platform
9. Google My Business - Business listings and customer reviews

### External Dependencies

**UI Component Libraries**
- @radix-ui/* - Complete suite of accessible UI primitives
- cmdk - Command palette component
- embla-carousel-react - Touch-friendly carousel
- lucide-react - Icon library
- class-variance-authority - Component variant utility
- clsx & tailwind-merge - CSS class utilities

**Form & Validation**
- react-hook-form - Form state management
- @hookform/resolvers - Zod integration
- zod - Schema validation library

**Data Fetching & State**
- @tanstack/react-query - Client state management

**Styling & CSS**
- tailwindcss - Utility-first CSS framework
- autoprefixer - PostCSS plugin
- postcss - CSS transformation tool

**Routing**
- wouter - Lightweight routing library (~1.2KB)

**Date Handling**
- date-fns - Modern date utility library

**TypeScript & Linting**
- typescript & typescript-eslint - Type checking and linting
- @types/* - Type definitions
- eslint - JavaScript/TypeScript linter with React-specific rules

## Development Scripts

- `npm run dev` - Starts the Vite development server on port 5000
- `npm run build` - Builds the production bundle to `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Runs ESLint on the codebase

## Deployment

This application is configured for static hosting on Replit's autoscale deployment:
- Build command: `npm run build`
- Output directory: `dist/`
- Deployment target: autoscale (suitable for static frontend apps)

## Development History

**October 28, 2025:**
- Expanded social media platform support from 6 to 9 platforms
- Added Snapchat integration with SiSnapchat icon from react-icons/si
- Added Threads integration with SiThreads icon from react-icons/si
- Added Google My Business integration with MdBusiness icon from react-icons/md
- Added complete English and French translations for all new platforms
- Updated TypeScript interfaces to support all 9 platform types

**October 27, 2025:**
- Built as a pure custom React + TypeScript application on Replit
- Frontend-only architecture with Vite development server
- Mock authentication for demonstration purposes
- Client-side state management with TanStack Query
- Custom UI components built with shadcn/ui and Radix UI

## Important Notes

1. **Authentication**: The authentication is mock-only and non-persistent. Login/signup forms redirect to the dashboard without actual authentication.
2. **Data Persistence**: All data is client-side only. No backend API or database is connected.
3. **Static Build**: The app builds to static HTML/CSS/JS files suitable for any static hosting provider.
4. **Development Server**: Runs on port 5000 with hot module replacement via Vite.
