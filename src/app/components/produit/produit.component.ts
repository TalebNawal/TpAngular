import { Component, Input } from '@angular/core';
import { Produit } from '../../models/produit';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  @Input()
  produit!: Produit;
  constructor(private cartservice:CartService){

  }
  addToCart(){
    if (this.produit) {
      this.cartservice.addProduct(this.produit);
    }
  }
}
