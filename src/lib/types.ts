export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  specs: {
    length: string;
    width: string;
    flex: string;
  };
  gradient: string;
  image: string;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}
