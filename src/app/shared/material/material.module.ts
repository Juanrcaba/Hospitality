import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';





const modules = [MatSelectModule,MatCardModule,MatMenuModule, MatTooltipModule,MatFormFieldModule,MatInputModule,MatIconModule,MatButtonModule,MatSidenavModule,MatToolbarModule]

@NgModule({
 
  imports: [...modules ],
  exports:[...modules,]
})
export class MaterialModule { }
