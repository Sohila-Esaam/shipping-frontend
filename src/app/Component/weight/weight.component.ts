import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit{
  governorate:any;
  weightForm:FormGroup;
  constructor(private db:FormBuilder, private data:PioneerDataService){
    this.weightForm=db.group({
      id:[1],
      defaultWeight:['',[Validators.required]],
      additionalPrice:['',[Validators.required]],
    })
  }

  AddWeight(){
    if(this.weightForm.valid){
      this.data.EditWeight(this.weightForm.value).subscribe({
        next:(response)=>{
          console.log("Weight Successfully Updated",response)
          this.weightForm.reset()
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }

  get defaultWeight(){
    return this.weightForm.get('defaultWeight')
  }
  get additionalPrice(){
    return this.weightForm.get('additionalPrice')
  }
  ngOnInit(): void {

  }
}
