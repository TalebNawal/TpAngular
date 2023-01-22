import { Component, OnInit } from '@angular/core';
import { ProductCommand } from 'src/app/models/ProductCommond';
import { Produit } from 'src/app/models/produit';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productCommands: ProductCommand[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productCommands = this.cartService.getProductCommands();
  }
  removeFromCart(product: Produit){
    this.cartService.removeProduct(product);
    this.ngOnInit();
  }

}
