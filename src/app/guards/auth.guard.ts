import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthentificationService } from '../service/authentification/authentification.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authentificationService : AuthentificationService) {
    
  }

  canActivate() {
    if (localStorage.getItem('token')) {
      this.authentificationService.login(localStorage.getItem('token')).subscribe(res => {
        if (res.length) {
          return true
        } else {
          return false
        }
      })
    }
    return false
  }
  
}
