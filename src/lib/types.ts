export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating?: number;
  featured?: boolean;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AdminCredentials {
  username: string;
  password: string;
}
