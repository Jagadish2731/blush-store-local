import { Product, CartItem, AdminCredentials } from './types';

const PRODUCTS_KEY = 'blossom_products';
const CART_KEY = 'blossom_cart';
const ADMIN_KEY = 'blossom_admin';

// Initialize with default admin credentials
const DEFAULT_ADMIN: AdminCredentials = {
  username: 'admin',
  password: 'admin123'
};

// Initialize with sample products
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Rose Glow Serum',
    price: 45.99,
    category: 'Skincare',
    description: 'Luxurious rose-infused serum that hydrates and brightens your skin for a natural glow.',
    image: '',
    rating: 4.8,
    featured: true,
    stock: 50
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    price: 24.99,
    category: 'Makeup',
    description: 'Long-lasting velvet matte formula in a beautiful nude pink shade.',
    image: '',
    rating: 4.5,
    featured: true,
    stock: 100
  },
  {
    id: '3',
    name: 'Cloud Soft Moisturizer',
    price: 38.99,
    category: 'Skincare',
    description: 'Ultra-lightweight moisturizer that melts into your skin like clouds.',
    image: '',
    rating: 4.9,
    featured: false,
    stock: 75
  },
  {
    id: '4',
    name: 'Peach Blush Palette',
    price: 32.99,
    category: 'Makeup',
    description: 'Four peachy shades perfect for creating a natural, healthy flush.',
    image: '',
    rating: 4.7,
    featured: true,
    stock: 60
  },
  {
    id: '5',
    name: 'Golden Hour Highlighter',
    price: 29.99,
    category: 'Makeup',
    description: 'Champagne-toned highlighter for a luminous, sun-kissed glow.',
    image: '',
    rating: 4.6,
    featured: false,
    stock: 80
  },
  {
    id: '6',
    name: 'Hydrating Face Mask',
    price: 18.99,
    category: 'Skincare',
    description: 'Deeply hydrating sheet mask infused with hyaluronic acid and botanical extracts.',
    image: '',
    rating: 4.8,
    featured: false,
    stock: 120
  }
];

// Initialize storage with default data
export const initializeStorage = () => {
  if (!localStorage.getItem(ADMIN_KEY)) {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(DEFAULT_ADMIN));
  }
  
  if (!localStorage.getItem(PRODUCTS_KEY)) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(SAMPLE_PRODUCTS));
  }
  
  if (!localStorage.getItem(CART_KEY)) {
    localStorage.setItem(CART_KEY, JSON.stringify([]));
  }
};

// Products
export const getProducts = (): Product[] => {
  const data = localStorage.getItem(PRODUCTS_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const addProduct = (product: Product) => {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
};

export const updateProduct = (id: string, updatedProduct: Product) => {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = updatedProduct;
    saveProducts(products);
  }
};

export const deleteProduct = (id: string) => {
  const products = getProducts().filter(p => p.id !== id);
  saveProducts(products);
};

// Cart
export const getCart = (): CartItem[] => {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product: Product, quantity: number = 1) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  
  saveCart(cart);
};

export const removeFromCart = (productId: string) => {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart = getCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      item.quantity = quantity;
      saveCart(cart);
    }
  }
};

export const clearCart = () => {
  saveCart([]);
};

// Admin
export const getAdminCredentials = (): AdminCredentials => {
  const data = localStorage.getItem(ADMIN_KEY);
  return data ? JSON.parse(data) : DEFAULT_ADMIN;
};

export const verifyAdmin = (username: string, password: string): boolean => {
  const admin = getAdminCredentials();
  return admin.username === username && admin.password === password;
};
