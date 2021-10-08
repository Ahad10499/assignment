import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieDbService {

  constructor(private http:HttpClient) { }  
  
  getdata(search,perPage):Observable<any>{ 
    debugger 
    const url="https://api.pexels.com/v1/search?query="+search+"&per_page="+perPage;  
    return this.http.get<any>(url).pipe(catchError(this.handelError));  
  }  
  handelError(error){  
    return throwError(error.message || "Server Error");  
  } 
 
}

