import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { MaterialModule } from '@Material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ReservationsModule { }
