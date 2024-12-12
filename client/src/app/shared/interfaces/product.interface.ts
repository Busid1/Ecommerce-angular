export interface Product {
  category: string;
  description: string;
  _id: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface ProductItemCart {
  product: Product;
  quantity: number;
}