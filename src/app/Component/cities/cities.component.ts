import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit{
  governorates:any[]=[];
  cityForm:FormGroup;
  constructor(private db:FormBuilder, private data:PioneerDataService){
    this.cityForm=db.group({
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      pickup:['',[Validators.required]],
      governorateId:['',[Validators.required]],
    })
  }

  GEtGovernorates(){
    this.data.GetAllGovernorateWithDelete().subscribe(p=>this.governorates=p)
  }
  AddCity(){
    if(this.cityForm.valid){
      this.data.AddCity(this.cityForm.value).subscribe({
        next:(response)=>{
        console.log("City Successfully Added",response)
        this.cityForm.reset();
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }

  ngOnInit(): void {
    this.GEtGovernorates()
  }

  get name(){
    return this.cityForm.get('name')
  }
  get price(){
    return this.cityForm.get('price')
  }
  get pickup(){
    return this.cityForm.get('pickup')
  }
  get governorateId(){
    return this.cityForm.get('governorateId')
  }
}
