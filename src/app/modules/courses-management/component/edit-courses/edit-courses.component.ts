

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursService } from 'src/app/core/cours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {

  constructor(
    private fb: FormBuilder , 
    private coursServices : CoursService,
    private dialogRef: MatDialogRef<EditCoursesComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
  }

  editForm = this.fb.group({
    id : [this.data.id],
    Titre: [this.data.Titre],
    Description: [this.data.Description],
    
  });

  editCours(){

    console.log(this.editForm.value)
    this.coursServices.updateCoursService(this.editForm.value).subscribe(res=>{
     
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


