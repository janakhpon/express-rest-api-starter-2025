# Stories API – Postman Quick Reference

Base URL: `http://localhost:3000/api/stories`

## Endpoints

- GET `/api/stories`
- GET `/api/stories/:id`
- POST `/api/stories`
- PUT `/api/stories/:id`
- DELETE `/api/stories/:id`

## Example: Create

POST `/api/stories`

```
{
  "header": "My New Story",
  "paragraphs": ["First paragraph.", "Second paragraph."],
  "tags": ["news", "update"]
}
```

## Example: Get

GET `/api/stories/1`

```
{
  "id": 1,
  "header": "My New Story",
  "paragraphs": ["First paragraph.", "Second paragraph."],
  "tags": ["news", "update"],
  "createdAt": "...",
  "updatedAt": "..."
}
```

> Use `Content-Type: application/json` for POST/PUT.
