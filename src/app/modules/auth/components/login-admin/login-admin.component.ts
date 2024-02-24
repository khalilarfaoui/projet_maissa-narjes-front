import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  loginAdmin() {
    //login
    Swal.fire({
      title: "succès!",
      text: "Vous êtes connecté à la plateforme avec succès",
      icon: "success"
    }).then(() => {
      this.router.navigateByUrl("liste-user")
    })
  }

}
