# Welcome to your Lovable project

## Project info

https://nexus-social-bot.onrender.com/

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to Lovable

Simply open [Lovable](https://lovable.dev/projects/c008267a-4501-41ed-91bc-b5f24677a23e) and click on Share -> Publish.

### Deploy to Render

This project is configured for easy deployment to Render as a static site or web service.

#### Option 1: Deploy as Static Site (Recommended for Vite/React apps)

1. Go to [Render Dashboard](https://dashboard.render.com/) and create a new **Static Site**
2. Connect your GitHub repository
3. Configure the build settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Click "Create Static Site"

#### Option 2: Deploy as Web Service

1. Go to [Render Dashboard](https://dashboard.render.com/) and create a new **Web Service**
2. Connect your GitHub repository
3. Configure the service settings:
   - **Name**: Your app name
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start`
   - **Port**: Render will automatically set the `PORT` environment variable
4. Click "Create Web Service"

Your app will automatically deploy on every push to your main branch.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
