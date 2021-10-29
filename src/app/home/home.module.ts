import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterModule } from './register/register.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardModule,
    RegisterModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
