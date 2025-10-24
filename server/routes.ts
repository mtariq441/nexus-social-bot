import type { Express } from "express";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";

export function registerRoutes(app: Express) {
  // Auth routes
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const data = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(data.email);
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // In a real app, hash the password here
      const user = await storage.createUser(data);
      
      // Create session
      req.session = req.session || {};
      req.session.userId = user.id;
      
      // Don't send password back
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await storage.getUserByEmail(email);
      if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Create session
      req.session = req.session || {};
      req.session.userId = user.id;
      
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session = null;
    res.json({ message: "Logged out" });
  });

  app.get("/api/auth/session", async (req, res) => {
    const userId = req.session?.userId;
    if (!userId) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const user = await storage.getUserById(userId);
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });
}

// Extend Express Request type to include session
declare module "express-serve-static-core" {
  interface Request {
    session?: {
      userId?: number;
    } | null;
  }
}
