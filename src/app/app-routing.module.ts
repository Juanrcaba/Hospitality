import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guard/auth-guard.guard';

const routes: Routes = [
  
  {
    path:'login',
    loadChildren:()=> import('./module/authentication/authentication.module').then(m=>m.AuthenticationModule),     
  },
  {
    path:'',
    loadChildren:()=>import('./module/main/main.module').then(m=>m.MainModule),
    canActivate:[AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
