import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.toastr.success('Log out','You will be redirected to the login page in 2 sec');
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }

}
