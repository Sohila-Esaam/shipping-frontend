import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginAuthGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);
  if(localStorage.getItem("token") != null){
    return true;
  }else{
    router.navigate(['/login']);
    return false;
  }

};







  // if(localStorage.getItem("userData")!=null){
  //   let userData=localStorage.getItem("userData")
  //   if(userData=="admin"){
  //     return true;
  //   }
  // }else{
  //   router.navigate(['/login']);
  //   return false
  // }