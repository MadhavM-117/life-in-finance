# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with HMR at http://localhost:5173
- `npm run build` - Create production build
- `npm run start` - Run production server from build output
- `npm run typecheck` - Generate types and run TypeScript type checking

## Architecture

This is a React Router v7 application using file-based routing and server-side rendering.

### Key Architecture Decisions

- **Routing**: Uses `@react-router/fs-routes` for file-based routing with routes defined in `app/routes/`
- **SSR**: Server-side rendering is enabled by default (configured in `react-router.config.ts`)
- **Styling**: TailwindCSS v4 with Vite plugin integration
- **TypeScript**: Strict mode enabled with path aliases (`~/*` maps to `./app/*`)

### Project Structure

- `app/` - Main application code
  - `routes/` - File-based routes (currently has `_index.tsx` as homepage)
  - `root.tsx` - Root layout component with error boundary
  - `routes.ts` - Route configuration using flatRoutes
- `public/` - Static assets
- `build/` - Production build output (client/ and server/)

### Configuration Files

- `react-router.config.ts` - React Router configuration (SSR enabled)
- `vite.config.ts` - Vite bundler with React Router, TailwindCSS, and tsconfig paths
- `fly.toml` - Fly.io deployment configuration for Singapore region

### Deployment

The application is configured for deployment on Fly.io with auto-deployment setup. Docker configuration available for containerized deployments.