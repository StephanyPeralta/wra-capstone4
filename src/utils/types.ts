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
  description?: string;
  price: number;
  category: string;
  sku?: string;
}

export interface ProductsState {
  searchTerm: string;
  activeCategories: string[];
}

export interface ApiBanner {
  id: string;
  data: {
    main_image: {
      url: string;
    };
    title: string;
    description: [
      {
        text: string;
      }
    ];
  };
}

export interface ApiBannersData {
  results: ApiBanner[];
}

export interface ApiCategory {
  id: string;
  data: {
    main_image: {
      url: string;
    };
    name: string;
  };
}

export interface ApiCategoriesData {
  results: ApiCategory[];
}

export interface ApiProduct {
  id: string;
  data: {
    mainimage: {
      url: string;
    };
    name: string;
    price: number;
    category: {
      slug: string;
    };
  };
}

export interface ApiProductsData {
  results: ApiProduct[];
}
