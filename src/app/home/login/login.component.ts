import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string;
  password : number;
  loginForm : FormGroup;
  result: any;

  constructor(
    private authService: AuthService,
    private router : Router
  ) { }

  ngOnInit() {
this.loginForm = new FormGroup({
  userName: new FormControl(''),
  password: new FormControl(),
})
  }

onClickSubmit(loginValue){
  let result= this.loginForm.value;
this.userName= loginValue.userName;
this.password= loginValue.password;
this.authService.login(this.userName, this.password).subscribe(
  data =>{
    debugger
    console.log('is login success:'+ data);
    this.authService.updateChangesData(data);
    if(data) this.router.navigate(['/home']);
  }
)

}

}