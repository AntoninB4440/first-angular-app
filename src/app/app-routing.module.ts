import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UsersAddComponent } from './users-add/users-add.component';

const routes: Routes = [
  {
    path : "users" , component : UserListComponent 
  },
  {
    path : "users/add" , component : UsersAddComponent 
  },
  {
    path : "**" , redirectTo : "users"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
