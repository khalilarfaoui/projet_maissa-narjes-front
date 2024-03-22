import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUserComponent } from './components/liste-user/liste-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListeCoursComponent } from './components/liste-cours/liste-cours.component';

const routes: Routes = [
  { path: 'liste-user', component: ListeUserComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'liste-cours', component: ListeCoursComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
      
    ]
  })

export class UserManagementRoutingModule { }