import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Reservations'
  currentBreakpoint:string = ''
  estado:MatDrawerMode = 'side'
  options = this._formBuilder.group({
    bottom: 20,
    fixed: true,
    top: 0,
    title:true
  });

  constructor(private _formBuilder: FormBuilder, private breakpointObserver:BreakpointObserver) {}
  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
  .pipe(
    tap(value => console.log(value))
   
  );

  ngOnInit(): void {
    this.breakpoint$.subscribe(()=>this.breakpointChanged() )
  }

  private breakpointChanged() {    
    if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.estado= 'over'    
    } 
  }

}
