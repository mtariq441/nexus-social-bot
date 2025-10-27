Welcome to the Social-Bot Project
🌐 Project Info

Live Preview: https://nexus-social-bot.onrender.com/

🧠 How to Edit the Code

You can edit and develop this project locally using your preferred IDE.

Steps to Set Up Locally:
# Step 1: Clone the repository using the Git URL
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev

💻 Technologies Used

This project is built with:

Vite

TypeScript

React

shadcn/ui

Tailwind CSS

🚀 Deployment Guide
Option 1: Deploy as a Static Site (Recommended)

Go to your Render Dashboard
.

Create a new Static Site.

Connect your GitHub repository.

Configure the build settings:

Build Command: npm install && npm run build

Publish Directory: dist

Click Create Static Site to deploy.

Option 2: Deploy as a Web Service

Go to your Render Dashboard
.

Create a new Web Service.

Configure the settings:

Environment: Node

Build Command: npm install && npm run build

Start Command: npm run start

Render automatically sets the PORT environment variable.

Your app will deploy automatically on every push to the main branch.

🌍 Custom Domain

To connect a custom domain:

Go to your project’s Render Dashboard.

Navigate to Settings → Custom Domains.

Click Add Custom Domain and follow the instructions.

Read more here: Render Domain Setup Guide
