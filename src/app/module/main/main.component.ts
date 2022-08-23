import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav!:ElementRef<MatSidenav> 
  options = this._formBuilder.group({
    bottom: 20,
    fixed: true,
    top: 0,
    title:true
  });

  constructor(private _formBuilder: FormBuilder) {}
  

  ngOnInit(): void {
  }

  

}
