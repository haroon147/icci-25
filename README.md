# ICCI-2025 Conference Management System

A full-stack conference management system for the 1st International Conference on Computing & Innovation (ICCI-2025) with React frontend and Node.js/Express backend using MongoDB.

## Project Structure

```
project/
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── backend/          # Node.js/Express backend
│   ├── src/          # Source code (if using TypeScript)
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── package.json  # Backend dependencies
│   └── server.js     # Main server file
└── README.md         # This file
```

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/conference
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

5. Start the backend server:
```bash
npm run dev
```

The backend will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Features

### Frontend (React + JavaScript)
- Modern React application with JavaScript (no TypeScript)
- Tailwind CSS for styling
- React Router for navigation
- Responsive design
- Admin dashboard for content management

### Backend (Node.js + Express + MongoDB)
- RESTful API with Express.js
- MongoDB with Mongoose ODM
- JWT authentication
- Role-based access control
- User management system
- Paper submission and review
- Registration management

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Deactivate user

### Papers
- `GET /api/papers` - Get all papers
- `GET /api/papers/:id` - Get paper by ID
- `POST /api/papers` - Create new paper
- `PUT /api/papers/:id` - Update paper
- `DELETE /api/papers/:id` - Delete paper

### Registrations
- `GET /api/registrations` - Get all registrations
- `GET /api/registrations/:id` - Get registration by ID
- `POST /api/registrations` - Create new registration
- `PUT /api/registrations/:id` - Update registration
- `DELETE /api/registrations/:id` - Delete registration

## User Roles

The system supports role-based access control with the following roles:

1. **Super Admin** - Full system access
2. **Admin** - Administrative access
3. **Manager** - Management access
4. **Employee** - Basic access
5. **Data Entry** - Limited access

## Development

### Running Both Services

To run both frontend and backend simultaneously:

1. Start backend (from backend directory):
```bash
npm run dev
```

2. Start frontend (from frontend directory):
```bash
npm run dev
```

The frontend will automatically proxy API requests to the backend server.

## Technologies Used

### Frontend
- React 18
- JavaScript (ES6+)
- Vite (build tool)
- React Router DOM
- Tailwind CSS
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- Helmet
- Morgan

## License

ISC