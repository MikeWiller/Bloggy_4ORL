import { Component } from '@angular/core';
import { AuthenService } from '../services/authen.service';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.css']
})
export class BarNavComponent {

  constructor(public loginService: AuthenService) { }

}
