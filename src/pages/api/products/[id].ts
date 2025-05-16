import type { APIRoute } from 'astro';
import { products } from '../../../data/products';

// Set prerender to false to enable server-side rendering for this endpoint
export const prerender = false;

export const GET: APIRoute = ({ params }) => {
  const { id } = params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return new Response(JSON.stringify({ error: 'Product not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
