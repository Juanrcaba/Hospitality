import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface userDataI{  
    id:number,
    fullName:string,
    idRole : number,
    token :string
}
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userData$ = new  BehaviorSubject<string>("")
  constructor() {
  
   }

  get getData(){
    return this.userData$.asObservable()
  }

  set setData(data:string){
    this.userData$.next(data)
  }
}
