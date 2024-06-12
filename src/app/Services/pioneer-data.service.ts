import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PioneerDataService {
  back:string="https://localhost:44389/api/"
  constructor(private HttpClient:HttpClient) { }

  // --------------- weight API's ---------------
  PostWeight(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Weight',data,{headers});
  }
  EditWeight(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Weight',data,{headers});
  }
  GetWeightById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Weight/'+id,{headers});
  }
  // --------------- Governorate API's ---------------
  GetAllGovernorateWithDelete():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Governorate/GetAllWithDelete',{headers});
  }
  GetGovernorateById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Governorate/GetById?id='+id,{headers});
  }
  GetAllGovernorateWithCities():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Governorate/GetAllwithCities',{headers});
  }
  DeleteGovernorate(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'Governorate?id='+id,{headers});
  }
  AddGovernorate(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Governorate/AddGovern',data,{headers});
  }
  EditGovernorate(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Governorate/UpdateGov',data,{headers});
  }
  // --------------- City API's ---------------
  AddCity(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'City/Creat',data,{headers});
  }
  DeleteCity(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'City/Id?id='+id,{headers});
  }
  EditCity(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'City/UpdateCity',data,{headers});
  }
  GetAllCities():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'City',{headers});
  }
  GetCityById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'City/Id?id='+id,{headers});
  }
  // --------------- Branches API's ---------------
  GetAllBranches():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Branch/GetAll',{headers});
  }
  GetBranchById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Branch/'+id,{headers});
  }
  AddBranch(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Branch',data,{headers});
  }
  DeleteBranch(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'Branch?id='+id,{headers});
  }
  EditBranch(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Branch?id='+id,{headers});
  }
  // --------------- Merchant API's ---------------
  GetAllMerchant():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Mrechant',{headers});
  }
  GetMerchantById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Mrechant/'+id,{headers});
  }
  GetMerchantId(id:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Mrechant/'+id,{headers});
  }
  AddMerchant(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Mrechant',data,{headers});
  }
  DeleteMerchant(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'Mrechant?id='+id,{headers});
  }
  EditMerchantPassword(id:number,data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Mrechant/pass?id='+id,data,{headers});
  }
  EditMerchant(id:number,data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Mrechant?id='+id,data,{headers});
  }
  // --------------- Representative API's ---------------
  GetAllRepresentative():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Representative/GetAll',{headers});
  }
  GetRepresentativeById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Representative/'+id,{headers});
  }
  GetRepresentativeId(id:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Representative/'+id,{headers});
  }
  AddRepresentative(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Representative',data,{headers});
  }
  DeleteRepresentative(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'Representative/Delete?id='+id,{headers});
  }
  EditRepresentativePassword(id:number,data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Representative/pass?id='+id,data,{headers});
  }
  EditRepresentative(id:number,data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.put(this.back+'Representative/UpdateRepresentative?id='+id,data,{headers});
  }
  // --------------- Employee API's ---------------
  GetAllEmployee():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'AccountUser/GetEmployees',{headers});
  }
  AddEmployee(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'AccountUser/register',data,{headers});
  }
  // --------------- Order API's ---------------
  AddOrder(data:object):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.post(this.back+'Order',data,{headers});
  }
  DeleteOrder(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.delete(this.back+'Order?orderId='+id,{headers});
  }
  GetOrderById(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/Get/'+id,{headers});
  }
  // merchant
  GetCountOrdersForMerchantByStatus(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/CountOrdersForMerchantByStatus?id='+id,{headers});
  }
  GetOrdersByStatusForMerchant(id:number,state:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/GetOrdersForMerchant?merchantId='+id+'&statusId='+state+'&pageNubmer=1&pageSize=30',{headers});
  }
  // Employee
  GetCountOrdersForEmployeeByStatus():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/CountOrdersForEmployeeByStatus',{headers});
  }
  GetOrdersByStatusForEmployee(state:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/GetOrdersForEmployee?statusId='+state+'&pageNubmer=1&pageSize=30',{headers});
  }
  // Representative
  GetCountOrdersForRepresentativeByStatus(id:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/CountOrdersForRepresentativeByStatus?representativeId='+id,{headers});
  }
  GetOrdersByStatusForRepresentative(id:number,state:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Order/GetOrdersForRepresentative?representativeId='+id+'&statusId='+state+'&pageNubmer=1&pageSize=30',{headers});
  }
  // cahnge status
  changeStatus(orderId:number,status:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    let url='https://localhost:44389/api/Order/ChangeStatus?orderId='+orderId+'&status='+status;
    return this.HttpClient.put(url,{},{headers});
  }
  // add Order To Representative
  AddtOrderToRepresentative(repId:number,orderId:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    let url='https://localhost:44389/api/Order/SelectRepresentative?orderId='+orderId+'&representativeId='+repId;
    return this.HttpClient.put(url,{},{headers});
  }
  // --------------- OrderReport API's ---------------
  GetAllordersRepo():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'OrderReport/GetAllOrder?pageNubmer=1&pageSize=50',{headers});
  }
  GetAllordersRepoByStatusAndDate(startDate:string,endDate:string,state:number):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'OrderReport/SearchByDateAndStatus?pageNubmer=1&pageSize=50&fromDate='+startDate+'&toDate='+endDate+'&status='+state,{headers});
  }
  // -----------------------Roles and permintion-------------
  GetAllRoles():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'Role/GetAll',{headers});
  }
  getRolePermition(roleName:string):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.HttpClient.get(this.back+'ScreenPermission/GetPermissions?roleName='+roleName,{headers});
  }
  // updateRolePermission(role:string,permissions:any):Observable<any>{
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   });
  //   return this.HttpClient.get(this.back+'ScreenPermission/UpdatePermission',{roleName:role,permissionScreens:permissions},{headers});
  // }





}
