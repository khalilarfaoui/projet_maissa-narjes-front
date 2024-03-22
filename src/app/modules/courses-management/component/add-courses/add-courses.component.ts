

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoursService } from 'src/app/core/cours.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private coursServices: CoursService,
    private dialogRef: MatDialogRef<AddCoursesComponent>,
  ) { }

  addForm = this.fb.group({
    titre: ["",],
    description: ["",],

  });


  saveCours() {
    console.log(this.addForm.value)
    this.coursServices.createCoursService(this.addForm.value).subscribe(response => {
      console.log("OK", response)
      Swal.fire({
        title: "Succès !",
        text: "Votre cours a été ajouté avec succès.",
        icon: "success"
      }).then(
        () => this.dialogRef.close()
      )
    })

  }



  ngOnInit(): void {
  }





}

