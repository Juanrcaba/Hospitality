import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userData$ = new  BehaviorSubject<User>({
    id : 0,
    fullName:"",
    idRole:0, 
  })
  constructor() {  
   }

  get getData(){
    return this.userData$.asObservable()
  }

  set setData(data:User){
    this.userData$.next(data)
  }
}
