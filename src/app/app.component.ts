import { Component } from '@angular/core';
import { AuthServicesService }from './auth-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngBootLog';
  constructor(public _authserv:AuthServicesService){

  }
}
