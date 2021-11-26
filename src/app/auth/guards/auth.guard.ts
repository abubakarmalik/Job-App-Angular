import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
// import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let check = localStorage.getItem('checkAuth');
    if (check) {
      let checkAuth = JSON.parse(check);
      // checkAuth.pipe(
      //   take(1),
      //   map (res => {
      //     return res? true: false
      //   })
      // )
      if (checkAuth == true) {
        return true;
      } else {
        alert('Please login first');
        this.router.navigate(['/login']);
        return false;
      }
    }
    return false;
  }
}
