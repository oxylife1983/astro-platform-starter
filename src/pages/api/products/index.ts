import type { APIRoute } from 'astro';
import { products, getAllCategories, getAllBrands } from '../../../data/products';

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const brand = url.searchParams.get('brand');
  
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }
  
  if (brand) {
    filteredProducts = filteredProducts.filter(p => p.brand === brand);
  }
  
  return new Response(JSON.stringify({
    products: filteredProducts,
    categories: getAllCategories(),
    brands: getAllBrands()
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};