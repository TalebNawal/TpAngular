import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) { }
  users: Array<User> =[];
  finduser:Boolean=false;
  
 signinService(nom: string, prenom: string, email: string, password: string): void {
  /* if (nom.trim()==''|| prenom.trim()=='' ||email.trim() == '' || password.trim() == ''){
      this._snackBar.open('Champs invalides','',{duration :3000});
    }
    else{*/
      this.users.push(new User(this.users.length + 1, nom, prenom, email, password));
      this.router.navigate(['auth']);
   // }
    
    for(let i=0;i<this.users.length;i++){
      console.log(this.users[i]);
    }
    
    

  }

  loginService(email: string, password: string): void {
   /* if (email.trim() == '' || password.trim() == ''){
      this._snackBar.open('Champs invalides','',{duration :3000});
    }
    else{*/
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].email===email && this.users[i].password===password){
          this.finduser=true;
          break;
        }

      }      if (this.finduser==true) {
        
        
        this.router.navigate(['accueil']);
       // this._snackBar.open(`Bienvenue`);
      }
     // else {
       // this._snackBar.open('Identifiants incorrects','Ok',{duration :3000});
    //  }
    //}
     
   

  }

}