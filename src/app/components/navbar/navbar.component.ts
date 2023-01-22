import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
  /*showCategory(category:String){
    this.pservice.getItemByCategory(category)
    .subscribe((val:any)=>{
      this.products = val.products
    })
  }*/


