import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple session middleware (in-memory)
const sessions = new Map<string, any>();
app.use((req, res, next) => {
  const sessionId = req.headers['x-session-id'] as string || '';
  req.session = sessions.get(sessionId) || null;
  
  const originalJson = res.json.bind(res);
  res.json = function(data: any) {
    if (req.session) {
      const newSessionId = sessionId || Math.random().toString(36);
      sessions.set(newSessionId, req.session);
      res.setHeader('x-session-id', newSessionId);
    }
    return originalJson(data);
  };
  next();
});

// Register API routes
registerRoutes(app);

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

const server = createServer(app);

// Setup Vite in development
setupVite(app, server);

const PORT = 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
