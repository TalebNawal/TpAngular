export class User{

    id:number| undefined;
    name:string| undefined;
    prenom:string| undefined;
    email:string| undefined;
    password:string| undefined;
    constructor(id:number,name:string,prenom:string,email:string,password:string){
        this.id=id,
        this.email=email;
        this.password=password;
        this.name=name;
        this.prenom=prenom;
    }
    
}