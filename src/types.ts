export interface AIAgent {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  skills: Skill[];
  rating: number;
  price: number;
  available: boolean;
}

export interface Skill {
  name: string;
  level: number;
  endorsements: number;
}

export interface Wallet {
  balance: number;
  currency: string;
}