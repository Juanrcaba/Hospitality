import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  url: string = 'https://localhost:7253/';

  constructor(private readonly http: HttpClient) {}

  login(data: any) {
    return this.http.post(this.url + 'login', data);
  }

  async authToken(token:string){   
    return  await new Promise((resolve,reject)=>{
      this.http.post(`${this.url}token?token=${token}`,"").subscribe(result =>{
        resolve(result)
      })
    })   
  }
}
