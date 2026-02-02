@echo off
echo Starting V-Infotec Application...

echo.
echo Starting Backend Server (Port 3001)...
start "Backend" cmd /k "cd backend && npm start"

timeout /t 3 /nobreak > nul

echo.
echo Starting Frontend Server (Port 3000)...
start "Frontend" cmd /k "cd frontend && npm start"

echo.
echo ✅ Application started!
echo 🌐 Frontend: http://localhost:3000
echo 🔧 Backend:  http://localhost:3001
echo.
pause