import { Injectable } from '@angular/core';
import { Produit } from '../models/produit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  constructor(private http:HttpClient) { 
   
  }
   getAllProduits(): Observable<any>{
      return this.http.get('https://dummyjson.com/products')
    }
    getProduit(id:number){
      return this.http.get('https://dummyjson.com/products/'+id)
    }
    getItemByCategory(category:String){
      return this.http.get("https://dummyjson.com/products/category/"+category);
    }  
    getCategories(){
      return this.http.get("https://dummyjson.com/products/categories");
    }
    getProductByKey(key:any){
      return this.http.get("https://dummyjson.com/products/search?q="+key);
    }
}
