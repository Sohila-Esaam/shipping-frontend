import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})

export class BranchesComponent implements OnInit{

  branches:any[]=[];
  flag:boolean=false;
  btnText:string='إضافة فرع';
  branchForm:FormGroup;

  constructor(private db:FormBuilder, private data:PioneerDataService,private Router:Router){
    this.branchForm=db.group({
      name:['',[Validators.required]],
    })
  }

  GetBranches(){
    this.data.GetAllBranches().subscribe({
      next:(response)=>{
        console.log(response)
        this.branches=response
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err.error.message)
      }
    })
  }
  // goverTrackBy(index:number,branch:any){
  //   return branch.id;
  // }

  GoToBranchDetails(id:number){
    // this.Router.navigate(['branch',id])
  }

  ngOnInit(): void {
    this.GetBranches()
  }


  deleteBranch(id:number){
    this.data.DeleteBranch(id).subscribe({
      next:(response)=>{
        console.log('Branch deleted successfully', response);
        this.GetBranches()
      },error:(err:HttpErrorResponse)=>{
        console.log(err.error.message)
      }
    })
    this.GetBranches()
  }

  AddBranch(){
    if(this.branchForm.valid){
      console.log(this.branchForm.value)
      this.data.AddBranch(this.branchForm.value).subscribe({
        next:(response)=>{
          console.log("Successfully Added",response)
          this.branchForm.reset()
          this.GetBranches()
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }

  btnClick(){
    this.flag=!this.flag;
    if(!this.flag){
      this.btnText='إضافة فرع'
    }else{
      this.btnText='إخفاء '
    }
  }

  get name(){
    return this.branchForm.get('name')
  }

}
