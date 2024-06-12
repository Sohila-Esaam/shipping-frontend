import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserService } from 'src/app/Services/auth-user.service';
import { PioneerDataService } from 'src/app/Services/pioneer-data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  representatives:any[]=[]
  repId:any=null;
  orderId:any=null;
  showStatusprompt: boolean=false;
  showrepresprompt: boolean=false;
  activeIndex:any;
  pageContent:any[]=[]
  role:any="";
  stringid:any=localStorage.getItem("id");
  EmployeeForm:FormGroup;
  EmpRepForm:FormGroup;
  RepresentativeForm:FormGroup;
  constructor(private AuthUser:AuthUserService ,private data:PioneerDataService,private db:FormBuilder){
    this.role=localStorage.getItem("role");
    this.EmployeeForm=db.group({
      statusId:['',[Validators.required]],
      orderId:[this.orderId]
    })
    this.EmpRepForm=db.group({
      repId:['',[Validators.required]],
      orderId:[this.orderId]
    })
    this.RepresentativeForm=db.group({
      RepresentativeId:['',[Validators.required]],
      orderId:[this.orderId]
    })
  }
  // ------- Merchant ----------------------------------------------------------------------------------
  changeMerchantPage(num:number=0){
    this.activeIndex = num;
    this.data.GetMerchantId(this.stringid).subscribe({
      next:(response)=>{
        console.log(response)
          this.data.GetOrdersByStatusForMerchant(response.id,num).subscribe({
            next:(response)=>{
              this.pageContent=response
              console.log(response)
            }
          })
        }})
      }
  // ------- Employee ----------------------------------------------------------------------------------
    changeEmployeePage(num:number=0){
    this.activeIndex = num;
          this.data.GetOrdersByStatusForEmployee(num).subscribe({
            next:(response)=>{
              this.pageContent=response
              console.log(response)
            }
          })
  }
  // ------- Representative ----------------------------------------------------------------------------------
      changeRepresentativePage(num:number=0){
        this.activeIndex = num;
        this.data.GetRepresentativeId(this.stringid).subscribe({
          next:(response)=>{
            console.log(response)
              this.data.GetOrdersByStatusForRepresentative(response.id,num).subscribe({
                next:(response)=>{
                  this.pageContent=response
                  console.log(response)
                }
              })
            }})
          }

  delete(id:number){
    this.data.DeleteOrder(id).subscribe({
      next:(response)=>{
        console.log("succefuly deleted",response)
        this.pageContent = this.pageContent.filter(item => item.id !== id);
      },error: (error) => {
        console.error("Error occurred while deleting order", error);
      }
    })
  }



  openStatus(id:number){
    this.showStatusprompt=true;
    this.orderId=id;
    this.EmployeeForm.get('orderId')?.setValue(id);
  }
  

  EmployeecahngeStatus(){
    const statusId= parseInt(this.EmployeeForm.value.statusId, 10)
    const orderId= parseInt(this.EmployeeForm.value.orderId, 10)
    console.log(statusId)
    console.log(orderId)
    if(this.EmployeeForm.valid){
      this.data.changeStatus(orderId,statusId).subscribe({
        next:(response)=>{
        console.log("status Successfully changed",response)
        this.EmployeeForm.reset();
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }
  RepresentativecahngeStatus(){
    const statusId= parseInt(this.EmployeeForm.value.statusId, 10)
    const orderId= parseInt(this.EmployeeForm.value.orderId, 10)
    console.log(statusId)
    console.log(orderId)
    if(this.EmployeeForm.valid){
      this.data.changeStatus(orderId,statusId).subscribe({
        next:(response)=>{
        console.log("status Successfully changed",response)
        this.EmployeeForm.reset();
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      })
    }
  }

  closeStatus(){
    this.showStatusprompt=false;
  }
  // ---------------------------------------------------------------
  openRepresent(id:number){
    this.showrepresprompt=true;
    this.orderId=id;
    this.EmpRepForm.get('orderId')?.setValue(id);
    this.data.GetAllRepresentative().subscribe({
      next:(response)=>{
        this.representatives=response
      }
    })
  }

  AssignOrdertoRes(){
    this.data.GetRepresentativeId(this.EmpRepForm.value.repId).subscribe({
      next:(responese)=>{
        const repId=responese.id
        const orderId= parseInt(this.EmpRepForm.value.orderId, 10)
        console.log(repId ,orderId)
        this.data.AddtOrderToRepresentative(repId,orderId).subscribe({
          next:(response)=>{
          console.log("order assigned succefully",response)
          this.EmpRepForm.reset();
          },error:(err:HttpErrorResponse)=>{
            console.log(err.error.message)
          }
        })
      }
    })

  }

  closereps(){
    this.showrepresprompt=false;
  }
  

  ngOnInit(): void {
    if(this.role=="Merchant"){
      this.changeMerchantPage()
    }else if(this.role=="Employee"){
      this.changeEmployeePage()
    }else if(this.role=="Representative"){
      this.changeRepresentativePage()
    }
  }
  
}
