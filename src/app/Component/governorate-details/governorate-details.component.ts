import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-governorate-details',
  templateUrl: './governorate-details.component.html',
  styleUrls: ['./governorate-details.component.css']
})
export class GovernorateDetailsComponent implements OnInit{
  id:number=0;
  gover:any;
  constructor(private data:PioneerDataService,private activeRoute:ActivatedRoute){}

  getGovernorate(){
    this.data.GetGovernorateById(this.id).subscribe({
      next:(response)=>{
        this.gover=response;
      },error:(err:HttpErrorResponse)=>{
        console.log(err.error.message)
      }
    })
  }

  ngOnInit(): void {
    this.id=Number(this.activeRoute.snapshot.paramMap.get('id'))
    this.getGovernorate()
  }
}
