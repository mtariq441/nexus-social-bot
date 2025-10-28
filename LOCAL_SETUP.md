# Local Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

## Installation Steps

### 1. Extract the Project Files
Unzip the project folder to your desired location on your computer.

### 2. Open in VS Code
```bash
cd path/to/project-folder
code .
```

### 3. Install Dependencies
Open the integrated terminal in VS Code (Ctrl+` or Cmd+`) and run:
```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, shadcn/ui, etc.)

## Running the Application

### Development Mode (Recommended)

For local development on port **5173** (Vite default):
```bash
npm run dev:local
```

Then open your browser to: **http://localhost:5173**

### Alternative - Port 5000
If you prefer port 5000:
```bash
npm run dev
```

Then open your browser to: **http://localhost:5000**

## Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build
To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
project-folder/
├── client/                 # Frontend source code
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities and helpers
│   │   ├── hooks/        # Custom React hooks
│   │   └── App.tsx       # Main app component
│   └── index.html        # HTML entry point
├── shared/               # Shared TypeScript types
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Available Features

This is a **Postify** - AI-Powered Social Media Management Platform with:

✅ Modern React 18 with TypeScript
✅ Vite for ultra-fast development
✅ Tailwind CSS for styling
✅ shadcn/ui component library
✅ React Query for data fetching
✅ React Hook Form with Zod validation
✅ Dark/Light theme support
✅ Multi-language support
✅ Responsive design
✅ Multiple pages and routing

## Pages Included

- `/` - Landing page
- `/auth` - Authentication
- `/dashboard` - Main dashboard
- `/dashboard/composer` - Post composer
- `/dashboard/inbox` - Unified inbox
- `/dashboard/analytics` - Analytics
- `/dashboard/integrations` - Integrations
- `/dashboard/team` - Team management
- `/dashboard/settings` - Settings
- `/dashboard/subscription` - Subscription management
- `/dashboard/admin` - Admin panel

## Troubleshooting

### Port Already in Use
If you see "Port 5173 is already in use", either:
- Close the other application using that port
- Use port 5000 instead: `npm run dev`

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
npm install
```

### Build Errors
Ensure you're using Node.js v18 or higher:
```bash
node --version
```

## Development Tips

1. **Hot Module Replacement (HMR)**: Changes automatically refresh in the browser
2. **TypeScript**: Full type safety enabled - VS Code will show type errors
3. **ESLint**: Code quality checks are configured
4. **Tailwind CSS**: Use utility classes for styling
5. **Dark Mode**: Toggle between light/dark themes in the UI

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Need Help?

If you encounter any issues:
1. Check that all dependencies are installed: `npm list`
2. Verify Node.js version: `node --version` (should be v18+)
3. Try clearing cache and reinstalling: `npm cache clean --force && npm install`
4. Check the browser console for errors (F12 in most browsers)

## Production Deployment

The built application (`dist` folder) can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

Simply run `npm run build` and upload the `dist` folder contents.

---

**Happy coding! 🚀**
