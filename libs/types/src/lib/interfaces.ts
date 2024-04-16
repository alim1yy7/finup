export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  // transactions: ITransaction[];
}
export interface ITransaction {
  id: string;
  amount: number;
  name: string;
  date: Date;
  categoty?: string;
  // user: IUser;
  file?: string;
}
export interface ChartData {
  date: Date;
  amount: number;
}
export interface ICategory {
  id: string;
  label: string;
  transactions: ITransaction[];
}
