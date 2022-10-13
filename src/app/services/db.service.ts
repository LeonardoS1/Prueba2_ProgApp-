import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  validador: boolean = false;

  constructor(private router: Router) { }

  canActivate(){
    if(this.validador){
      return true;
    }else {
      this.router.navigate(['login']);
      return false;
    }

  }

  validarCredenciales(user, pass) {
    if(user == 'admin' && pass == 'admin'){
      this.validador = true;
      this.router.navigate(['principal']);
      return true;
    }else {
      return false;
    }
  }
}
