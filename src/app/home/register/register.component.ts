import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm;
  userName:any=[];
  result: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService
   ) { }

  ngOnInit() {
    this.registerForm= this.fb.group({
      "name": [''],
      "password": ['']
    })
  }

  registerUser(userInfo:any){
    this.userName= userInfo;
    console.log(this.userName);
    this.authService.registerUser(this.userName).subscribe((res) =>{
      this.result=res;
      this.toastr.success('you are register successfully');
    })
    this.ngOnInit();
  }

}
