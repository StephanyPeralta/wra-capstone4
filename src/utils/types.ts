export interface Banner {
  id: string;
  img: string;
  title: string;
  description: string;
}

export interface Category {
  id?: string;
  img: string;
  title: string;
}

export interface Product {
  id?: string;
  img: string;
  name: string;
  price: number;
  category: string;
}

export interface ProductsState {
  activeCategories: string[];
}
