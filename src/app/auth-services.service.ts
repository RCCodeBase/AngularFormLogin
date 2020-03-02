import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private router:Router) { }

  loggedIn(){
    return !!localStorage.getItem('auth-token');
  }
  getToken(){
    return localStorage.getItem('auth-token');

  }
  logoutUser(){
    localStorage.removeItem('auth-token');
    this.router.navigate(['/login']);
  }
}
