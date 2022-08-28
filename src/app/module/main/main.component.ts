import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';

import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

import { tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  title = 'Dashboard'
 @ViewChild("sidenav") sidenav!: ElementRef
  sideNavMode:MatDrawerMode = 'side'
  options = this._formBuilder.group({
    bottom: 20,
    fixed: true,
    top: 0,
    title:true
  });

  constructor(private _formBuilder: FormBuilder, private breakpointObserver:BreakpointObserver,private renderer:Renderer2) {}
  readonly breakpoint$ = this.breakpointObserver
  .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)']);
 

  ngOnInit(): void {
    this.breakpoint$.subscribe(()=>this.breakpointChanged() )
    
    
  }
  changeTitle(title:string){
    this.title = title
  }


  private breakpointChanged() {
    if((this.breakpointObserver.isMatched('(min-width:  1800px)'))){}
    else if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
            this.sideNavMode = 'side'     
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.sideNavMode = 'side'    
    } else  {
      this.sideNavMode = 'over'      
    }
  }
}


