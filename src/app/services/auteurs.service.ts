import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuteursService {
  baseAuthorUrl =" http://103502.bloggy.ecole-it.devigne.space/authors/"


  constructor(private http : HttpClient) { }
  getAuthors() {
    return this.http.get(this.baseAuthorUrl);
  }
}
