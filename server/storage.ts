import type { InsertUser, User } from "@shared/schema";

export interface IStorage {
  // User operations
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserById(id: number): Promise<User | undefined>;
}

// In-memory storage implementation
class MemStorage implements IStorage {
  private users: User[] = [];
  private userIdCounter = 1;

  async createUser(user: InsertUser): Promise<User> {
    const newUser: User = {
      id: this.userIdCounter++,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }
}

export const storage = new MemStorage();
