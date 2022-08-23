import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '@User/user-service.service';
import { AuthserviceService } from '@Auth/authservice.service';
import { User, UserRequest } from '@Core/models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private authService: AuthserviceService,
    private route:Router, private userSvc:UserServiceService,
    private element:ElementRef) { }

  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  })
  userdata!:User

  ngOnInit(): void {
    this.userSvc.getData.subscribe(res =>{
      this.userdata = res
    })
  }

 

  onLogin(){
      if(!this.loginForm.invalid){
        this.authService.login(this.loginForm.value).subscribe((res:any) =>{   
          console.log(res)                        
          if(this.userdata.fullName != "")      
          this.route.navigate([""]) 
          else{
            alert("User name or password is incorrect")
          
          } 
        })
      }
  }

}
