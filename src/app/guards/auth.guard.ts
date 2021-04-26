import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthentificationService } from '../service/authentification/authentification.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{


  constructor(private authentificationService : AuthentificationService) {
    
  }

  async canActivate() {
    if (localStorage.getItem('token')) {
      let res=  await this.authentificationService.login(localStorage.getItem('token')).toPromise();
        if (res.length) {
          return true
        } else {
          return false
        }

    } else {
      return false
    }
  }
  
}
