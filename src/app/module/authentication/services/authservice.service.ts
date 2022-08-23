import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import {  User, UserRequest } from '@Core/models/user-model';
import { UserServiceService } from '@Core/services/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  url: string = 'https://localhost:7253/';

  constructor(
    private readonly http: HttpClient,
    private readonly UserSvc:UserServiceService
    ) {}

  login(data: any) {   
   return this.http.post<UserRequest>(this.url + 'login', data).pipe(
     map((res:UserRequest)=>{    
       if(res){
       this.saveToken(res.token);
       this.saveUserData(res)        
       }
      })
     
    );
 
  }

  private saveToken(token:string):void{
    localStorage.setItem("token", token);
  }
  private saveUserData(userData:User):void{
    this.UserSvc.setData = userData
  }

  async authToken(token:string){   
    return  await new Promise((resolve,reject)=>{
      this.http.post(`${this.url}token?token=${token}`,"").subscribe(result =>{
        resolve(result)
      })
    })   
  }
}
