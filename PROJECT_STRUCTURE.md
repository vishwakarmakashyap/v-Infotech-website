# V-Infotec Pvt Ltd - Full Stack Application

## 🏗️ Project Structure

```
v-infotec-website/
├── frontend/           # Frontend (Port 3000)
│   ├── index.html     # Main website
│   ├── styles.css     # Styling
│   ├── script.js      # Frontend logic
│   └── package.json   # Frontend dependencies
├── backend/            # Backend (Port 3001)
│   ├── smtp-server.js # Email API server
│   ├── package.json   # Backend dependencies
│   └── .env          # Environment variables
├── start.bat          # Start both servers
└── README.md          # This file
```

## 🚀 Quick Start

### Option 1: Use Startup Script
```bash
# Double-click start.bat or run:
start.bat
```

### Option 2: Manual Start
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend  
cd frontend
npm start
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000 (Website)
- **Backend**: http://localhost:3001 (API Server)

## 📋 Features

- **Separated Architecture**: Clean frontend/backend separation
- **Different Ports**: Frontend (3000), Backend (3001)
- **Email Integration**: Contact form with SMTP server
- **Easy Deployment**: Independent frontend/backend deployment

## 🛠️ Development

### Frontend (Port 3000)
- Static website serving
- Contact form UI
- Responsive design

### Backend (Port 3001)
- Express.js API server
- Nodemailer SMTP integration
- CORS enabled for frontend

## 📞 Contact Form Flow

1. User fills form on frontend (port 3000)
2. Form submits to backend API (port 3001)
3. Backend sends email via SMTP
4. Success/error response to frontend