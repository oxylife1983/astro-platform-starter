import { CartItem } from '../types/ecommerce';
import { getProductById } from '../data/products';

// For client-side cart management
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  
  const cartData = localStorage.getItem('cart');
  if (!cartData) return [];
  
  try {
    return JSON.parse(cartData);
  } catch (error) {
    console.error('Failed to parse cart data:', error);
    return [];
  }
}

export function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId: string, quantity: number = 1): void {
  const cart = getCart();
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  
  saveCart(cart);
}

export function removeFromCart(productId: string): void {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.productId !== productId);
  saveCart(updatedCart);
}

export function updateCartItemQuantity(productId: string, quantity: number): void {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const cart = getCart();
  const item = cart.find(item => item.productId === productId);
  
  if (item) {
    item.quantity = quantity;
    saveCart(cart);
  }
}

export function clearCart(): void {
  saveCart([]);
}

export function getCartTotal(): number {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

export function getCartItemCount(): number {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}