import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './Component/global/global.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { LoginComponent } from './Component/login/login.component';
import { AuthComponent } from './Component/auth/auth.component';
import { AddOrderComponent } from './Component/add-order/add-order.component';
import { ValidationComponent } from './Component/validation/validation.component';
import { ValidationEditComponent } from './Component/validation-edit/validation-edit.component';
import { EmployeesComponent } from './Component/employees/employees.component';
import { VendorsComponent } from './Component/vendors/vendors.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { DelivariesComponent } from './Component/delivaries/delivaries.component';
import { AddDelivaryComponent } from './Component/add-delivary/add-delivary.component';
import { AddVendorComponent } from './Component/add-vendor/add-vendor.component';
import { WeightComponent } from './Component/weight/weight.component';
import { CitiesComponent } from './Component/cities/cities.component';
import { loginAuthGuard } from './Guards/login-auth.guard';
import { GovernoratesComponent } from './Component/governorates/governorates.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { GovernorateDetailsComponent } from './Component/governorate-details/governorate-details.component';
import { BranchesComponent } from './Component/branches/branches.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrderRepositoryComponent } from './Component/order-repository/order-repository.component';

const routes: Routes = [
  // ,canActivate:[loginAuthGuard]
  {path:"",component:GlobalComponent,canActivate:[loginAuthGuard],children:[
    {path:"",redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    // {path:"about",component:AboutComponent},
    {path:"addOrder",component:AddOrderComponent},
    {path:"orderRepositiry",component:OrderRepositoryComponent},
    {path:"validation",component:ValidationComponent},
    {path:"validationEdit/:role",component:ValidationEditComponent},
    {path:"employees",component:EmployeesComponent},
    {path:"addEmployee",component:AddEmployeeComponent},
    {path:"delivaries",component:DelivariesComponent},
    {path:"addDelivary",component:AddDelivaryComponent},
    {path:"vendors",component:VendorsComponent},
    {path:"addVendor",component:AddVendorComponent},
    {path:"governorates",component:GovernoratesComponent},
    {path:"goverDetails/:id",component:GovernorateDetailsComponent},
    {path:"orders",component:OrdersComponent},
    {path:"cities",component:CitiesComponent},
    {path:"branches",component:BranchesComponent},
    {path:"weight",component:WeightComponent},
  ]},
  {path:"",component:AuthComponent,children:[
    {path:"",redirectTo:"login",pathMatch:'full'},
    {path:"login",component:LoginComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
  ]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
