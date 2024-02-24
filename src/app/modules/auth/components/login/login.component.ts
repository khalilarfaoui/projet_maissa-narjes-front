import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('containerForm') containerForm: ElementRef | undefined;
  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  gotoacc() {
    this.router.navigate(["/acceuil"])
  }

  signUp(){

    const element = this.containerForm?.nativeElement
    element.classList.add('active')
    // element.classList.remove('active')
  }

  login(){
    const element = this.containerForm?.nativeElement
    element.classList.remove('active')
  }

}
