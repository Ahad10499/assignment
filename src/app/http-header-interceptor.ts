import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let modifiedReq = req.clone({});
        modifiedReq = modifiedReq.clone({
            setHeaders: {
                'Authorization':'563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692'
            }
        });
return next.handle(modifiedReq).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
}
        }));
    }
}