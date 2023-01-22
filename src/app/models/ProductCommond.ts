import {Produit} from "./produit";

export interface ProductCommand {
  product: Produit;
  quantity: number;
}
