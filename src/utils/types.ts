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
  name: string;
  price: number;
  img: string;
}
