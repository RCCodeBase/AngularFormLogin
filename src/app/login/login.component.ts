import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import {UserServicesService} from '../user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel = new Login('','');
  public errorMessage = '';
  public ifError = false;
  constructor(private _register:UserServicesService, private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(this.loginModel);
    this._register.loginobserve(this.loginModel)
    .subscribe(
      resp => {
        // display its headers
        console.log(resp.headers.get('token'));
        localStorage.setItem('auth-token',resp.headers.get('token'));
        this.router.navigate(['/post']);
      }
      ,
      // data => {
      //   console.log('Success!', data)
      //   this.router.navigate(['/post']);
      // },
      error => {
        console.log(error);
        this.ifError = true;
        this.errorMessage = error.error;
      }
    )
  }

}
