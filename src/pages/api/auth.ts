import type { APIRoute } from 'astro';

// Mock users data (in a real app, this would be in a database)
const users = [
  {
    id: 'user-001',
    name: 'Pharmacie Centrale',
    email: 'contact@pharmaciecentrale.ci',
    password: 'password123', // In a real app, this would be hashed
    phone: '+225 07 12 34 56 78',
    role: 'customer',
    pharmacyName: 'Pharmacie Centrale Abidjan',
    pharmacyLicense: 'PHM-CI-2023-1234'
  },
  {
    id: 'user-002',
    name: 'Admin',
    email: 'admin@boissons.ci',
    password: 'admin123', // In a real app, this would be hashed
    phone: '+225 07 98 76 54 32',
    role: 'admin'
  }
];

export const POST: APIRoute = async ({ request }) => {
  try {
    const { action, email, password } = await request.json();
    
    if (action === 'login') {
      // Find user by email
      const user = users.find(u => u.email === email);
      
      // Check if user exists and password matches
      if (user && user.password === password) {
        // Remove password from response
        const { password, ...userWithoutPassword } = user;
        
        return new Response(JSON.stringify({
          success: true,
          user: userWithoutPassword
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid email or password'
      }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    if (action === 'register') {
      // Check if email already exists
      if (users.some(u => u.email === email)) {
        return new Response(JSON.stringify({
          success: false,
          message: 'Email already in use'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
      
      // In a real app, we would create a new user in the database
      // For this demo, we'll just return a success response
      
      return new Response(JSON.stringify({
        success: true,
        message: 'Registration successful'
      }), {
        status: 201,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify({
      success: false,
      message: 'Invalid action'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Invalid request'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};