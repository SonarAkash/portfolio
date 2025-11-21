# Akash Sonar - Terminal Portfolio 🚀

A developer portfolio with a **retro bash/terminal aesthetic**, built for backend engineers who live in the command line.

Inspired by the raw simplicity of Linux shells and [ysap.sh](https://ysap.sh), this site treats the portfolio as a terminal environment. It features interactive `curl` commands, JSON-styled project data, and a high-contrast neon theme.

## ⚡ Features

- **Terminal UI:** A minimalist design that mimics a ZSH/Bash shell using the "Fira Code" font.
- **Interactive Commands:** Clickable `$ curl` commands that navigate the site instantly.
- **Typewriter Effect:** "System boot" style text animations for introductions.
- **Bash Table Layout:** Projects displayed in a structured, CLI-table format.
- **Tailwind v4:** Built using the latest Tailwind CSS engine for high performance and easy theming.
- **Responsive:** Adapts from a desktop terminal view to a mobile command-line interface.

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS v4
- **Font:** Fira Code (Monospace)
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SonarAkash/portfolio.git
   cd portfolio
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. ***Start the development server***
    ```bash
    npm run dev
    ```
4. ***Open your browser and navigate to http:/localhost:5173***

## 📂 Project Structure
```bash
portfolio/
├── public/
│   └── resume.pdf       # The resume file (accessible via /resume.pdf)
├── src/
│   ├── components/
│   │   └── Typewriter.jsx # The typing animation component
│   ├── App.jsx          # Main application logic & content
│   ├── index.css        # Global styles & Tailwind Theme Variables
│   └── main.jsx         # React entry point
├── index.html           # HTML root
└── vite.config.js       # Vite configuration
```

## 🎨Customization

The theme uses CSS variables defined in src/index.css inside the @theme block. You can change the hex codes to customize the "Terminal Theme".
```bash
@theme {
  --color-bash-bg: #020202;    /* Background */
  --color-bash-green: #00ff66; /* Main Text */
  --color-bash-yellow: #f2c744; /* Accents */
}
```