import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  userData:any;
  role:string="";
  name:string="";
  id:string="";
  constructor(private HttpClient:HttpClient,private Router:Router) {}

  saveUserData(){
    if(localStorage.getItem('token') !=null){
      let encodeToken:any = localStorage.getItem('token');
      let decodeToken = jwtDecode(encodeToken);
      this.userData=decodeToken;
      this.role=this.userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      this.name=this.userData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      this.id=this.userData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      console.log(this.role)
      localStorage.setItem("role",this.role)
      localStorage.setItem("id",this.id)
      console.log(decodeToken)
    }
  }

  login(data:object):Observable<any>{
    return this.HttpClient.post('https://localhost:44389/api/AccountUser/login',data);
  }

  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("id")
    this.Router.navigate(['/login'])
  }

}
