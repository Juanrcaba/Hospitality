import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/module/authentication/services/authservice.service';

interface userDataI{  
  id:number,
  fullName:string,
  idRole : number,
  token :string
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private authDb: AuthserviceService, private route:Router){}

 async flag(userData:userDataI ):Promise<boolean>{
   let  validation = false;
    if(!userData){
      return validation;  
    }
   
  await this.authDb.authToken(userData.token).then((res:any)=>{    
     validation = res
   })

   return validation
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const userData:userDataI  = JSON.parse(localStorage.getItem("userData") || "")

      let validation:Promise<boolean> =  this.flag(userData)       
      

      if(!validation)
      this.route.navigate(["/"])    

    alert(validation.then(res=>alert(res)))
    return true
    

   

  }

 
  
}
