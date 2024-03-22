import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CoursService } from 'src/app/core/cours.service';
import { EditCoursesComponent } from '../edit-courses/edit-courses.component';
import { AddCoursesComponent } from '../add-courses/add-courses.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.scss']
})
export class ListeCoursesComponent implements OnInit {

  coursList: any
  dialogRefEdit: MatDialogRef<EditCoursesComponent>;//any
  dialogRefAdd: MatDialogRef<AddCoursesComponent>;//any
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
    this.dialogRefAdd = this.dialog.open(AddCoursesComponent, {
    });

    this.dialogRefAdd.afterClosed().subscribe((result: any) => {
      this.getCours()
    });
  }

  onEditCours(cours : any) {
    
    this.dialogRefEdit = this.dialog.open(EditCoursesComponent , {
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















  

}
