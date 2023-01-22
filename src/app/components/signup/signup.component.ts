import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private router: Router, private userservice:UserService) { }
  user = new User(1,'taira','karima','karima@gmail.com','mdp2023');
  public email:string="";
  public password:string="";
  public errorMessage:string="";

  public signupDir():void{
    this.router.navigate(['log']);
   }
   public login(): void {

    this.userservice.loginService(this.email,this.password);
 }
}
