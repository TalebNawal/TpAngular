import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DetailComponent } from './components/detail/detail.component';

import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path:'accueil',component:AccueilComponent
  },
  {
    path:'',component:AccueilComponent
  },
  {
    path:'detail/:id',component:DetailComponent
  },
  {
    path:'auth',component:SignupComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'log',component:AuthComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
