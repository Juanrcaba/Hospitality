import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/user-model';
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService: AuthserviceService,private route:Router, private userSvc:UserServiceService) { }
  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  })
userdata:any
  ngOnInit(): void {
    this.userSvc.getData.subscribe(res =>{
      this.userdata = res
    })
  }

  // onLogin() {
  //   if (!this.loginForm.invalid) {
  //     this.authService.login(this.loginForm.value).subscribe((response: any) => {
  //       if (response) {
  //         localStorage.setItem("userData", JSON.stringify(response));
  //         this.route.navigate(["main"])
  //       }
  //       else {
  //         alert("Username or Password invalid");
  //       }
  //     })
  //   }
  // }

  onLogin(){
      if(!this.loginForm.invalid){
        this.authService.login(this.loginForm.value).subscribe((res) =>{
          this.route.navigate(['']);
        })
      }
  }

}
