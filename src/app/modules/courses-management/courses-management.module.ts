import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursesComponent } from './component/add-courses/add-courses.component';
import { ListeCoursesComponent } from './component/liste-courses/liste-courses.component';
import { EditCoursesComponent } from './component/edit-courses/edit-courses.component';
import { CoursesManagementRoutingModule } from './courses-management-routing.module';
import { TableModule } from 'primeng/table';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';
import { MatRadioModule} from '@angular/material/radio';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [


    AddCoursesComponent,
    ListeCoursesComponent,
    EditCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesManagementRoutingModule,

    MatTableModule,
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularSplitModule,
    TableModule
  ]
})
export class CoursesManagementModule { }
