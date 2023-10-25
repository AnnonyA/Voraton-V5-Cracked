@echo off

set scriptpath=%~dp0

  findstr /C:"RUN_NPM_UPDATE" "%scriptpath%\STATUS.txt" >nul
  if not errorlevel 1 (
    echo Voraton V5 - Updating required NPM packages
    call npm install
)

title Voraton V5 (cracked)

node Default.mjs

PAUSE