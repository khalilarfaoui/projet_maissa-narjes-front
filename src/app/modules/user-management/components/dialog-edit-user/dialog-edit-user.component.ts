import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder , 
    private usersServices : UsersService,
    private dialogRef: MatDialogRef<DialogEditUserComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
  }

  editForm = this.fb.group({
    id : [this.data.id],
    userName: [this.data.userName],
    firstName: [this.data.firstName],
    lastName: [this.data.lastName],
    email: [this.data.email],
    phone: [this.data.phone],
   
    role: [this.data.role],
  });

  editUser(){

    console.log(this.editForm.value)
    this.usersServices.updateUserService(this.editForm.value).subscribe(res=>{
     
      Swal.fire({
        title: "Succès !",
        text: "Votre utilisateur a été modifié avec succès.",
        icon: "success"
      }).then(
        () => this.dialogRef.close()
      )
    })
  }


}
