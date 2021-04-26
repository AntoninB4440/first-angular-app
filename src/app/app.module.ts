import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { UsersAddComponent } from './users-add/users-add.component'
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModifyComponent } from './user-modify/user-modify.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { LoginComponent } from './login/login.component';
import { EmailInterceptor } from './interceptor/http.interceptor';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UsersAddComponent,
    UserModifyComponent,
    DeleteModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule,
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: EmailInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
