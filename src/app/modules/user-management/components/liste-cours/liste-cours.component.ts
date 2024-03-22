import { Component, OnInit } from '@angular/core';
import { DialogAddCoursComponent } from '../dialog-add-cours/dialog-add-cours.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogEditCoursComponent } from '../dialog-edit-cours/dialog-edit-cours.component';
 

import { CoursService } from 'src/app/core/cours.service';
import Swal from 'sweetalert2';
import { from } from 'rxjs';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss']
})
 export class ListeCoursComponent implements OnInit {

  coursList: any
  dialogRefEdit: MatDialogRef<DialogEditCoursComponent>;//any
  dialogRefAdd: MatDialogRef<DialogAddCoursComponent>;//any
  constructor(
    private dialog: MatDialog,
    private coursService: CoursService
  ) { }

  ngOnInit(): void {
    this.getCours()
  }

  

  getCours() {
    this.coursService.getAllCoursService().subscribe(resonse => {
      this.coursList = resonse
      console.log(this.coursList);
      
    })
  }



  onAddCours() {
    this.dialogRefAdd = this.dialog.open(DialogAddCoursComponent, {
    });

    this.dialogRefAdd.afterClosed().subscribe((result: any) => {
      this.getCours()
    });
  }

  onEditCours(cours : any) {
    
    this.dialogRefEdit = this.dialog.open(DialogEditCoursComponent , {
      data : cours
    })

    this.dialogRefEdit.afterClosed().subscribe((result: any) => {
      this.getCours()
    });
  }

  deleteCours(id: Number) {
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
        this.coursService.deleteCoursService(id).subscribe(res => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            this.getCours()
          })
        })
      }
    });
  }






  ngAfterViewInit() {

  }















  openDialogAddCours() {
    this.dialog.open(DialogAddCoursComponent, {
    });
  }

  openDialogEditCours() {
    this.dialog.open(DialogEditCoursComponent, {
    });
  }
}
