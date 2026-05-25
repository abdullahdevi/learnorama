# Learnorama 🎓

A full-stack educational platform where users can learn programming, cloud computing, and database technologies through interactive lessons and quizzes — and earn certificates upon course completion.

**Live Site:** [abdullahdevi.github.io/learnorama](https://abdullahdevi.github.io/learnorama)  
**Backend API:** [learnorama.onrender.com](https://learnorama.onrender.com)

---

## Features

- **27 Courses** across Programming, Cloud, and Database categories
- **Interactive quiz engine** — answer questions to progress through lessons
- **Progress tracking** — resume where you left off, progress bar per course
- **Certificate generation** — downloadable certificate on course completion
- **JWT Authentication** — register, login, protected routes
- **Responsive design** — works on desktop and mobile

---

## Tech Stack

### Frontend
- React 18
- React Router v6
- Axios
- Tailwind CSS
- Deployed on GitHub Pages

### Backend
- Node.js
- Express.js
- MongoDB Atlas + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Deployed on Render

---

## Project Structure

```
learnorama/
├── frontend/                  # React app
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── context/
│   │   │   └── AuthContext.js
│   │   └── pages/
│   │       ├── Auth/
│   │       │   ├── Login.js
│   │       │   └── Register.js
│   │       ├── Certificate/
│   │       │   └── Certificate.js
│   │       ├── Courses/
│   │       │   └── Courses.js
│   │       ├── Dashboard/
│   │       │   └── Dashboard.js
│   │       ├── Home/
│   │       │   └── Home.js
│   │       └── Lesson/
│   │           └── Lesson.js
│   ├── package.json
│   └── tailwind.config.js
│
└── backend/                   # Express API
    ├── middleware/
    │   └── auth.js            # JWT middleware
    ├── models/
    │   ├── Course.js
    │   ├── Progress.js
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   ├── courses.js
    │   └── progress.js
    ├── seed.js                # Database seeder
    ├── server.js
    └── .env                   # Not committed
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Git

### 1. Clone the repository
```bash
git clone https://github.com/abdullahdevi/learnorama.git
cd learnorama
```

### 2. Set up the backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Seed the database with course content:
```bash
node seed.js
```

Start the backend server:
```bash
node server.js
```

### 3. Set up the frontend
```bash
cd ../frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |
| GET | `/api/auth/me` | Get logged-in user (protected) |

### Courses
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses/:category` | Get all courses by category |
| GET | `/api/courses/single/:id` | Get single course by ID |

### Progress
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress` | Get user's progress (protected) |
| POST | `/api/progress/enroll/:courseId` | Enroll in a course (protected) |
| POST | `/api/progress/complete/:courseId/:lessonIndex` | Mark lesson complete (protected) |

---

## Course Categories

**Programming (10 courses)**
- HTML Basics
- CSS Fundamentals
- JavaScript Essentials
- Node.js and Express
- React Fundamentals
- MongoDB and Mongoose
- Git and Version Control
- TypeScript Fundamentals
- Python for Beginners
- Data Structures and Algorithms

**Cloud (7 courses)**
- Introduction to Cloud Computing
- IaaS, PaaS, and SaaS
- AWS Core Services
- Cloud Security and IAM
- Containers and Docker
- Serverless Architecture
- DevOps and CI/CD

**Database (10 courses)**
- Database Fundamentals
- SQL Basics
- Relationships and JOINs
- Indexes and Performance
- Transactions and ACID
- NoSQL with MongoDB
- Database Design
- Redis and Caching
- PostgreSQL Advanced Features
- Database Backup and Recovery
- Database Scaling Strategies

---

## Deployment

### Frontend (GitHub Pages)
```bash
cd frontend
npm run build
npm run deploy
```

### Backend (Render)
1. Push backend to GitHub
2. Create a new Web Service on [render.com](https://render.com)
3. Connect your GitHub repo
4. Set environment variables in Render dashboard
5. Deploy

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `PORT` | Server port (default: 5000) |

---

## Screenshots

> Add screenshots of your homepage, course page, lesson view, and certificate here.

---

## Author

**Abdullah Devi**  
GitHub: [@abdullahdevi](https://github.com/abdullahdevi)

---

## License

MIT License — feel free to use this project as a reference or starting point.
