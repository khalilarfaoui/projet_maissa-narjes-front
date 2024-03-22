import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoursService } from 'src/app/core/cours.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dialog-add-cours',
  templateUrl: './dialog-add-cours.component.html',
  styleUrls: ['./dialog-add-cours.component.scss']
})
export class DialogAddCoursComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private coursServices: CoursService,
    private dialogRef: MatDialogRef<DialogAddCoursComponent>,
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
