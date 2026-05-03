# 🌌 MFR Portfolio — High-End Engineering Portfolio

[![Deploy to Production](https://github.com/mfaris2002/portfolio-mfr/actions/workflows/deploy.yml/badge.svg)](https://github.com/mfaris2002/portfolio-mfr/actions/workflows/deploy.yml)
[![Nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Strapi](https://img.shields.io/badge/Strapi-v5-4945FF?logo=strapi&logoColor=white)](https://strapi.io)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)](https://www.docker.com)

A premium, OLED-black aesthetic portfolio built for performance and maintainability. This project bridges the gap between robust system implementation and high-performance web engineering.

**🌐 Live Demo:** [faris.web.id](http://faris.web.id)

---

## ✨ Features

- **🌑 OLED Aesthetic**: Deep blacks and high-contrast accents designed for modern displays.
- **⚡ Performance First**: Powered by **Nuxt 3** with optimized asset delivery and SSR.
- **🧩 Headless CMS**: Integrated with **Strapi v5** for dynamic content management (Projects, Experience, Skills).
- **🎢 Premium Animations**: Smooth scrolling with **Lenis** and high-end interactive elements using **GSAP**.
- **🚢 Dockerized Architecture**: Multi-container setup for seamless deployment and persistent data storage.
- **🤖 Automated CI/CD**: Full automation via **GitHub Actions** for image building (GHCR) and VPS deployment.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue.js)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) & [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide Vue](https://lucide.dev/)

### Backend (CMS)
- **Framework**: [Strapi v5](https://strapi.io/)
- **Database**: SQLite (with Docker persistence)
- **Language**: TypeScript

### DevOps
- **Deployment**: Docker & Docker Compose
- **Registry**: GitHub Container Registry (GHCR)
- **CI/CD**: GitHub Actions
- **Server**: Nginx on Linux VPS

---

## 📂 Project Structure

```bash
├── .github/workflows/   # CI/CD Pipeline (Build & Deploy)
├── backend/             # Strapi CMS (TypeScript)
│   ├── src/api/         # Content Type Definitions (Projects, Skills, etc.)
│   ├── config/          # CMS Configuration
│   └── Dockerfile       # Production-ready backend image
├── components/          # Nuxt Components (Interactive Globe, etc.)
├── assets/              # Styles and static assets
├── app.vue              # Main Portfolio entry point
├── docker-compose.yml   # Multi-container orchestration
└── nuxt.config.ts       # Frontend configuration
```

---

## 🚀 Getting Started

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mfaris2002/portfolio-mfr.git
   cd portfolio-mfr
   ```

2. **Start Backend (Strapi):**
   ```bash
   cd backend
   npm install
   npm run develop
   ```

3. **Start Frontend (Nuxt):**
   ```bash
   # In a new terminal (root folder)
   npm install
   npm run dev
   ```

### Deployment via Docker

This project is configured to run behind a reverse proxy (like Nginx).

```bash
# Build and start services
docker-compose up -d --build
```

The services will be available at:
- **Frontend**: `http://localhost:3000`
- **CMS Admin**: `http://localhost:1337/admin`

---

## 🔧 Environment Variables

Create a `.env` file in the root and backend folders with the following:

```env
# Database & Security
APP_KEYS=random_keys
API_TOKEN_SALT=random_salt
ADMIN_JWT_SECRET=random_secret
TRANSFER_TOKEN_SALT=random_transfer_salt
JWT_SECRET=random_jwt_secret

# URLs
STRAPI_URL=http://your-domain.com:1337
```

---

## 📄 License

© 2026 **Muhamad Faris Rafi**. All Rights Reserved.  
Built with 🖤 and JavaScript.
