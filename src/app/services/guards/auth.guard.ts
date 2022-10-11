import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      let authorize = localStorage.getItem('session')

      if(!authorize && state.url.includes('rickAndMorty')){
        this.router.navigate(['login'])
        return true
      }
      
      if(!authorize && state.url.includes('pokemon')){
        this.router.navigate(['login'])
        return true
      }

      if(authorize && state.url.includes('login')){
        this.router.navigate(['rickAndMorty'])
        return true
      }

      return true
      
  }
  
}
