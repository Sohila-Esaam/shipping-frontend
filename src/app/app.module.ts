import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AuthHeaderComponent } from './Component/auth-header/auth-header.component';
import { GlobalHeaderComponent } from './Component/global-header/global-header.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { GlobalComponent } from './Component/global/global.component';
import { AuthComponent } from './Component/auth/auth.component';
import { LoginComponent } from './Component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './Component/add-order/add-order.component';
import { ValidationComponent } from './Component/validation/validation.component';
import { ValidationEditComponent } from './Component/validation-edit/validation-edit.component';
import { EmployeesComponent } from './Component/employees/employees.component';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { VendorsComponent } from './Component/vendors/vendors.component';
import { DelivariesComponent } from './Component/delivaries/delivaries.component';
import { AddDelivaryComponent } from './Component/add-delivary/add-delivary.component';
import { AddVendorComponent } from './Component/add-vendor/add-vendor.component';
import { GovernoratesComponent } from './Component/governorates/governorates.component';
import { CitiesComponent } from './Component/cities/cities.component';
import { WeightComponent } from './Component/weight/weight.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { GovernorateDetailsComponent } from './Component/governorate-details/governorate-details.component';
import { BranchesComponent } from './Component/branches/branches.component';
import { OrdersComponent } from './Component/orders/orders.component';
import { OrderRepositoryComponent } from './Component/order-repository/order-repository.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AuthHeaderComponent,
    GlobalHeaderComponent,
    HomeComponent,
    AboutComponent,
    GlobalComponent,
    AuthComponent,
    LoginComponent,
    AddOrderComponent,
    ValidationComponent,
    ValidationEditComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    VendorsComponent,
    DelivariesComponent,
    AddDelivaryComponent,
    AddVendorComponent,
    GovernoratesComponent,
    CitiesComponent,
    WeightComponent,
    NotFoundComponent,
    GovernorateDetailsComponent,
    BranchesComponent,
    OrdersComponent,
    OrderRepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
