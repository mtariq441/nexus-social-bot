# SocialSync - AI-Powered Social Media Management Platform

## Overview

SocialSync is a comprehensive social media management platform that enables users to manage multiple social media accounts from a unified dashboard. The application provides features for scheduling posts, managing a unified inbox across platforms, tracking analytics, and integrating with various social media platforms. Built with React, TypeScript, and Express, it offers a modern, responsive interface with AI-powered features for content creation and automation.

**Migration Status:** Successfully migrated from Lovable to Replit fullstack environment on October 24, 2025.

## User Preferences

Preferred communication style: Simple, everyday language.

## Project Structure

```
workspace/
├── client/              # Frontend React application
│   └── src/
│       ├── components/  # Reusable React components
│       ├── pages/       # Page components for routing
│       ├── lib/         # Utility functions and queryClient
│       └── hooks/       # Custom React hooks
├── server/              # Backend Express server
│   ├── index.ts         # Main server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Storage interface and implementation
│   ├── vite.ts          # Vite development middleware
│   └── db.ts            # Database connection (Neon PostgreSQL)
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema with Drizzle ORM
└── index.html           # HTML template for Vite
```

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)
- Vite configured with root set to `client/` directory

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library built on top of Radix UI
- Tailwind CSS for utility-first styling with custom design system
- Custom theme using CSS variables for consistent colors and spacing (primary: HSL 221 83% 53%, accent: HSL 262 83% 58%)

**State Management**
- TanStack Query (React Query v5) for server state management and caching
- React hooks for local component state
- Custom query client with automatic session handling via headers
- Session ID stored in localStorage and sent via `x-session-id` header

**Key Pages & Features**
- Landing page with marketing sections (Hero, Features, Pricing, Testimonials)
- Authentication flow (signup/login) with session-based auth
- Dashboard with stats cards showing scheduled posts, pending messages, followers, and engagement
- Post Composer for creating and scheduling social media content
- Unified Inbox for managing messages across all platforms
- Analytics dashboard with engagement metrics and performance tracking
- Integrations page for connecting social media accounts
- Settings panel for profile, notifications, billing, and team management

### Backend Architecture

**Server Framework**
- Express.js 5.x running on Node.js 20 with TypeScript
- Custom HTTP server using Node's `createServer` for WebSocket support
- In development mode, integrates Vite middleware for HMR
- TSX for running TypeScript files directly in development

**Session Management**
- Custom in-memory session store using Map
- Session ID passed via `x-session-id` header
- Session data attached to request object and persisted across requests
- Middleware intercepts responses to set session header

**API Structure**
- RESTful API endpoints under `/api` prefix
- Authentication endpoints:
  - `POST /api/auth/signup` - Create new user account
  - `POST /api/auth/login` - Authenticate existing user
  - `POST /api/auth/logout` - Clear user session
  - `GET /api/auth/session` - Check current session status
- Error handling middleware for consistent error responses
- Request body parsing with express.json() and express.urlencoded()

**Storage Layer**
- Abstract IStorage interface for data persistence operations
- In-memory storage implementation (MemStorage) for development
- Designed to swap with database implementation using Drizzle ORM
- User operations: createUser, getUserByEmail, getUserById

### Data Storage Solutions

**Database Schema (Drizzle ORM)**
- PostgreSQL-compatible schema defined using Drizzle ORM in `shared/schema.ts`
- Users table with id (serial primary key), email (unique), password, and createdAt timestamp
- Neon Database serverless driver configured and ready for production
- Zod schema validation integrated via drizzle-zod for type-safe inserts
- Export types: InsertUser, User for frontend/backend type consistency

**Current Implementation**
- Development uses in-memory storage (no database persistence)
- Production-ready database connection configured in `server/db.ts`
- To enable database: Update storage.ts to use Drizzle queries instead of MemStorage
- Connection pooling via @neondatabase/serverless Pool configured

### Authentication & Authorization

**Authentication Flow**
- Email/password authentication (basic implementation)
- ⚠️ Passwords currently stored in plain text (requires bcrypt hashing for production)
- Session-based authentication with custom session middleware
- Client stores session ID in localStorage and sends via request headers

**Session Lifecycle**
- Sessions created on successful login/signup
- Session ID returned in response header (`x-session-id`) and stored client-side
- Subsequent requests include session ID for authentication
- Protected routes check session validity via `/api/auth/session` endpoint
- DashboardLayout component handles auth guard for protected pages

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
- @tanstack/react-query - Server state management

**Database & ORM**
- drizzle-orm - TypeScript ORM for SQL databases
- drizzle-zod - Zod schema generation
- @neondatabase/serverless - Neon PostgreSQL serverless driver
- ws - WebSocket library for Neon connection

**Development Tools**
- vite - Next-generation frontend build tool
- @vitejs/plugin-react-swc - React plugin with SWC
- tsx - TypeScript execution for server
- lovable-tagger - Component tagging for development

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
- @types/* - Type definitions for Node.js, Express, WebSocket
- eslint - JavaScript/TypeScript linter with React-specific rules

## Development Scripts

- `npm run dev` - Starts the development server with hot reloading on port 5000
- `npm run build` - Builds the production bundle
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint on the codebase

## Migration Notes

This project was migrated from Lovable to Replit on October 24, 2025. Key changes:
- Replaced Supabase authentication with custom session-based auth
- Restructured from single `src/` to `client/src/`, `server/`, `shared/` folders
- Replaced react-router-dom with wouter for routing
- Created custom Express backend with Vite middleware
- Removed all Supabase dependencies and configuration
- Set up Neon PostgreSQL database (currently using in-memory storage)

## Known Limitations & Next Steps

1. **Password Security**: Passwords are stored in plain text. Implement bcrypt hashing before production.
2. **Database**: Currently using in-memory storage. Migrate to Neon PostgreSQL for persistence.
3. **Production Auth**: Implement proper session expiry, CSRF protection, and secure cookies.
4. **Environment Variables**: Set up proper .env file for production secrets.
5. **Error Handling**: Add comprehensive error logging and monitoring.
