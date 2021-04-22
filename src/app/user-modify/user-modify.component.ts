import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  user = {} as User;

  constructor(private userService: UserService, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) {
   
   }

  ngOnInit(): void {
    this.populateUser();
  }

  populateUser() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getById(id).subscribe(res => {
      this.user = res;
      console.log('user',this.user);
    }
    );
  }

  onSubmit() {
    this.userService.put(this.user).subscribe(res => {
      if (res) {
        console.log(res);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(['users']);
      }, 3000);  //5s
      } else {
        this.toastr.error('Your user Something went wrong during the editing');
      }
    })
  }
  
  showSuccess() {
    this.toastr.success('Your user has been edited correctly','You will be redirected to the users list in 3 sec');
  }

  test(date: Date) {
    console.log(date)
  }

  

}
