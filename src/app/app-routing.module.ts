import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopsComponent } from '../Shops/Shops.component';
import { HomeComponent } from '../Home/Home.component';
import { SignUpComponent } from '../SignUp/SignUp.component';
import { LoginComponent } from '../Login/Login.component';

const routes: Routes = [
  {path: 'shops-component', component: ShopsComponent},
  {path: 'home-component', component: HomeComponent},
  {path: 'signup-component', component: SignUpComponent},
  {path: 'login-component', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
