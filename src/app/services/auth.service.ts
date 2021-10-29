import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  isUserLogin : boolean = false;
  private dataSource= new BehaviorSubject<any>(null)
  data= this.dataSource.asObservable();
  constructor() { }

  login(userName: string, password: number): Observable<any> { 
    console.log(userName);
    console.log(password);
    this.isUserLogin= userName == 'admin' && password == 1234;    
      localStorage.setItem('isUserLogin', this.isUserLogin ? 'true' : 'false');    
    return of(this.isUserLogin).pipe(tap(val => {
      console.log('is user authentication:' + val);
    }))
  }
  loggedIn(){
    return !!localStorage.getItem("isUserLogin");
  }
  logout(): void{
    this.isUserLogin= false;
    localStorage.removeItem('isUserLogin');
  }
  updateChangesData(value: any){
    this.dataSource.next(value);
  }
}
