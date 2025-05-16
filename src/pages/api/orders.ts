import type { APIRoute } from 'astro';

// Mock orders data
const orders = [
  {
    id: 'order-001',
    userId: 'user-001',
    items: [
      { productId: 'prod-001', quantity: 2 },
      { productId: 'prod-004', quantity: 1 }
    ],
    totalAmount: 32000,
    status: 'delivered',
    shippingAddress: {
      street: '123 Boulevard Principal',
      city: 'Abidjan',
      region: 'Cocody',
      country: 'Côte d\'Ivoire'
    },
    paymentMethod: 'mobile',
    createdAt: new Date('2023-05-15')
  },
  {
    id: 'order-002',
    userId: 'user-001',
    items: [
      { productId: 'prod-002', quantity: 1 },
      { productId: 'prod-003', quantity: 1 }
    ],
    totalAmount: 23000,
    status: 'processing',
    shippingAddress: {
      street: '123 Boulevard Principal',
      city: 'Abidjan',
      region: 'Cocody',
      country: 'Côte d\'Ivoire'
    },
    paymentMethod: 'cash',
    createdAt: new Date('2023-05-10')
  },
  {
    id: 'order-003',
    userId: 'user-001',
    items: [
      { productId: 'prod-005', quantity: 1 },
      { productId: 'prod-006', quantity: 1 }
    ],
    totalAmount: 28500,
    status: 'confirmed',
    shippingAddress: {
      street: '123 Boulevard Principal',
      city: 'Abidjan',
      region: 'Cocody',
      country: 'Côte d\'Ivoire'
    },
    paymentMethod: 'bank',
    createdAt: new Date('2023-05-05')
  }
];

export const GET: APIRoute = ({ request }) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');
  
  let userOrders = orders;
  
  if (userId) {
    userOrders = orders.filter(order => order.userId === userId);
  }
  
  return new Response(JSON.stringify(userOrders), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const orderData = await request.json();
    
    // In a real app, we would validate and save the order to a database
    // For this demo, we'll just return a success response with a mock order ID
    
    const newOrder = {
      id: `order-${Math.floor(100000 + Math.random() * 900000)}`,
      ...orderData,
      status: 'pending',
      createdAt: new Date()
    };
    
    return new Response(JSON.stringify(newOrder), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid order data' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};