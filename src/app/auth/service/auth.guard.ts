import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {PersistanceService} from "../../shared/service/persistance.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private perstServ: PersistanceService, private router: Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.perstServ.get('accessToken'))
    {
      return true;
    }

    else {

      this.router.navigate(['/admin', 'registr'], {
          queryParams: {LoginNoric: true}
        }
      );
      return false;
    }
  }


}
