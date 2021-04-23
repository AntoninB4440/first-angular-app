import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/user';
import { UserService } from '../service/user/user.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  @Input() user = {} as User;

  constructor( private modalService : NgbModal, private activeModal: NgbActiveModal, private userService : UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  open() {
    this.modalService.open(DeleteModalComponent);
  }

  close() {
    this.activeModal.dismiss('Cross click')
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(res => {
      if (res) {
        this.close();
        this.toastr.success('The user have been deleted correctly');
      } else {
        this.close();
        this.toastr.error('Something went rwrong during the processus');
      }
    })
  }

}
