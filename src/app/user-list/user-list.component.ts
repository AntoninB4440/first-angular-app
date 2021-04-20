import { Component, OnInit } from '@angular/core';
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
  pagination: any;
  pages: any;
  query: any = '';
  isActive: string = 'All';

  constructor(private userService : UserService) {
  }

  ngOnInit(): void {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 6,
      totalPages: 0,
      totalElement: 0
      
    }
    this.populateUser();
  }

  populateUser() {
    this.userService.get(this.pagination.currentPage, this.pagination.itemsPerPage, this.query, this.isActive).subscribe((response: any) => {
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

  filter(event: any) {
    this.query = event.target.value
    this.pagination.currentPage = 1;
    this.populateUser();
  }

  showActive(state: string) {
    this.isActive = state;
    this.pagination.currentPage = 1;
    this.populateUser();
  }

}
