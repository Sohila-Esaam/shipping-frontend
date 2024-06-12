import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  status:any[]=[]
  role:any="";
  stringid:any=localStorage.getItem("id");
  constructor(private AuthUser:AuthUserService ,private data:PioneerDataService){
    this.role=localStorage.getItem("role");
  }
  // ------- Merchant ----------------------------------------------------------------------------------
GetMerchantCountOrders(){
  this.data.GetMerchantId(this.stringid).subscribe({
    next:(response)=>{
      console.log(response)
      this.data.GetCountOrdersForMerchantByStatus(response.id).subscribe({
        next:(response)=>{
          this.status=response
        }
      })
    }})
  }
  // ------- Employee ----------------------------------------------------------------------------------
  GetEmployeeCountOrder(){
        this.data.GetCountOrdersForEmployeeByStatus().subscribe({
          next:(response)=>{
            this.status=response
            console.log(response);
          },error:(err:HttpErrorResponse)=>{
            console.log(err.error)
          }
        })
  }
    // ------- Representative ----------------------------------------------------------------------------------
GetRepresentativeCountOrders(){
  this.data.GetRepresentativeId(this.stringid).subscribe({
    next:(response)=>{
      console.log(response)
      this.data.GetCountOrdersForRepresentativeByStatus(response.id).subscribe({
        next:(response)=>{
          this.status=response
        }
      })
    }})
  }


  ngOnInit(): void {
    if(this.role=="Merchant"){
      this.GetMerchantCountOrders()
    }else if(this.role=="Employee"||this.role=='admin'){
      this.GetEmployeeCountOrder()
    }else if(this.role=="Representative"){
      this.GetRepresentativeCountOrders()
    }
  }
}
