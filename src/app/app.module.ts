import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutPostComponent } from './ajout-post/ajout-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AffiListComponent } from './affi-list/affi-list.component';
import { BarNavComponent } from './bar-nav/bar-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    AdminComponent,
    AjoutPostComponent,
    EditPostComponent,
    AffiListComponent,
    BarNavComponent,
    DetailComponent,
    ErrorPageComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
