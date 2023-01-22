import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { ProductCommand } from '../models/ProductCommond';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productCommands: ProductCommand[] = [];

  getProductCommands(): ProductCommand[] {
    return this.productCommands;
  }

  constructor() { }

  addProduct(product: Produit){
    if (!this.isProductInCart(product)){
      let newProductCommand: ProductCommand = {product: product, quantity: 1};
      this.productCommands.push(newProductCommand);
    }
  }

  removeProduct(product: Produit) {
    let newCart: ProductCommand[] = [];
    for (const productCommand of this.productCommands) {
      if (productCommand.product?.id != product.id){
        newCart.push(productCommand);
      }
    }
    this.productCommands = newCart;
  }

  isProductInCart(product: Produit): boolean{
    for (const productCommand of this.productCommands) {
      if (product.id == productCommand.product?.id){
        return true;
      }
    }
    return false;
  }

  isCartEmpty(){
    return this.productCommands.length==0;
  }

  getCommandCount(): number{
    return this.productCommands.length;
  }

}
