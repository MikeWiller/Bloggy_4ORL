import { Component } from '@angular/core';
import { AuthenService } from '../services/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(
    private authenService: AuthenService,
    private router: Router) {

  }
  ngOnInit() {
    this.authenService.logOut();
    this.router.navigate(['']);
  }

}
