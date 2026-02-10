# Screen Capturer

An elegant Electron application for capturing your screen and saving it as an image. Built with modern web technologies and a beautiful UI.

![Main UI](assets/screenshot.png)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Electron](https://img.shields.io/badge/Electron-v28+-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

---

## Features

- **One-Click Capture**: Capture your entire screen with a single click
- **Auto-Saving**: Choose where to save your screenshots with an intuitive file dialog
- **Timestamped Files**: Screenshots are automatically named with timestamps for easy organization
- **Modern UI**: Beautiful glassmorphism design with smooth animations
- **Efficient**: Optimized for fast startup and smooth performance
- **Secure**: Built with security best practices and sandboxed rendering process
- **Native Integration**: Seamlessly integrates with your operating system

---

## Why Electron?

Electron was chosen to enable rapid cross-platform desktop development
using web technologies while maintaining access to native OS APIs.

---

## Download & Installation

Get the latest release of Screen Capturer:

### **[Download Screen Capturer](https://github.com/ankush-github-11/screen-capturer-electron-app/releases/latest)**

---

### Installation Method 1: Using win-unpacked.rar (Recommended)

1. Visit [GitHub Releases](https://github.com/ankush-github-11/screen-capturer-electron-app/releases/latest)
2. Download the `win-unpacked.rar` file from the releases page
3. **Extract the RAR file**:
   - Right-click on `win-unpacked.rar`
   - Select **Extract Here** or **Extract to win-unpacked/** (you may need WinRAR or 7-Zip)
4. Navigate to the extracted folder
5. **Run `ScreenCapturer.exe`** to launch the application
6. (Optional) Create a shortcut to `ScreenCapturer.exe` on your Desktop for quick access

---

## Quick Start

### Usage

1. Open Screen Capturer
2. Click the **"Capture Screen"** button
3. A save dialog will appear
4. Choose your desired location and filename
5. Your screenshot is automatically saved!

---

## Development

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v6 or higher)

### Setup

```bash
# Clone the repository
git clone https://github.com/ankush-github-11/screen-capturer-electron-app.git
cd screen-capturer-electron-app

# Install dependencies
npm install

# Start development server with hot reload
npm start
```

### Build from Source

```bash
# Build Windows installer
npm run build
```

The installer will be created in the `dist/` directory.

---

## Project Structure

```
screen-capturer-electron-app/
├── src/
│   ├── main/
│   │   ├── main.js          # Main Electron process
│   │   └── preload.js       # Preload script for IPC bridge
│   └── renderer/
│       ├── index.html       # Main UI template
│       ├── renderer.js      # Renderer process logic
│       ├── assets/
│       │   └── main-logo.png
│       └── styles/
│           └── styles.css   # Modern UI styles
├── assets/
│   └── icon.ico             # Application icon
├── package.json             # Project configuration
└── README.md                # This file
```

---

## Tech Stack

- **[Electron](https://www.electronjs.org/)** - Desktop application framework
- **[Electron Builder](https://www.electron.build/)** - Application packager and builder
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **Modern CSS** - Glassmorphism design with animations
- **Vanilla JavaScript** - No external UI frameworks

---

## Architecture

### Main Process (`src/main/main.js`)

Handles:
- Creating the application window with security features
- Capturing screen data using `desktopCapturer` API
- File system operations for saving screenshots
- IPC communication between renderer and main process

### Renderer Process (`src/renderer/`)

Handles:
- User interface rendering
- Button interactions and events
- Communication with main process via IPC
- Beautiful, responsive UI with CSS styling

### Security Features

- **Context Isolation**: Enabled to prevent direct access to Node.js APIs
- **Sandbox**: Renderer process runs in a sandbox
- **Pre-load Script**: Controlled IPC bridge for safe communication
- **CSP**: Content Security Policy enabled for XSS protection

---

## System Requirements

- **Windows 10/11** (64-bit)
- **Minimum RAM**: ~200 MB
- **Disk Space**: ~150 MB for installation

---

## How It Works

1. **Initialization**: The main process creates a secure window with limited permissions
2. **Capture**: When you click the button, `desktopCapturer` captures the screen at native display resolution
3. **Saving**: A native save dialog lets you choose filename and location
4. **Storage**: The captured frame is converted to PNG and saved to your chosen location

---

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## Future Improvements

- Region-based screen capture
- Keyboard shortcuts
- Auto-copy screenshot to clipboard
- macOS & Linux support

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Author

**Ankush Bhattacharjee** - [GitHub Profile](https://github.com/ankush-github-11)

---

## Support

If you find this project helpful, please consider giving it a star on GitHub!

### Links

- [Report Issues](https://github.com/ankush-github-11/screen-capturer-electron-app/issues)
- [Download Latest Release](https://github.com/ankush-github-11/screen-capturer-electron-app/releases/latest)
- [Discussions](https://github.com/ankush-github-11/screen-capturer-electron-app/discussions)

---

**Made with ❤️ using Electron**
