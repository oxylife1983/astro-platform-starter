import { User } from '../types/ecommerce';

// Mock users for demonstration
const users: User[] = [
  {
    id: 'user-001',
    name: 'Pharmacie Centrale',
    email: 'contact@pharmaciecentrale.ci',
    phone: '+225 07 12 34 56 78',
    role: 'customer',
    pharmacyName: 'Pharmacie Centrale Abidjan',
    pharmacyLicense: 'PHM-CI-2023-1234'
  },
  {
    id: 'user-002',
    name: 'Admin',
    email: 'admin@boissons.ci',
    phone: '+225 07 98 76 54 32',
    role: 'admin'
  }
];

// Mock authentication functions (client-side only)
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Failed to parse user data:', error);
    return null;
  }
}

export function login(email: string, password: string): User | null {
  // In a real app, this would validate credentials against a backend
  // For demo purposes, we'll just find a user with the matching email
  const user = users.find(u => u.email === email);
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  
  return null;
}

export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('currentUser');
}

export function isLoggedIn(): boolean {
  return !!getCurrentUser();
}

export function isAdmin(): boolean {
  const user = getCurrentUser();
  return user?.role === 'admin';
}