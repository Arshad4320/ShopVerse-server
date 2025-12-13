🛠️ Shop Verse — Backend API (Server)

The Shop Verse Backend is a scalable and production-ready REST API built to support a full-featured e-commerce application.
It handles authentication, product management, category management, order processing, and user management with proper role-based access control.

🚀 Features Overview
🔐 Authentication & Authorization

User registration and login using JWT authentication

Secure password hashing with bcrypt

Role-based access control (User / Admin)

Cookie-based session handling

👤 User Management

Create and manage users

Fetch all users (Admin only)

View user-specific order history

Secure protected routes using middleware

🗂️ Category Management (Admin)

Create new categories

Update existing categories

Delete categories

Fetch all categories

Used for category-wise product filtering on the frontend

🛍️ Product Management (Admin)

Create products with image upload

Update product details

Delete products

Fetch all products

Fetch single product details

Category-wise product filtering

Image handling using Cloudinary + Multer

📦 Order Management

Place orders (supports guest & authenticated users)

Fetch orders by user (User profile orders)

Fetch all orders (Admin dashboard)

Order status tracking

Secure order routes with role-based access

🔍 Search & Pagination

Search support for products and orders

Pagination implemented for large datasets

Optimized query handling using MongoDB & Mongoose

🧰 Tech Stack
Backend

Node.js ,Express.js (v5) ,TypeScript,MongoDB,Mongoose,Authentication & Security,JSON Web Token (JWT),bcrypt,cookie-parser,CORS,File & Image Handling,Multer,Cloudinary

📂 Project Structure 
src/
├── modules/
│   ├── auth
│   ├── user
│   ├── category
│   ├── product
│   └── order
├── middlewares/
├── routes/
├── utils/
└── index.ts

📜 Scripts
# Development
npm run dev

# Build TypeScript
npm run build

# Production
npm run start

🌱 Environment Variables

Create a .env file in the root directory:

PORT=5000
DATABASE_URL=your_mongodb_connection
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

📌 Learning Outcome

Building this backend helped me gain strong hands-on experience with:

Designing RESTful APIs

Implementing authentication and authorization

Role-based access control (Admin vs User)

Managing relational data using MongoDB & Mongoose

Handling file uploads and cloud image storage

Structuring scalable backend architecture using TypeScript

This backend serves as a solid foundation for real-world e-commerce applications.
