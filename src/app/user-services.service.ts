import { Injectable } from '@angular/core';
import{HttpClient, HttpResponse,HttpHeaders} from '@angular/common/http';
import { Login } from './login';
import { User } from './user';
import { Observable} from 'rxjs/Observable';
import { PostData } from '../app/postdata/post-data';

@Injectable({
  providedIn: 'root'
})

export class UserServicesService {
  
  _url = 'http://localhost:3000/users';
 

  constructor(private _http:HttpClient) {}
    register(user: User)
    {
      return this._http.post<any>(this._url,user);
    }
    login(login: Login )
    {
      return this._http.post<any>('http://localhost:3000/users/login',login);
    }
    loginobserve(login: Login):Observable<HttpResponse<any>>{
      return this._http.post('http://localhost:3000/users/login',login,{observe: 'response',headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }
    postContent(postData : PostData){
      return this._http.post<any>('http://localhost:3000/post',postData);
        }
   
}
