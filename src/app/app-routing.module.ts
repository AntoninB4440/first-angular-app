import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { UsersAddComponent } from './users-add/users-add.component';

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "users/add",
    component: UsersAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path : "users/modify/:id" , component : UserModifyComponent, canActivate: [AuthGuard]
  },
  {
    path : "login" , component : LoginComponent
  },
  {
    path : "**" , redirectTo : "login"
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
