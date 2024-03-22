import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCoursesComponent } from './component/liste-courses/liste-courses.component';


const routes: Routes = [
  {path : "list-all-courses" , component : ListeCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagementRoutingModule { }
