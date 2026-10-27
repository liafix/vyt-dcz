@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  start "VYT local server" cmd /k "py -3 -m http.server 8765"
) else (
  where python >nul 2>&1
  if not %errorlevel%==0 (
    echo Python 3 nebol najdeny. Nainstalujte Python 3 alebo pouzite iny lokalny HTTP server.
    pause
    exit /b 1
  )
  start "VYT local server" cmd /k "python -m http.server 8765"
)
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8765/prednaska.html"
echo Prednaska otvorena v prehliadaci. Nezatvarajte okno lokalneho servera pocas hodiny.
pause
