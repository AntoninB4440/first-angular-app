import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { isEmpty } from 'underscore';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ='';

  constructor(private userService : UserService, private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.getByEmail(this.email).subscribe(res => {
      if (!isEmpty(res)) {
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
