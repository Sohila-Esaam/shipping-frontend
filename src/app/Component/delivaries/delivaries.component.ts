import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-delivaries',
  templateUrl: './delivaries.component.html',
  styleUrls: ['./delivaries.component.css']
})
export class DelivariesComponent implements OnInit{
  representatives:any[]=[]
  constructor(private Router:Router,private data:PioneerDataService){}

  taAddDelivary(){
    this.Router.navigate(['addDelivary'])
  }

  GetAllRepresentatives(){
    this.data.GetAllRepresentative().subscribe({
      next:(response)=>{
        console.log(response)
        this.representatives=response
      },error:(err:HttpErrorResponse)=>{
        console.log(err.error)
      }
    })
  }

  ngOnInit(): void {
    this.GetAllRepresentatives()
  }
}
