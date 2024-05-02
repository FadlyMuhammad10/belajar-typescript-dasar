export type ID = number | string;

export type Category = {
  id: ID;
  name: string;
  description?: string; //optional property
};
export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; //optional property
};
