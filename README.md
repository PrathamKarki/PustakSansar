# 📚 PustakSansar

PustakSansar is an full stack e-commerce platform designed for buying books online. Built using the powerful **MERN stack** and **Next.js**, it offers a seamless and engaging experience for book lovers to discover, purchase, and manage their literary acquisitions.

---


## 🚀 Tech Stack

### 🔧 Frontend
- **Next.js (App Router)**
- **ShadCN UI**
- **Redux** for state management
- **Formik** + **Yup** for form handling and validation
- **Axios** for HTTP requests

### 🛠️ Backend
- **Express.js**
- **MongoDB + Mongoose**
- **JWT** (JSON Web Token) for authentication
- **bcrypt** for password hashing

---

## 🌟 Features (Implemented So Far)
- [x] User registration with hashed passwords
- [x] User login with JWT authentication
- [x] User data fetching route
- [x] Frontend form validation using Formik and Yup
- [x] Login/Registration with redirect

---

## 🗂️ Project Phases

### ✅ Phase 1: Authentication
- [x] Create MongoDB User Schema
- [x] Register route (`/register`) with hashed password
- [x] Login route (`/login`) with JWT
- [x] Setup Redux to store login token
- [x] Frontend: Formik forms with Yup validation
- [x] Protected routes and redirects

### 🚧 Phase 2: Product Management
- [ ] Create Product Schema (books)
- [ ] Admin: Add new book
- [ ] Admin: Edit/Delete books
- [ ] User: View all books
- [ ] User: Search, filter, sort books

### 🚧 Phase 3: Cart & Checkout
- [ ] Cart functionality (Add/Remove)
- [ ] Save cart in Redux/localStorage
- [ ] Checkout page
- [ ] Order model & order history

### 🚧 Phase 4: Admin Dashboard
- [ ] View all users
- [ ] View all orders
- [ ] Book management (CRUD)

### 🚧 Phase 5: UI Polish & Deployment
- [ ] Add ShadCN components for modern design
- [ ] Add animations & loading states
- [ ] Deploy frontend and backend to Vercel/Render

---

## 📁 Folder Structure (Suggested)

```
pustaksansar/
│
├── server/
│   ├── models/
│   │   └── user.js
│   ├── routes/
│   │   └── userRouter.js
│   ├── .env
│   └── server.js
│
├── client/
│   ├── app/
│   │   └── (Next.js App Router)
│   ├── redux/
│   ├── components/
│   ├── utils/
│   └── .env.local
```

---

## 🧰 Getting Started

### 🔙 Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
npm install
```

2. Create a `.env` file with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

3. Start the backend server:

```bash
npm run dev
# OR
npm start
```

---

### 🔜 Frontend Setup

1. Navigate to the frontend directory:

```bash
cd ../frontend
npm install
```

2. Create a `.env.local` file with:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. Run the frontend app:

```bash
npm run dev
```

---

## 🔗 API Endpoints Implemented

| Method | Endpoint        | Description         |
|--------|-----------------|---------------------|
| POST   | `/register`     | Register a new user |
| POST   | `/login`        | Login user, returns JWT |
| GET    | `/users`        | Get all registered users |

---

## ✍️ Author

**Pratham Karki**  
Bookstore App using MERN + Next.js + ShadCN
