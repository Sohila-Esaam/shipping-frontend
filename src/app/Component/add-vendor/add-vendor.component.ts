import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, concatMap, distinctUntilChanged, finalize, of } from 'rxjs';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit{
  governorates:any[]=[]
  Cities:any[]=[]
  branches:any[]=[]
  customSpecialPrice: any[] = [];
  MerchentForm:FormGroup;
  constructor(private db:FormBuilder,private data:PioneerDataService){
    this.MerchentForm=this.db.group({
      name:['',[Validators.required]],
      userName:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      password:['',[Validators.required]],
      passwordConfirmed:['',[Validators.required]],
      branchId:['',[Validators.required]],
      address:['',[Validators.required]],
      cityId:['',[Validators.required]],
      governorateId:['',[Validators.required]],
      storeName:['',[Validators.required]],
      returnerPercent:['',[Validators.required]],
      specialPrices:this.db.array([this.db.group({
        specialCityId: [null, Validators.required],
        specialGovernorateId: [null, Validators.required],
        specialPrice: [null, Validators.required]
      })])
    })

    // this.MerchentForm.get('governorateId')?.valueChanges.subscribe((value) => {
    //   this.GEtCities();
    // });
    this.MerchentForm.get('governorateId')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe((value) => {
      this.GEtCities();
    });

  }


  GEtCities() {
    const governorateId = this.MerchentForm.get('governorateId')?.value;
    if (governorateId) {
      this.data.GetAllCities().subscribe({
        next: (response) => {
          const citiesInGovernorate = response.filter((c: any) => c.governorateId==governorateId);
          this.Cities = citiesInGovernorate;
          console.log("Cities", citiesInGovernorate);
        }
      });
    }
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
  

  AddMerchent(){
    if(this.MerchentForm.valid){
      console.log(this.MerchentForm.value)
      this.MerchentForm.value.specialPrices.forEach((row: any) => {
        row.specialCityId = parseInt(row.specialCityId, 10);
        row.specialGovernorateId = parseInt(row.specialGovernorateId, 10);
        row.specialPrice = parseFloat(row.specialPrice);
      });
      this.data.AddMerchant(this.MerchentForm.value).subscribe({
        next:(response)=>{
          console.log("Merchent SuccessFully Added",response)
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }
  }
  merchant(){
    this.MerchentForm.value.specialPrices?.forEach((element: any) => {
      this.customSpecialPrice.push({
        specialGovernorateId: Number(element.specialGovernorateId),
        specialCityId: Number(element.specialCityId),
        specialPrice: Number(element.specialPrice)

      });
    })
    const merchantData = {
      name: this.name?.value,
      userName: this.userName?.value,
      email: this.email?.value,
      password: this.password?.value,
      passwordConfirmed: this.passwordConfirmed?.value,
      phoneNumber: this.phoneNumber?.value,
      address: this.address?.value,
      branchId: Number(this.branchId ),
      governorateId:Number( this.governorateId),
      cityId: Number(this.cityId ),
      storeName: this.storeName?.value,
      returnerPercent: this.returnerPercent?.value,
      specialPrices: this.customSpecialPrice
    }
    console.log(merchantData)
    if(this.MerchentForm.valid){
      this.MerchentForm.value.specialPrices?.forEach((element: any) => {
        this.customSpecialPrice.push({
          specialGovernorateId: Number(element.specialGovernorateId),
          specialCityId: Number(element.specialCityId),
          specialPrice: Number(element.specialPrice)
  
        });
      })
      const merchantData = {
        name: this.name?.value,
        userName: this.userName?.value,
        email: this.email?.value,
        password: this.password?.value,
        passwordConfirmed: this.passwordConfirmed?.value,
        phoneNumber: this.phoneNumber?.value,
        address: this.address?.value,
        branchId: Number(this.branchId ),
        governorateId:Number( this.governorateId),
        cityId: Number(this.cityId ),
        storeName: this.storeName?.value,
        returnerPercent: this.returnerPercent?.value,
        specialPrices: this.customSpecialPrice
      }
      this.data.AddMerchant(merchantData).subscribe({
        next:(response)=>{
          console.log("Merchent SuccessFully Added",response)
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }
  }

  addRow() {
    const specialPrice = this.db.group({
      specialCityId: [null, Validators.required],
      specialGovernorateId: [null, Validators.required],
      specialPrice: [null, Validators.required]
    });
    // (this.MerchentForm.get('specialPrices') as FormArray).push(specialPrice);
    const specialPricesArray=this.specialPrices as FormArray
    specialPricesArray.push(specialPrice)
  }
  deleteRow(id:number):void{
      this.specialPrices.removeAt(id);
  }
  get name(){
    return this.MerchentForm.get("name")
  }
  get userName(){
    return this.MerchentForm.get("userName")
  }
  get email(){
    return this.MerchentForm.get("email")
  }
  get phoneNumber(){
    return this.MerchentForm.get("phoneNumber")
  }
  get password(){
    return this.MerchentForm.get("password")
  }
  get passwordConfirmed(){
    return this.MerchentForm.get("passwordConfirmed")
  }
  get branchId(){
    this.MerchentForm.controls['branchId'].setValue(parseInt(this.MerchentForm.controls['branchId'].value));
    return this.MerchentForm.get("branchId")
  }
  get address(){
    return this.MerchentForm.get("address")
  }
  get cityId(){
    this.MerchentForm.controls['cityId'].setValue(parseInt(this.MerchentForm.controls['cityId'].value));
    return this.MerchentForm.get("cityId")
  }
  get governorateId(){
    this.MerchentForm.controls['governorateId'].setValue(parseInt(this.MerchentForm.controls['governorateId'].value));
    return this.MerchentForm.get("governorateId")
  }
  get storeName(){
    return this.MerchentForm.get("storeName")
  }
  get returnerPercent(){
    return this.MerchentForm.get("returnerPercent")
  }
  get specialPrices(): FormArray{
    return this.MerchentForm.get("specialPrices") as FormArray;
  }
  get specialPrice(){
    // this.MerchentForm.controls['specialPrice'].setValue(parseInt(this.MerchentForm.controls['specialPrice'].value));
    // return this.MerchentForm.get("specialPrices")?.get('specialPrice');
    return this.MerchentForm.get("specialPrice");
  }
  get specialGovernorateId(){
    // this.MerchentForm.controls['specialGovernorateId'].setValue(parseInt(this.MerchentForm.controls['specialGovernorateId'].value));
    // return this.MerchentForm.get("specialPrices")?.get('specialGovernorateId');
    return this.MerchentForm.get("specialGovernorateId");
  }
  get specialCityId(){
    // this.MerchentForm.controls['specialCityId'].setValue(parseInt(this.MerchentForm.controls['specialCityId'].value));
    // return this.MerchentForm.get("specialPrices")?.get('specialCityId');
    return this.MerchentForm.get("specialCityId");
  }
  // get specialPrice(){
  //   const price = this.MerchentForm.get("specialPrices")?.get('specialPrice')?.value;
  //   return typeof price === 'string' ? parseInt(price) : price;
  // }
}
