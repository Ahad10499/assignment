import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  isUserLogin : boolean = false;
  private dataSource= new BehaviorSubject<any>(null)
  data= this.dataSource.asObservable();

  apiUrl="http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  login(userName: string, password: number): Observable<any> { 
    this.isUserLogin= userName == 'admin' && password == 1234;    
      localStorage.setItem('isUserLogin', this.isUserLogin ? 'true' : 'false');    
      localStorage.setItem('token', '1426420800');
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

  registerUser(registerData: any): Observable<any>{
    debugger
    localStorage.setItem('token', '1426420800');
  return this.http.post(`${this.apiUrl}`,registerData);

  }

  getToken(){
    localStorage.getItem('token');
  }
}
