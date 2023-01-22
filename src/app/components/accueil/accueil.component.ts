import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../models/produit';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  produits:Produit[]=[]; 
  categories:string[]=[]
  word:string=""
  router: any;
constructor(private produitservice: ProduitService){

}
  ngOnInit(): void {
   this.produitservice.getAllProduits().subscribe((data:any) => {
    this.produits = data.products;})
    this.produitservice.getCategories()
          .subscribe((val : any)=>{
            this.categories = val
          })
  }
  showCategory(category:String){
    this.produitservice.getItemByCategory(category)
    .subscribe((val:any)=>{
      this.produits = val.products
    })
  }
  search(){
    this.produitservice.getProductByKey(this.word)
    .subscribe((val:any)=>{
      this.produits = val.products
    })
  }
   
    }

