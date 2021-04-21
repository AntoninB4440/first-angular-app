import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as _ from 'underscore';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  

  constructor(private userService : UserService) { }

  ngOnInit(): void {
      
  }

  saveUser(form: NgForm) {
    if (form.valid) {
      this.userService.create(form.value).subscribe(res => console.log(res))
    }
  }

}
