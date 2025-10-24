# Render Deployment Guide

## ✅ Your Project is Now Ready for Render Deployment!

This project has been configured for seamless deployment on Render. The "npm error Missing script: start" issue has been resolved.

---

## 🔧 Changes Made

### 1. **Updated package.json Scripts**
```json
"scripts": {
  "dev": "vite --host 0.0.0.0 --port 5000",
  "build": "vite build",
  "start": "vite preview --host 0.0.0.0 --port ${PORT:-5000}",
  "preview": "vite preview",
  "lint": "eslint ."
}
```

- ✅ Added `"start"` script for production server
- ✅ Configured to use Render's `$PORT` environment variable
- ✅ Falls back to port 5000 for local testing

### 2. **Removed Conflicting Lock Files**
- ✅ Deleted `bun.lock` to ensure npm consistency
- ✅ Kept `package-lock.json` for reliable npm installs

### 3. **Verified Build Process**
- ✅ Tested `npm run build` - builds successfully to `dist/` directory
- ✅ Tested `npm run start` - serves production build correctly

---

## 🚀 Deploy to Render

### **Recommended: Deploy as Static Site**

For this Vite + React app, deploying as a Static Site is the most efficient option.

#### Steps:
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub/GitLab repository
4. Configure settings:
   - **Name**: `socialsync-app` (or your preferred name)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **"Create Static Site"**

**That's it!** Render will automatically build and deploy your app. It will redeploy on every push to your main branch.

---

### **Alternative: Deploy as Web Service**

If you prefer a web service (useful for adding backend later):

#### Steps:
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub/GitLab repository
4. Configure settings:
   - **Name**: `socialsync-app`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Auto-Deploy**: `Yes`
5. Click **"Create Web Service"**

Render will automatically set the `PORT` environment variable, which the app will use.

---

## 🧪 Local Testing

You can test the production build locally before deploying:

```bash
# Build for production
npm run build

# Test the production server
npm run start
```

Then visit `http://localhost:5000` to see your production build.

---

## 📦 Build Output

- **Build directory**: `dist/`
- **Entry point**: `dist/index.html`
- **Assets**: `dist/assets/`

---

## 🔍 Troubleshooting

### Port Issues
If you get a "port already in use" error locally, make sure no other process is using port 5000.

### Build Failures
If the build fails on Render:
1. Check that all dependencies are in `package.json`
2. Verify Node.js version compatibility
3. Review Render build logs for specific errors

### Environment Variables
To add environment variables on Render:
1. Go to your service dashboard
2. Click **"Environment"** in the left sidebar
3. Add variables (prefix with `VITE_` for frontend access)

---

## 📚 Additional Resources

- [Render Static Site Docs](https://render.com/docs/static-sites)
- [Render Web Service Docs](https://render.com/docs/web-services)
- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)

---

## ✨ Your App Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)

**Happy Deploying! 🎉**
