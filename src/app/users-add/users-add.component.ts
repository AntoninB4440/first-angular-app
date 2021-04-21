import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';
import { UserService } from '../service/user/user.service';



@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  

  constructor(private userService : UserService, private toastr: ToastrService, private router : Router) { }

  ngOnInit(): void {
      
  }

  saveUser(form: NgForm) {
    if (form.valid) {
      this.userService.create(form.value).subscribe(res => {
        if (res) {
          console.log(res);
          this.showSuccess();
          setTimeout(() => {
            this.router.navigate(['users']);
        }, 5000);  //5s
        }
      })
    } else {
      this.showFailed();
    }
  }

  showSuccess() {
    this.toastr.success('Your user has been created correctly','You will be redirected to the users list');
  }

  showFailed() {
    this.toastr.error('Your user hasn\'t been created');
  }

}
