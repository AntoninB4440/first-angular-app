import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'underscore';
import { User } from '../models/user';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  pagination: any ;
  pages: any ;
  query: any;
  isActive: string = 'All';

  constructor(private userService : UserService, private route : Router) {
  }

  ngOnInit(): void {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 6,
      totalPages: 0,
      totalElement: 0
    };
    this.populateUser();
    this.query = {q : '' , state : ''}
  }

  populateUser() {
    this.userService.get(this.pagination.currentPage, this.pagination.itemsPerPage, _.values(this.query).join("")).subscribe((response: any) => {
      this.pagination.totalElement = response.headers.get('X-Total-Count');
      this.pagination.totalPages = this.getTotalPage(response.headers.get('X-Total-Count'));
      this.pages = _.range(1, this.pagination.totalPages + 1);
      this.users = response.body;
      //console.log(response);
    }
      
    );
  }

  getTotalPage(totalItems: number): number {
    return Math.ceil(totalItems / this.pagination.itemsPerPage);
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populateUser();
  }

  filter(event: Event) {
    this.query.q = '&q=' + (event.target as HTMLInputElement).value
    this.pagination.currentPage = 1;
    this.populateUser();
  }

  filterByState(state: any = undefined) {
    this.pagination.currentPage = 1;
    if (state === undefined) {
      this.query.state = ''
    } else {
      this.query.state = '&isActive='+ state
    }
    this.populateUser();
    console.log(this.query)
  }

}
