import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  
},
{
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardGuard]
},
{
    path: 'login',
    loadChildren: () =>import('./home/login/login.module').then(m => m.LoginModule)

},
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
