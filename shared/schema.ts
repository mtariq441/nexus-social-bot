export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  role: 'user' | 'admin';
  createdAt?: Date;
}

export interface SocialAccount {
  id: string;
  userId: string;
  platform: 'twitter' | 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube';
  accountName: string;
  followers: number;
  connected: boolean;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  platforms: string[];
  scheduledFor?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  mediaUrls?: string[];
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

export interface Message {
  id: string;
  platform: string;
  from: string;
  content: string;
  timestamp: Date;
  read: boolean;
  replied: boolean;
  type: 'message' | 'comment' | 'review';
}

export interface AnalyticsData {
  date: string;
  followers: number;
  engagement: number;
  reach: number;
  clicks: number;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'starter' | 'professional' | 'enterprise';
  status: 'active' | 'cancelled' | 'expired';
  billingCycle: 'monthly' | 'annual';
  nextBillingDate?: Date;
  amount: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  billingCycle: 'monthly' | 'annual';
  features: string[];
  recommended?: boolean;
  limits: {
    posts: number;
    accounts: number;
    users: number;
  };
}
