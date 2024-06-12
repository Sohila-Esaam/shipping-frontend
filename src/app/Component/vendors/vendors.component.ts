import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit{
  merchants:any[]=[]
  constructor(private Router:Router,private data:PioneerDataService){}

  taAddVendor(){
    this.Router.navigate(['addVendor'])
  }

  GetAllMerchants(){
    this.data.GetAllMerchant().subscribe({
      next:(response)=>{
        this.merchants=response
      },error:(err:HttpErrorResponse)=>{
      console.log(err.error)
      }
    })
  }

  ngOnInit(): void {
    this.GetAllMerchants()
  }
}
