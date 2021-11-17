import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor{

    constructor(public auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenReq= req.clone({
            setHeaders : {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(tokenReq);
    }    
}