# Express Stories API Starter

A modern REST API starter with Express, Drizzle ORM, PostgreSQL, Redis, Swagger/OpenAPI, and TypeScript.

## Quick Start

1. `docker-compose up -d` # Start Postgres & Redis
2. `npm install`
3. `npx drizzle-kit generate && npx drizzle-kit push` # Migrate DB
4. `npm run dev` # Start server

## Client Types

- Generate types for your frontend:
  ```bash
  npm run generate:types
  # or
  npx openapi-typescript http://localhost:3000/api-docs.json -o client/client-types.ts
  ```
- See `client/usage.md` for usage in SvelteKit/Next.js.

## API Endpoints

- `GET /api/stories` – List stories
- `GET /api/stories/:id` – Get a story
- `POST /api/stories` – Create a story
- `PUT /api/stories/:id` – Update a story
- `DELETE /api/stories/:id` – Delete a story

## Docs

- [Swagger UI](http://localhost:3000/api-docs/)
- [Integrating with SvelteKit or Nextjs](./client/usage.md)
- [Postman examples](docs/postman.md)
