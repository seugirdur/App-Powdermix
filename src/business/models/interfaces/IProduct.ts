import Realm from "realm";

export interface IProduct {
  _id: string;
  productName: string;
  description: string;
  price: number;
  imgUrl: string;
}

export type IProductObject = IProduct & Realm.Object;
