import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogViewUserComponent } from '../dialog-view-user/dialog-view-user.component';
import { UsersService } from 'src/app/core/users.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  userList: any
  dialogRefEdit: MatDialogRef<DialogEditUserComponent>;//any
  dialogRefAdd: MatDialogRef<DialogAddUserComponent>;//any
  constructor(
    private dialog: MatDialog,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  

  getUsers() {
    this.userService.getAllUsersService().subscribe(resonse => {
      this.userList = resonse
    })
  }



  onAddUser() {
    this.dialogRefAdd = this.dialog.open(DialogAddUserComponent, {
    });

    this.dialogRefAdd.afterClosed().subscribe((result: any) => {
      this.getUsers()
    });
  }

  onEditUser(user : any) {
    
    this.dialogRefEdit = this.dialog.open(DialogEditUserComponent , {
      data : user
    })

    this.dialogRefEdit.afterClosed().subscribe((result: any) => {
      this.getUsers()
    });
  }

  deleteUser(id: Number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUserService(id).subscribe(res => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            this.getUsers()
          })
        })
      }
    });
  }






  ngAfterViewInit() {

  }















  openDialogAddUser() {
    this.dialog.open(DialogAddUserComponent, {
    });
  }

  openDialogEditUser() {
    this.dialog.open(DialogEditUserComponent, {
    });
  }

  openDialogViewUser() {
    this.dialog.open(DialogViewUserComponent, {
      maxHeight: '80vh'
    });
  }


}
