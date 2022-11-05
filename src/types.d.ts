export interface  Order {
  id: number;
  name: string;
  price: number;
  image?: string;
  quantity?: number;
  totalSum?: number;
}