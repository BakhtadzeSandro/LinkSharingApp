# Link Sharing App

A modern web application that allows users to create profiles with custom links and profile pictures. Built with Angular frontend and NestJS backend in a pnpm monorepo structure.

## 🚀 Features

- **User Profiles**: Create and customize your profile with personal information
- **Link Management**: Add, edit, and organize your social media and personal links
- **Profile Pictures**: Upload and manage your profile picture
- **Modern UI**: Built with Angular and PrimeNG components for a beautiful user experience
- **RESTful API**: Robust backend API built with NestJS

## 🛠️ Tech Stack

### Frontend

- **Angular 20** - Modern frontend framework
- **PrimeNG** - UI component library
- **TypeScript** - Type-safe development
- **SCSS** - Advanced styling

### Backend

- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe backend development
- **Jest** - Testing framework

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **Monorepo** - Shared packages and workspace management
- **ESLint & Prettier** - Code formatting and linting

## 📁 Project Structure

```
LinkSharingApp/
├── apps/
│   ├── frontend/          # Angular application
│   └── backend/           # NestJS API
├── packages/
│   ├── shared/            # Shared utilities
│   └── shared-ui/         # Shared UI components
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (v10.13.1 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd LinkSharingApp
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development servers**

   **Option 1: Start both frontend and backend simultaneously**

   ```bash
   pnpm start
   ```

   **Option 2: Start them separately**

   ```bash
   # Start frontend (Angular)
   pnpm run start:frontend

   # Start backend (NestJS) in another terminal
   pnpm run start:backend
   ```

### Development Scripts

- `pnpm start` - Start both frontend and backend
- `pnpm run start:frontend` - Start only the Angular frontend
- `pnpm run start:backend` - Start only the NestJS backend
- `pnpm test` - Run tests

## 🌐 Accessing the Application

- **Frontend**: http://localhost:4200
- **Backend API**: http://localhost:3000

## 📦 Available Scripts

### Root Level

- `pnpm start` - Start both frontend and backend concurrently
- `pnpm run start:frontend` - Start Angular development server
- `pnpm run start:backend` - Start NestJS development server

### Frontend (apps/frontend)

- `pnpm start` - Start Angular development server
- `pnpm build` - Build the application for production
- `pnpm test` - Run unit tests

### Backend (apps/backend)

- `pnpm start:dev` - Start NestJS in development mode with watch
- `pnpm build` - Build the NestJS application
- `pnpm test` - Run unit tests
- `pnpm test:e2e` - Run end-to-end tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Built with ❤️ using Angular and NestJS**
