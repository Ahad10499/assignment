import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {

  constructor(private authService: AuthService,
    private router: Router){  }
  canActivate(): boolean {
    if(this.authService.loggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
