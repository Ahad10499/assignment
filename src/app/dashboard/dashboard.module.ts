import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [MoviesListComponent,PageNotFoundComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfiniteScrollModule
  ],
  exports: [
    PageNotFoundComponent],
})
export class DashboardModule { }
