import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-add-delivary',
  templateUrl: './add-delivary.component.html',
  styleUrls: ['./add-delivary.component.css']
})
export class AddDelivaryComponent {
  governorates:any[]=[]
  branches:any[]=[]
  RepresentativeForm:FormGroup;
  constructor(private db:FormBuilder,private data:PioneerDataService){
    this.RepresentativeForm=db.group({
      name:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      password:['',[Validators.required]],
      passwordConfirmed:['',[Validators.required]],
      governorateId:['',[Validators.required]],
      branchId:['',[Validators.required]],
      address:['',[Validators.required]],
      amount:['',[Validators.required]],
      type:['',[Validators.required]]
    })
  }

  GEtBranches(){
    this.data.GetAllBranches().subscribe({
      next:(response)=>{
        console.log("branch",response)
        this.branches=response
      }
    })
  }

  GEtGovernorates(){
    this.data.GetAllGovernorateWithDelete().subscribe({
      next:(response)=>{
        console.log("gover",response)
        this.governorates=response
        this.GEtBranches()
      }
    })
  }

  ngOnInit(): void {
    this.GEtGovernorates()
  }

  AddRepresentate(){
    if(this.RepresentativeForm.valid){
      console.log(this.RepresentativeForm.value)
      this.data.AddRepresentative(this.RepresentativeForm.value).subscribe({
        next:(response)=>{
          console.log("Representative SuccessFully Added",response)
          this.RepresentativeForm.reset()
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }
  }

  get name(){
    return this.RepresentativeForm.get("name")
  }
  get userName(){
    return this.RepresentativeForm.get("userName")
  }
  get email(){
    return this.RepresentativeForm.get("email")
  }
  get phoneNumber(){
    return this.RepresentativeForm.get("phoneNumber")
  }
  get password(){
    return this.RepresentativeForm.get("password")
  }
  get passwordConfirmed(){
    return this.RepresentativeForm.get("passwordConfirmed")
  }
  get branchId(){
    this.RepresentativeForm.controls['branchId'].setValue(parseInt(this.RepresentativeForm.controls['branchId'].value));
    return this.RepresentativeForm.get("branchId")
  }
  get address(){
    return this.RepresentativeForm.get("address")
  }
  get governorateId(){
    this.RepresentativeForm.controls['governorateId'].setValue(parseInt(this.RepresentativeForm.controls['governorateId'].value));
    return this.RepresentativeForm.get("governorateId")
  }
  get amount(){
    return this.RepresentativeForm.get("amount")
  }
  get type(){
    this.RepresentativeForm.controls['type'].setValue(parseInt(this.RepresentativeForm.controls['type'].value));
    return this.RepresentativeForm.get("type")
  }
}
