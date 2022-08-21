import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { from, iif, map, Observable, of, switchMap } from 'rxjs';
import { AuthserviceService } from 'src/app/module/authentication/services/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private readonly authDb: AuthserviceService) {}

  canActivate(): Observable<boolean> {
    const userData = JSON.parse(localStorage.getItem('userData') || 'false');

    return from(userData).pipe(
      switchMap((data) =>
        iif(
          () => !!data,
          this.authDb.authToken(userData.token).pipe(map(() => true)),
          of(true)
        )
      )
    );
  }
}
