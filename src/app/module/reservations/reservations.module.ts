import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { MaterialModule } from '@Material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './pages/add/add.component';
import { FiltroPipe } from '@Core/pipe/filter.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    ReservationsComponent,
    AddComponent,
    FiltroPipe
   
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ]
})
export class ReservationsModule { }
