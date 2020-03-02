import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserServicesService} from '../user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userModel = new  User('','','');
  public errorMessage = '';
  public ifError = false;
  constructor(private _register:UserServicesService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userModel);
    this._register.register(this.userModel)
    .subscribe(
      data => {
        console.log('Success!', data)
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.ifError = true;
        this.errorMessage = error.error;
      }
    )
  }
}
