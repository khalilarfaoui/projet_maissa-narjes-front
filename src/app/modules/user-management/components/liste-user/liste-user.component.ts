import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogViewUserComponent } from '../dialog-view-user/dialog-view-user.component';
import { UsersService } from 'src/app/core/users.service';




@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {
  userList : any
  constructor(
    private dialog: MatDialog,
    private userService : UsersService
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getAllUsersService().subscribe(resonse => {
      this.userList = resonse
    })
  }



  onAddUser(){
    this.dialog.open(DialogAddUserComponent, {
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
