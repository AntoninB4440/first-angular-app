import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private service : UserService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe(data => this.users = data);
  }

}
