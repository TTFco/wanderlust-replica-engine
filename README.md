# Wanderlust Replica Engine

A Vite + React + TypeScript travel site focused on cinematic destination storytelling.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn-ui / Radix UI
- Framer Motion
- React Router
- TanStack Query
- Vitest

## Scripts

```sh
npm run dev
npm run build
npm run lint
npm run test
```

## Project Structure

- `src/app`: top-level providers and route wiring.
- `src/components`: reusable UI and section components.
- `src/components/layout`: site shell components.
- `src/components/sections`: reusable page-level section renderers.
- `src/config`: site-wide brand, navigation, and footer configuration.
- `src/data`: reusable page content and media configuration.
- `src/lib`: shared helpers and animation/navigation utilities.
- `src/pages`: route-level page entrypoints.
- `src/types`: shared TypeScript models.

## Architecture Notes

The project is now organized around a few rules:

- Route files stay thin and mostly compose reusable page renderers.
- Shared navigation, footer, and brand metadata live in `src/config/site.ts`.
- Destination page content lives in `src/data/destinationContent.ts` instead of inline inside page files.
- Shared destination rendering logic lives in `src/components/sections/DestinationPage.tsx`.
- App-wide providers and route declarations are isolated in `src/app`.
- Homepage destination cards are data-driven instead of hardcoded inside the section component.

More detail is documented in [docs/architecture.md](docs/architecture.md).

## Media Strategy

Large local video assets currently exist in `src/assets`. For production and for lighter Git pushes, move those videos to external hosting and swap components over to `src/data/videoUrlMap.ts` once URLs are available.

## Development Guidance

- Keep new destinations data-first: add content objects before building new page components.
- Reuse `SiteLayout` for standard pages.
- Reuse `DestinationPage` when a destination follows the existing cinematic long-form pattern.
- Keep route files minimal and avoid embedding large static data structures in page components.
