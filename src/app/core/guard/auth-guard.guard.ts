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

 async flag(userData:any):Promise<boolean>{
   let  validation = true;
 
    if(!userData){
      console.log("user data no valid")
      this.route.navigate(['/','login'])         
    }
   
  await this.authDb.authToken(userData.token).then((res:any)=>{    
    if(!res)
    this.route.navigate(['/','login']) 
   })   
   return validation
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userData:any= JSON.parse(localStorage.getItem("userData") || "false")
      let validation:Promise<boolean> =  this.flag(userData)        
      return validation  
      
  }

 
  
}
