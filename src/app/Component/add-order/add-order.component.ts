import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit{
  stringid:any=localStorage.getItem("id");
  id:number=0;
  adress:any=null;
  phone:any=null;
  governorates:any[]=[]
  Cities:any[]=[]
  branches:any[]=[]
  error:string='';
  orderForm:FormGroup;
  constructor(private db:FormBuilder ,private auth:AuthUserService,private data:PioneerDataService){
    this.orderForm=db.group({
      merchantId:[],
      orderType:['',[Validators.required]],
      paymentType:['',[Validators.required]],
      clientName:['',[Validators.required]],
      firstPhoneNumber:['',[Validators.required,Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      secondPhoneNumber:['',[Validators.pattern(/^(010|011|012|015)\d{8}$/)]],
      email:['',[Validators.required,Validators.email]],
      governorateId:['',[Validators.required]],
      cityId:['',[Validators.required]],
      street:[''],
      deliverToVillage:[false],
      typeOfDelevery:['',[Validators.required]],
      branchId:['',[Validators.required]],
      notes:[''],
      products:db.array([this.db.group({
        name: ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        price: ['', [Validators.required]],
        weight: ['', [Validators.required]]
      })]),
      maddress:[null],
      mphone:[null]
      
    })

    this.orderForm.get('governorateId')?.valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe((value) => {
      this.GEtCities();
    });

  }
  GEtCities() {
    const governorateId = this.orderForm.get('governorateId')?.value;
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
        this.GetMercahntData()
      }
    })
  }

  GEtGovernorates(){
    this.data.GetAllGovernorateWithCities().subscribe({
      next:(response)=>{
        console.log("gover",response)
        this.governorates=response
        this.GEtBranches()
        
      }
    })
  }
  
  GetMercahntData(){
    this.data.GetMerchantId(this.stringid).subscribe({
      next:(response)=>{
        console.log(response)
        this.id=response.id;
        this.phone=response.phone;
        this.adress=response.adress;
        this.orderForm.get('merchantId')?.setValue(this.id);
        this.orderForm.get('maddress')?.setValue(this.adress);
        this.orderForm.get('mphone')?.setValue(this.phone);
      }
    })
  }

  ngOnInit(): void {
    this.GEtGovernorates()
    // this.GetMercahntData()
  }


  addRow() {
    const product = this.db.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      weight: ['', [Validators.required]]
    });
    const ProductsArray=this.products as FormArray
    ProductsArray.push(product)
  }
  deleteRow(id:number):void{
    if(this.products.length == 1){
      this.error="يجب ان تحتوى المنتجات على منتج واحد على الاقل"
    }else{
      this.error=""
      this.products.removeAt(id);
    }
  }
  order(){
    // this.orderForm.value.products.forEach((row: any) => {
    //   row.name = row.name;
    //   row.quantity = parseInt(row.quantity, 10);
    //   row.weight = parseInt(row.weight, 10);
    //   row.price = parseFloat(row.price);
    // });
    
    // console.log(this.orderForm.value)
    // // ||| delete top department |||
    if(this.orderForm.valid){
      console.log(this.orderForm.value)
      this.orderForm.value.products.forEach((row: any) => {
        row.name = row.name;
        row.quantity = parseInt(row.quantity, 10);
        row.weight = parseInt(row.weight, 10);
        row.price = parseFloat(row.price);
      });
      this.data.AddOrder(this.orderForm.value).subscribe({
        next:(response)=>{
          console.log("Order SuccessFully Added",response)
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error)
        }
      })
    }
  }


  get orderType(){
    this.orderForm.controls['orderType'].setValue(parseInt(this.orderForm.controls['orderType'].value));
    return this.orderForm.get("orderType")
  }
  get paymentType(){
    this.orderForm.controls['paymentType'].setValue(parseInt(this.orderForm.controls['paymentType'].value));
    return this.orderForm.get("paymentType")
  }
  get clientName(){
    return this.orderForm.get("clientName")
  }
  get merchantId(){
    return this.orderForm.get("merchantId")
  }
  get firstPhoneNumber(){
    return this.orderForm.get("firstPhoneNumber")
  }
  get secondPhoneNumber(){
    return this.orderForm.get("secondPhoneNumber")
  }
  get email(){
    return this.orderForm.get("email")
  }
  get governorateId(){
    this.orderForm.controls['governorateId'].setValue(parseInt(this.orderForm.controls['governorateId'].value));
    return this.orderForm.get("governorateId")
  }
  get cityId(){
    this.orderForm.controls['cityId'].setValue(parseInt(this.orderForm.controls['cityId'].value));
    return this.orderForm.get("cityId")
  }
  get street(){
    return this.orderForm.get("street")
  }
  get deliverToVillage(){
    return this.orderForm.get("deliverToVillage")
  }
  get typeOfDelevery(){
    this.orderForm.controls['typeOfDelevery'].setValue(parseInt(this.orderForm.controls['typeOfDelevery'].value));
    return this.orderForm.get("typeOfDelevery")
  }
  get branchId(){
    this.orderForm.controls['branchId'].setValue(parseInt(this.orderForm.controls['branchId'].value));
    return this.orderForm.get("branchId")
  }
  get notes(){
    return this.orderForm.get("notes")
  }
  get products(){
    return this.orderForm.get("products") as FormArray;
  }
  get name(){
    return this.orderForm.get("name")
  }
  get quantity(){
    return this.orderForm.get("quantity")
  }
  get price(){
    return this.orderForm.get("price")
  }
  get weight(){
    return this.orderForm.get("weight")
  }
}
