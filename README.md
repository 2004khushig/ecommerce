# Feral E-commerce Project

Feral E-commerce is a full-stack web application for an online clothing store, featuring a modern customer-facing frontend and a secure admin dashboard. The project is built with React, Vite, Tailwind CSS, and a Node.js backend.

---

## Monorepo Structure

```
ecommerce/
  ├── backend/                  # Node.js/Express backend API (not included here)
  ├── frontend/                 # Customer-facing React app
  └── admin/
      └── vite-project/         # Admin dashboard React app
```

---

## Frontend

The frontend is a modern, responsive React application for customers to browse, search, and purchase products.

- **Tech Stack:** React, Vite, Tailwind CSS, React Router, Axios, React Toastify
- **Features:** Product listing, filtering, search, product details, cart, authentication, order placement, order history, newsletter, contact forms

See [`frontend/README.md`](frontend/README.md) for full details and setup instructions.

---

## Admin Panel

The admin dashboard allows administrators to manage products and view orders.

- **Tech Stack:** React, Vite, Tailwind CSS, React Router, Axios, React Toastify
- **Features:** Secure login, add/remove products, view product list, view orders, responsive sidebar navigation

See [`admin/vite-project/README.md`](admin/vite-project/README.md) for full details and setup instructions.

---

## Backend

The backend API (not included in this README) should be running for both frontend and admin panel to function. See the `/backend` folder for more information.

---

## Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- Backend API running

### Quick Start

1. **Clone the repository:**
   ```sh
   git clone https://github.com/2004khushig/feral-ecommerce.git
   cd feral-ecommerce
   ```

2. **Setup Frontend:**
   ```sh
   cd frontend
   npm install
   # Create .env with VITE_BACKEND_URL
   npm run dev
   ```

3. **Setup Admin Panel:**
   ```sh
   cd ../admin/vite-project
   npm install
   # Create .env with VITE_BACKEND_URL
   npm run dev
   ```

4. **Start Backend:**  
   See `/backend` folder for instructions.

---

## License

This project is licensed under the MIT License.

---

**Feral E-commerce** &copy;