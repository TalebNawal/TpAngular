import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from '../../services/produit.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private route:ActivatedRoute,
    private produitservice:ProduitService,private cartservice:CartService){}
  @Input()
  produit!: Produit;

  ngOnInit(): void {
    const id:number=this.route.snapshot.params['id'];
    this.produitservice.getProduit(id).subscribe((data:any) => {
     this.produit = data;})
   }
   addToCart(){
    if (this.produit) {
      this.cartservice.addProduct(this.produit);
    }
  }
}
