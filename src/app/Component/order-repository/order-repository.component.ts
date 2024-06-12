import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-order-repository',
  templateUrl: './order-repository.component.html',
  styleUrls: ['./order-repository.component.css']
})
export class OrderRepositoryComponent implements OnInit{
  orders:any[]=[]

  searchForm:FormGroup;
  constructor(private data:PioneerDataService,private db:FormBuilder){
    this.searchForm=db.group({
      state:['',[Validators.required]],
      startDate:['',[Validators.required]],
      endDate:['',[Validators.required]]
    });
  }

  getAllOrders(){
    this.data.GetAllordersRepo().subscribe({
      next:(response)=>{
        this.orders=response
        console.log(response)
      }
    })
  }

  changeData(){
    const state= parseInt(this.searchForm.value.state, 10)
    const start= this.searchForm.value.startDate
    const end= this.searchForm.value.endDate
    if(this.searchForm.valid){
      this.data.GetAllordersRepoByStatusAndDate(start,end,state).subscribe({
        next:(response)=>{
          this.orders=response
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }

  }

  ngOnInit(): void {
      this.getAllOrders()
  }

}
