import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/users.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private usersServices: UsersService,
    private dialogRef: MatDialogRef<DialogAddUserComponent>,
  ) { }

  addForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z\s]*$/)]],
    lastName: ["", [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-z\s]*$/)]],
    userName: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^-?\d+(\.\d+)?$/)]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    role: ["USER",],
  });


  saveUser() {
    console.log(this.addForm.value)
    this.usersServices.createUserService(this.addForm.value).subscribe(response => {
      console.log("OK", response)
      Swal.fire({
        title: "Succès !",
        text: "Votre utilisateur a été ajouté avec succès.",
        icon: "success"
      }).then(
        () => this.dialogRef.close()
      )
    })

  }



  ngOnInit(): void {
  }





}
