# Presidential OS

A beautiful custom streaming & gaming OS shell for Windows 11, with controller and remote support.

## Features

- Boot splash with Presidential OS logo
- Seamless logo integration
- Animated, color-themed UI (rose gold, purple, white)
- Xbox, PS5, Apple TV remote support (Node.js)
- Easy launch via script
- Designed for 4K screens

## Quick Start

1. **Install Node.js** (https://nodejs.org/)

2. **Clone this repo**  
   `git clone https://github.com/PresidentialOS/PRESI-UI-SHELL.git`

3. **Run on Windows:**  
   Open a terminal and run:
   ```
   cd scripts
   start-win.bat
   ```

4. **Connect your controller/remote**  
   (Xbox, PS5, Apple TV remote; see docs/controllers.md for details)

5. **Enjoy Presidential OS!**

---

## Customization

- **Logo:** Replace `assets/logo.svg`
- **Boot screen:** Edit `src/components/BootScreen.jsx`
- **Colors/themes:** Edit `src/theme.js` and CSS in components

---

**Built with Electron, React, Node.js.**