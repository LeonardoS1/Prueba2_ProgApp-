import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  validador: boolean = false;

  constructor(private router: Router,private sqlite:SQLite) { 

     this.sqlite.create({
      name:'datos.db'
     }).then((db:SQLiteObject)=>
     db.executeSql('CREATE TABLE IF NOT EXIST USUARIO(MAIL(VARCHAR(75),CONTRASENA(VARCHAR(30))',[]).then(()=>{
      console.log('TABLA CREADA OK');
    
    }).catch(e =>{
      console.log('TABLA NO OK');
    }).catch(e =>{
    console.log('BASE DE DATOS OK');
  }

}    


  
  

  canActivate(): boolean{
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
