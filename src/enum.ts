export enum CustomerType {
  REGULAR = "REGULAR",
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
}
export type Customer = {
  id: number;
  name: string;
  type: CustomerType;
};
