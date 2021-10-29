import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  userName:any=[];
  result: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {
    this.registerForm= this.fb.group({
      "name": ['',[Validators.required]],
      "phoneNo": ['',[Validators.required]]
    })
  }

  registerUser(userInfo:any){
    this.userName= userInfo;
    console.log(this.userName);
    this.authService.registerUser(this.userName).subscribe((res) =>{
      this.result=res;
    })
  }

}
