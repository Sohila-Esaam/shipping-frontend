import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-governorates',
  templateUrl: './governorates.component.html',
  styleUrls: ['./governorates.component.css']
})
export class GovernoratesComponent implements OnInit{
  governoretes:any[]=[];
  flag:boolean=false;
  btnText:string='إضافة محافظة';
  governorateForm:FormGroup;

  constructor(private db:FormBuilder, private data:PioneerDataService,private Router:Router){
    this.governorateForm=db.group({
      name:['',[Validators.required]],
    })
  }

  GetGovernorates(){
    this.data.GetAllGovernorateWithDelete().subscribe({
      next:(response)=>{
        this.governoretes=response
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.error.message)
      }
    })
  }
  goverTrackBy(index:number,gover:any){
    return gover.id;
  }

  GoToGoverDetails(id:number){
    this.Router.navigate(['goverDetails',id])
  }

  ngOnInit(): void {
    this.GetGovernorates()
  }


  deleteGovernorate(id:number){
    this.data.DeleteGovernorate(id).subscribe({
      next:(response)=>{
        console.log('Governorate deleted successfully', response);
        this.GetGovernorates()
      },error:(err:HttpErrorResponse)=>{
        console.log(err.error.message)
      }
    })
    this.GetGovernorates()
  }

  AddGovernorate(){
    if(this.governorateForm.valid){
      console.log(this.governorateForm.value)
      this.data.AddGovernorate(this.governorateForm.value).subscribe({
        next:(response)=>{
          console.log(response)
          this.governorateForm.reset()
          this.GetGovernorates()
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }

  btnClick(){
    this.flag=!this.flag;
    if(!this.flag){
      this.btnText='إضافة محافظة'
    }else{
      this.btnText='إخفاء '
    }
  }

  get name(){
    return this.governorateForm.get('name')
  }
}
