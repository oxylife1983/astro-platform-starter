export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Price in CFA
  imageUrl: string;
  category: string;
  stock: number;
  brand: string;
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'admin';
  pharmacyName?: string;
  pharmacyLicense?: string;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
}