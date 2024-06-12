import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees:any[]=[]
  constructor(private Router:Router,private data:PioneerDataService){}

  toAddEmployee(){
    this.Router.navigate(['addEmployee'])
  }
  GetAllEmployees(){
    this.data.GetAllEmployee().subscribe({
      next:(response)=>{
        this.employees=response
      },error:(err:HttpErrorResponse)=>{
      console.log(err.error)
      }
    })
  }

  ngOnInit(): void {
    this.GetAllEmployees()
  }
}
