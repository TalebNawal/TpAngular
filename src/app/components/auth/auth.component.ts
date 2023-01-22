import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: 'auth.component.html',
  styles: [
  ]
})
export class AuthComponent {


  public nom:string="";
  public prenom:string="";
  public email:string="";
  public password:string="";
  constructor(private router: Router, private serviceUser:UserService){}
  public loginDir(){
    this.router.navigate(['auth']);
  }

  public signUp():void{
      this.serviceUser.signinService(this.nom,this.prenom,this.email,this.password);
  }
}