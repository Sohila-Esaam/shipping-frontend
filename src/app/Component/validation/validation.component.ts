import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit{

  roles:any[]=[]
  constructor(private router:Router ,private data:PioneerDataService){}


  GetAddRoles(){
    this.data.GetAllRoles().subscribe({
      next:(response)=>{
        this.roles=response
      }
    })
  }

  toEdit(roleName:string){
    this.router.navigate(['/validationEdit',roleName])
  }

  ngOnInit(): void {
      this.GetAddRoles()
  }
}
