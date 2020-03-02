import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { AuthServicesService } from './auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req,next){
    let AuthService = this.injector.get(AuthServicesService);
    let token = AuthService.getToken();
    if(!token){
      let tokenizedReq = req.clone({
        setHeaders:{
          'auth-token' : ''
        }
      })
      return next.handle(tokenizedReq);   
    }
    else{
      let tokenizedReq = req.clone({
        setHeaders:{
          'auth-token' : token
        }
      })
      return next.handle(tokenizedReq); 
    }
 
     
  }
}
