import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/users.service';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
 
  constructor(
    private fb: FormBuilder , 
    private usersServices : UsersService
  ) { }

  addForm = this.fb.group({
    userName: [""],
    firstName: [""],
    lastName: [""],
    email: [""],
    phone: [""],
    password: [""],
    role: ["USER"],
  });


  saveUser() {
    console.log(this.addForm.value)
    this.usersServices.createUserService(this.addForm.value).subscribe(response => {
      console.log("OK" , response)
    })

  }



  ngOnInit(): void {
  }


}
