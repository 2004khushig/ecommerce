# Feral E-commerce Admin Panel

This is the admin dashboard for the Feral E-commerce platform, built with React, Vite, and Tailwind CSS.

## Features

- Secure admin login
- Add new products with images, details, and sizes
- View and remove products from the product list
- View orders (orders page placeholder)
- Responsive sidebar navigation

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

1. Navigate to the admin panel directory:

   ```sh
   cd admin/vite-project
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root of the `vite-project` directory and set the backend URL:

   ```
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

   The admin panel will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
vite-project/
  ├── public/                # Static assets
  ├── src/
  │   ├── assets/            # Images and static JS assets
  │   ├── components/        # Navbar, Sidebar, Login, etc.
  │   ├── pages/             # Add, List, Orders pages
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

## Environment Variables

- `VITE_BACKEND_URL` - URL of the backend API (default: `http://localhost:4000`)

## License

This project is licensed