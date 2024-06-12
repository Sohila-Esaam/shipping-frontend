import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  branches:any[]=[]
  EmployeeForm:FormGroup;
  constructor(private db:FormBuilder,private data:PioneerDataService){
    this.EmployeeForm=db.group({
      name:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      password:['',[Validators.required]],
      passwordConfirmed:['',[Validators.required]],
      address:['',[Validators.required]],
      branchId:['',[Validators.required]]
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

  ngOnInit(): void {
    this.GEtBranches()
  }

  AddEmployee(){
    if(this.EmployeeForm.valid){
      console.log(this.EmployeeForm.value)
      this.data.AddEmployee(this.EmployeeForm.value).subscribe({
        next:(response)=>{
          console.log("Employee SuccessFully Added",response)
          this.EmployeeForm.reset();
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }
  }

  get name(){
    return this.EmployeeForm.get("name")
  }
  get userName(){
    return this.EmployeeForm.get("userName")
  }
  get email(){
    return this.EmployeeForm.get("email")
  }
  get phoneNumber(){
    return this.EmployeeForm.get("phoneNumber")
  }
  get password(){
    return this.EmployeeForm.get("password")
  }
  get passwordConfirmed(){
    return this.EmployeeForm.get("passwordConfirmed")
  }
  get address(){
    return this.EmployeeForm.get("address")
  }
  get branchId(){
    this.EmployeeForm.controls['branchId'].setValue(parseInt(this.EmployeeForm.controls['branchId'].value));
    return this.EmployeeForm.get("branchId")
  }
}
