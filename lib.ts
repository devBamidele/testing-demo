import * as db from './db';
import * as mail from './mail';

// Testing numbers 
export function absolute(number: number): number {
  if (number > 0) return number; 
  if (number < 0) return -number; 
  return 0; 
}

// Testing strings 
export function greet(name: string): string { 
  return 'Welcome ' + name; 
}

// Testing arrays 
export function getCurrencies(): string[] { 
  return ['USD', 'AUD', 'EUR'];
}

// Testing objects 
export function getProduct(productId: number): { id: number; price: number } { 
  return { id: productId, price: 10 };
}

// Testing exceptions 
export function registerUser(username: string): { id: number; username: string } { 
  if (!username) throw new Error('Username is required.');

  return { id: new Date().getTime(), username: username }
}

// Mock functions 
export function applyDiscount(order: { customerId: number; totalPrice: number }): void { 
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) 
    order.totalPrice *= 0.9; 
}

// Mock functions 
export function notifyCustomer(order: { customerId: number }): void { 
  const customer = db.getCustomerSync(order.customerId);

  mail.send(customer.email, 'Your order was placed successfully.');
}
