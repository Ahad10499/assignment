import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isUserLogin:boolean;
  constructor(public authService: AuthService, private router: Router){ }
  // isUserLogin :boolean= this.authService.isUserLogin;
  ngOnInit(){
  this.authService.data.subscribe(res =>{
    this.isUserLogin= res;
  })

 let storeData= localStorage.getItem('isUserLogin');
 if(storeData){
   this.router.navigate(['/home']);
 }
//  if(storeData){
//    this.router.navigate(['/home']);
//  }
 console.log("StoreData:" + storeData);
  if(storeData !=null && storeData == "true"){
    this.isUserLogin= true;
  }
  else{
    this.isUserLogin= false;
  }
  }

  logout(){
    this.authService.logout();
    this.isUserLogin= this.authService.isUserLogin;
    this.router.navigate(['/login']);
  }
 
}
