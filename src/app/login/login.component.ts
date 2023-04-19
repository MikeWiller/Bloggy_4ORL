import { Component } from '@angular/core';
import { AuthenService } from '../services/authen.service';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  invalidLogin = false;

  successMessage = "Authentication success !!";
  errorMessage = "Invalid username or password";

  constructor(private router: Router,
    private loginservice: AuthenService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }


}
