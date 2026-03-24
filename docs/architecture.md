# Architecture

## Overview

The codebase is structured around reusable page shells, centralized content, and thin route entrypoints.

## Core Layers

### App Layer

`src/app`

- `AppProviders.tsx` owns app-wide providers.
- `AppRoutes.tsx` owns route registration.
- `src/App.tsx` is now a thin composition entrypoint.

### Configuration Layer

`src/config`

- `site.ts` stores brand, navigation, footer, and social metadata.
- Shared shell components should read from config instead of hardcoding labels and routes.

### Content Layer

`src/data`

- `destinationContent.ts` stores reusable destination page content and homepage destination card data.
- `videoUrlMap.ts` is reserved for externally hosted media URLs.

### Layout Layer

`src/components/layout`

- `SiteLayout.tsx` provides the default navbar + footer page wrapper.

### Section Layer

`src/components/sections`

- `DestinationPage.tsx` renders long-form cinematic destination pages from structured data.
- Future shared page families should follow the same pattern: one renderer, multiple content objects.

### Route Layer

`src/pages`

- Route files should stay minimal.
- If a page is content-heavy, move the content into `src/data` and keep the route file focused on composition.

## Current Reusable Patterns

### Standard Site Pages

Use `SiteLayout` when a page should render with the shared navbar and footer.

### Destination Pages

Use `DestinationPage` when the page needs:

- hero video rotation
- overview section with media
- reasons to visit
- top places
- signature experiences
- itinerary blocks
- stays
- responsible travel section
- best-time section
- closing CTA block

### Site Navigation

Use `site.ts` for labels and routes.
Use `src/lib/navigation.ts` for homepage section navigation so links work both from `/` and from nested routes.

## Adding a New Destination

1. Add media assets or external URLs.
2. Add a new `DestinationPageData` object in `src/data/destinationContent.ts`.
3. Add a route in `src/app/AppRoutes.tsx`.
4. Add a thin page entry in `src/pages` that renders `DestinationPage`.
5. Add a homepage card in `featuredDestinations` if it should appear on the home screen.
6. Add navigation metadata in `src/config/site.ts` if it should appear in the menu.

## Refactor Intent

This structure is meant to keep duplication low as more destination pages are added. Shared UX behavior should live in reusable components or helpers, while route files stay focused on wiring rather than implementation details.
