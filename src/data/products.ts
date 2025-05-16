import { Product } from '../types/ecommerce';

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Coca-Cola (24 canettes)',
    description: 'Carton de 24 canettes de Coca-Cola, 33cl chacune. Idéal pour les pharmacies et points de vente.',
    price: 12000, // 12,000 CFA
    imageUrl: '/images/products/coca-cola.jpg',
    category: 'sodas',
    stock: 50,
    brand: 'Coca-Cola',
    featured: true
  },
  {
    id: 'prod-002',
    name: 'Fanta Orange (24 canettes)',
    description: 'Carton de 24 canettes de Fanta Orange, 33cl chacune. Rafraîchissant et populaire.',
    price: 11500, // 11,500 CFA
    imageUrl: '/images/products/fanta.jpg',
    category: 'sodas',
    stock: 45,
    brand: 'Fanta'
  },
  {
    id: 'prod-003',
    name: 'Sprite (24 canettes)',
    description: 'Carton de 24 canettes de Sprite, 33cl chacune. Goût citron-lime rafraîchissant.',
    price: 11500, // 11,500 CFA
    imageUrl: '/images/products/sprite.jpg',
    category: 'sodas',
    stock: 40,
    brand: 'Sprite'
  },
  {
    id: 'prod-004',
    name: 'Eau Minérale (24 bouteilles)',
    description: 'Carton de 24 bouteilles d\'eau minérale, 50cl chacune. Eau pure et rafraîchissante.',
    price: 8000, // 8,000 CFA
    imageUrl: '/images/products/water.jpg',
    category: 'eau',
    stock: 60,
    brand: 'Awa',
    featured: true
  },
  {
    id: 'prod-005',
    name: 'Jus d\'Orange (24 canettes)',
    description: 'Carton de 24 canettes de jus d\'orange naturel, 33cl chacune. Riche en vitamine C.',
    price: 14000, // 14,000 CFA
    imageUrl: '/images/products/orange-juice.jpg',
    category: 'jus',
    stock: 35,
    brand: 'Ivoria Juice'
  },
  {
    id: 'prod-006',
    name: 'Jus d\'Ananas (24 canettes)',
    description: 'Carton de 24 canettes de jus d\'ananas, 33cl chacune. Saveur tropicale authentique.',
    price: 14500, // 14,500 CFA
    imageUrl: '/images/products/pineapple-juice.jpg',
    category: 'jus',
    stock: 30,
    brand: 'Ivoria Juice'
  },
  {
    id: 'prod-007',
    name: 'Schweppes Tonic (24 canettes)',
    description: 'Carton de 24 canettes de Schweppes Tonic, 33cl chacune. Parfait pour les mélanges.',
    price: 13000, // 13,000 CFA
    imageUrl: '/images/products/schweppes.jpg',
    category: 'sodas',
    stock: 25,
    brand: 'Schweppes'
  },
  {
    id: 'prod-008',
    name: 'Limonade (24 canettes)',
    description: 'Carton de 24 canettes de limonade artisanale, 33cl chacune. Recette traditionnelle.',
    price: 12500, // 12,500 CFA
    imageUrl: '/images/products/lemonade.jpg',
    category: 'sodas',
    stock: 20,
    brand: 'Citron Frais',
    featured: true
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(product => product.brand === brand);
}

export function getAllCategories(): string[] {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
}

export function getAllBrands(): string[] {
  const brands = new Set(products.map(product => product.brand));
  return Array.from(brands);
}