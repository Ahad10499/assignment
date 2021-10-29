import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaderInterceptor } from './http-header-interceptor';
import { HomeModule } from '../app/home/home.module';
import { LoginModule } from '../app/home/login/login.module';
import { AuthGuardGuard } from './auth-guard.guard';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
     {
       provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true
     },
     AuthGuardGuard,
    NgbModule   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
