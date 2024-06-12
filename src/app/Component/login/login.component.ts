import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:string="";
    userForm:FormGroup
  constructor(private db:FormBuilder ,private Router:Router ,private AuthService:AuthUserService){
    this.userForm=db.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }
  get userName(){
    return this.userForm.get("userName")
  }
  get password(){
    return this.userForm.get("password")
  }
  Submit(){
    if(this.userForm.valid){
      this.AuthService.login(this.userForm.value).subscribe({
        next:(response)=>{
          if(response!=null){
            localStorage.setItem('token',response.token)
            this.AuthService.saveUserData()
            this.Router.navigate(['/home'])
            this.error=""
          }
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
          this.error="من فضلك أدخل بيانات صالحة"
        }
      })
    }
  }
}
