import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { UsersAddComponent } from './users-add/users-add.component';

const routes: Routes = [
  {
    path : "users" , component : UserListComponent 
  },
  {
    path : "users/add" , component : UsersAddComponent 
  },
  {
    path : "users/modify/:id" , component : UserModifyComponent
  },
  {
    path : "users/login" , component : LoginComponent
  },
  {
    path : "**" , redirectTo : "users"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
