import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthServicesService} from './auth-services.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authServices:AuthServicesService,private _router:Router){

  }
  canActivate():boolean{
    if(this._authServices.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }
  }


