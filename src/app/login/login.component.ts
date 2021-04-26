import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isEmpty } from 'underscore';
import { AuthentificationService } from '../service/authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ='';

  constructor(private authentificationService : AuthentificationService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authentificationService.login(this.email).subscribe(res => {
      if (res.length) {
        localStorage.setItem("token", res[0].email);
        this.toastr.success('Valid email','You will be redirected to the users list in 2 sec');
        setTimeout(() => {
          this.router.navigate(['users']);
        }, 2000);
      } else {
        this.toastr.error('This email doesn\'t exist, try again');
      }
    })
  }

}
