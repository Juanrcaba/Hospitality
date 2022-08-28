import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../reservations/pages/add/add.component';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: MainComponent,  
  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},   
    {path:'side',component: SidebarComponent},
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) } ,
    { path: 'reservation', loadChildren: () => import('../reservations/reservations.module').then(m => m.ReservationsModule) },
    {path:'addReservation',component: AddComponent},
  ]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
