import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, from, iif, map, Observable, of, switchMap } from 'rxjs';
import { AuthserviceService } from 'src/app/module/authentication/services/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private authDb: AuthserviceService, private route:Router){}

 async flag(token:any):Promise<boolean>{
   let  validation = true;
 
    if(token === ""){    
      this.route.navigate(['login'])         
    }
   
  await this.authDb.authToken(token).then((res:any)=>{    
    if(!res)
    this.route.navigate(['login']) 
   })   
   return validation
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token:string | null= localStorage.getItem("token")
      let validation:Promise<boolean> =  this.flag(token)      
      return validation        
  } 
  
}
