## Preview

![Application Preview](/public/preview.png)

# Maze Frontend Challenge

Frontend technical challenge implementation for **MAZE (HeroTech)** built with **Nuxt 4**, **Vue 3**, **TypeScript**, and **Tailwind CSS**.

The project consumes data from the **Fake Store API** and focuses on clean architecture, SSR, reusable components, and maintainable code.

---

## Features

### Product List

- Display product list
- Product search
- Category filtering
- Product sorting
- Applied filters
- URL query synchronization
- Responsive filters (Sidebar / Drawer)
- Skeleton loading
- Empty state
- Error state
- SEO metadata

### Product Details

- Dynamic product page
- Breadcrumb navigation
- Product specifications
- Image preview dialog
- Dynamic SEO metadata
- Invalid route handling (404)

---

## Tech Stack

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Reka UI
- Vaul Vue
- VueUse
- Nuxt Image
- Phosphor Icons

---

## Architecture

The project follows a layered architecture to keep responsibilities separated and make future development easier.

```text
Types
    ↓
Constants
    ↓
Services
    ↓
Composables
    ↓
Components
    ↓
Pages
```

### Responsibilities

- **Types** define shared application models.
- **Constants** contain static configuration and defaults.
- **Services** are responsible for API communication.
- **Composables** contain business logic and reusable state.
- **Components** are responsible for presentation.
- **Pages** only orchestrate data flow.

---

## Project Structure

```text
app
├── api
├── assets
├── components
├── composables
├── constants
├── icons
├── layouts
├── pages
├── services
├── types
└── utils
```

---

## Key Implementation Decisions

### Server-side Data Fetching

Product data is fetched using `useAsyncData`, allowing pages to be rendered on the server for improved SEO and faster first paint.

### Service Layer

API communication is isolated inside the service layer.

Components never communicate directly with external APIs.

### Composables

Filtering, query synchronization, breadcrumb generation, and product-specific logic are extracted into composables to keep pages lightweight.

### URL Synchronization

Filter state is synchronized with route query parameters, allowing bookmarking and sharing filtered results.

### Reusable UI Components

Common UI elements such as Dialog, Drawer, Rating, Accordion, Checkbox, and Radio Group are implemented as reusable components.

### Error Handling

The application handles:

- Invalid route parameters
- Non-existing products
- API errors
- Global error page (`error.vue`)

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run generate
```

---

## API

This project uses the Fake Store API:

https://fakestoreapi.com/docs

---

## Repository

https://github.com/mobinerr/maze-front-test

---

## Author

**Mobin Shokri**