# Conference Management System - Backend

A Node.js/Express backend API for the Conference Management System with MongoDB.

## Features

- User authentication and authorization
- Paper submission and management
- Registration management
- Role-based access control (Admin ranks: Super Admin, Admin, Manager, Employee, Data Entry)
- RESTful API endpoints

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `env.example`:
```bash
cp env.example .env
```

3. Update the `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/conference
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will start on port 5000 by default.

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

## Database Models

### User
- Role system: 1=Super Admin, 2=Admin, 3=Manager, 4=Employee, 5=Data Entry
- Password hashing with bcrypt
- Email validation and uniqueness

### Paper
- Multiple authors support
- Review comments and ratings
- Status tracking (Submitted, Under Review, Accepted, Rejected, Revision Required)

### Registration
- Payment status tracking
- Accommodation preferences
- Dietary requirements and special needs

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `NODE_ENV` | Environment | development |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/conference |
| `JWT_SECRET` | JWT signing secret | fallback-secret |
| `JWT_EXPIRES_IN` | JWT expiration time | 7d |
| `FRONTEND_URL` | Frontend URL for CORS | http://localhost:5173 |
