import { ErrorPageComponent } from './error-page/error-page.component';
import { AffiListComponent } from './affi-list/affi-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGaurdService } from './services/auth-gaurd.service';

const routes: Routes = [

   { path: '', component: AcceuilComponent }, 
   { path: 'admin', component: AdminComponent,  canActivate: [AuthGaurdService]}, 
   { path: 'ajouter', component: AjoutPostComponent,  canActivate: [AuthGaurdService]}, 
   { path: 'edit/:id', component: EditPostComponent,  canActivate: [AuthGaurdService]}, 
   {path: 'detail/:id', component:DetailComponent,},
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
   {path:'**',component:ErrorPageComponent }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
