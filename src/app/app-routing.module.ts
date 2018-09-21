import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./pages/login/login.component";
import { UsersComponent } from "./pages/users/users.component";
import { RegisterComponent } from "./pages/register/register.component";


const routes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }