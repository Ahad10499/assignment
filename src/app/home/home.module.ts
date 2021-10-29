import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [HomeComponent,RegisterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DashboardModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
