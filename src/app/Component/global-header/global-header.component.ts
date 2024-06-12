import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit{
  role:any="";
  constructor(private AuthUser:AuthUserService){
    this.role=localStorage.getItem("role");
  }

  logOut(){
    this.AuthUser.logOut()
  }
  ngOnInit(): void {
    this.role=localStorage.getItem("role");
  }
}
