import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultUserComponent } from './components/consult-user/consult-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'details/:cc',
    component: DetailsComponent
  },
  {
    path: 'delete',
    component: ConsultUserComponent
  },
  {
    path: 'consult',
    component: ConsultUserComponent
  },
  {
    path: 'create',
    component: UserFormComponent
  },
  {
    path: 'edit/:cc',
    component: UserFormComponent
  },
  {
    path: '**',
    redirectTo: 'consult'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
