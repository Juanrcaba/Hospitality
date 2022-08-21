import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { catchError, from, iif, map, Observable, of, switchMap } from 'rxjs';
import { AuthserviceService } from 'src/app/module/authentication/services/authservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private readonly authDb: AuthserviceService,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    const userData = JSON.parse(localStorage.getItem('userData') || 'false');

    return from(userData).pipe(
      switchMap((data) =>
        iif(
          () => !!data,
          of(true),
          this.authDb.authToken(userData.token).pipe(
            catchError(() => of(this.router.createUrlTree(['/login']))),
            map(() => this.router.createUrlTree(['/login']))
          )
        )
      )
    );
  }
}
