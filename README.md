# Rocketseat Frontend Challenge - Product E-commerce

<p style="text-align: center;">
    <a href="https://www.pedroestevao.com">
        <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1748399008/github/vsr9yn6gfjpjvl1d66pr.webp" alt="Illustrative image" />
    </a>
</p>

This project is a solution to a frontend technical challenge by **Rocketseat**, focused on building a simple e-commerce application with product listing, filters, pagination, and a persistent shopping cart. Developed with **React**, **Next.js**, **TypeScript**, and **Styled Components**, the project demonstrates best practices in state management, GraphQL API consumption, and user experience.

## Key Features

- **Dynamic Product Listing:** Displays products with filtering options by category and sorting by popularity, price, or creation date.
- **Efficient Pagination:** API-based pagination (GraphQL) to load products on demand, optimizing performance.
- **Persistent Shopping Cart:** Functionality to add, remove, and update product quantities in the cart, with data persisted in localStorage.
- **Cart Synchronization:** The cart state is synchronized across different components and browser tabs, ensuring a consistent experience.
- **Product Detail Page:** Detailed display of each product with relevant information.
- **Product Search:** Real-time product filtering by name.
- **Responsive Design:** Adaptive layout for different screen sizes, ensuring a great experience on both mobile and desktop devices.

## Tech Stack

This project was built using the following technologies and tools:

- **Next.js (App Router):** React framework for web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Styled Components:** A library that lets you write CSS in JavaScript and style your React components with speed, strong typing, and flexibility.
- **@tanstack/react-query:** Powerful library for server state management and data caching.
- **axios:** Promise-based HTTP client for the browser and Node.js.
- **json-graphql-server:** GraphQL server to simulate a backend API, supporting pagination and filters.
- **React Context API:** Used for global pagination state management, ensuring synchronization across components.

## Figma Design

This project was developed based on the challenge proposed by Rocketseat:

- [E-commerce - Capputeeno](https://www.figma.com/file/rET9F2CeUEJdiVN7JRu993/E-commerce---capputeeno?node-id=680%3A6449)

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/pedroestevaodev/rocketseat-frontend-challenge.git
cd rocketseat-frontend-challenge
```

### 2. Install dependencies

```bash
$ yarn install
```

### 3. Start the GraphQL API

This project expects a **GraphQL API** running locally. Rocketseat already provides a pre-configured and ready-to-use version in the `api` folder. To initialize it, simply navigate to the directory and install the dependencies:

```bash
cd api
yarn install
```

Then, start the GraphQL server:

```bash
yarn start
```

The API will be available at `http://localhost:3333/`.

> If you want to edit the data, it can be found in `api/db.json`.

### 4. Create the `.env` file

Create an `.env` file in the root of the **/capputeeno** directory, or edit if it already exists, similar to the following structure:

```bash
NEXT_PUBLIC_API_URL="http://localhost:3333"
```

### 5. Start the development server

```bash
yarn dev
```

Open your browser and visit `http://localhost:3000` to see the project in action.

You can start editing the homepage by modifying the `app/page.tsx` file. The browser will automatically update as you make changes to the code.

## Available Commands

Here are the main commands available for the project:

| Command          | Description                   |
| ---------------- | ----------------------------- |
| `dev`       | Starts the development server |
| `build`     | Builds the app for production |
| `start`     | Runs the built app            |
| `lint`      | Lints the code using ESLint   |
| `lint:check`| Checks if the files are properly formatted using Prettier. |
| `lint:fix`  | Automatically formats the files using Prettier. |

## Deploy

The easiest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/new), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> Make sure to set the environment variables in Vercel > Settings > Environment Variables.

## License

This project is open source and available under the [MIT License](https://mit-license.org/).  
<br />

---

<br />

**Built with ☕ by [Pedro Estevão](https://www.pedroestevao.com)**
