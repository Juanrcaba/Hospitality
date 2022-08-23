import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '@Material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
