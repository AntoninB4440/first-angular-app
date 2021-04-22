import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  user: any;

  constructor(private userService: UserService, private route: ActivatedRoute,private toastr: ToastrService) {
    
   }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getById(id).subscribe(res => {
      this.user = res[0];
      console.log(this.user)
    }
    );
  }

  onSubmit() {
    this.userService.put(this.user).subscribe( res => console.log(res));
  }

  

}
