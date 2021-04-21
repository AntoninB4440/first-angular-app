import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';
import { UserService } from '../service/user/user.service';



@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
      
  }

  saveUser(form: NgForm) {
    if (form.valid) {
      this.userService.create(form.value).subscribe(res => {
        if (res) {
          console.log(res);
          this.showSuccess();
        }
      })
    } else {
      this.showFailed();
    }
  }

  showSuccess() {
    this.toastr.success('Your user has been created correctly');
  }

  showFailed() {
    this.toastr.error('Your user hasn\'t been created');
  }

}
