import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private readonly userData = new BehaviorSubject<string>('');
  userData$ = this.userData.asObservable();
  constructor() {}

  set setData(data: string) {
    this.userData.next(data);
  }
}
