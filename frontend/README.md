# Feral E-commerce Frontend

This is the frontend for the Feral E-commerce platform, built with React, Vite, and Tailwind CSS.

## Features

- Modern, responsive UI for an online clothing store
- Product listing, filtering, and search
- Product detail pages with image gallery and size selection
- Shopping cart with quantity management
- User authentication (Sign Up / Login)
- Order placement and order history
- Newsletter subscription and contact forms
- Integration with backend API for products, cart, and orders

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- Backend API running (see `/backend` folder)

### Installation

1. Clone the repository and navigate to the frontend folder:

   ```sh
   git clone https://github.com/2004khushig/feral-ecommerce.git
   cd feral-ecommerce/frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the `frontend` directory and set the backend URL:

   ```
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5174](http://localhost:5174).

## Project Structure

```
frontend/
  ├── public/                # Static assets
  ├── src/
  │   ├── assets/            # Images and static JS assets
  │   ├── components/        # Reusable React components
  │   ├── context/           # React Context for global state
  │   ├── pages/             # Page components (Home, Product, Cart, etc.)
  │   ├── index.css          # Tailwind and global styles
  │   └── main.jsx           # App entry point
  ├── tailwind.config.js     # Tailwind CSS config
  ├── vite.config.js         # Vite config
  └── package.json           # Project metadata and scripts
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Environment Variables

- `VITE_BACKEND_URL` - URL of the backend API (default: `http://localhost:4000`)

## License

This project is licensed under the MIT License.

---

