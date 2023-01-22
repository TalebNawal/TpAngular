export class Produit{
    id: number;
    title: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    images: Array<string>;
  
  
    constructor(id: number, title: string, description: string, price: number, brand: string, category: string, images: Array<string>) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.brand = brand;
      this.category = category;
      this.images = images;
    }
  
  
  
  
  
  
  }