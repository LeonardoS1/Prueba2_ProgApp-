import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Console } from 'console';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> f9d753f9675f0e6551402fdaf34d9d263c255d3d

@Injectable({
  providedIn: 'root'
})
export class DbService {

<<<<<<< HEAD
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
=======
  ruta: String
  = 'https://fer-sepulveda.cl/API_CLASE/api-service.php'

  constructor(private router: HttpClient) { }
>>>>>>> f9d753f9675f0e6551402fdaf34d9d263c255d3d

  almacenarPersona(rut, nombre, apellido, sueldo){
    let that = this;

    return new Promise(resolve => {
      resolve(that.http.post(that.ruta, {
        nombreFuncion: 'PersonaAlmmacenar',
        parametros: [rut, nombre, apellido, sueldo]
      }).toPromise())
    })
  }


  listarPersonas() {
    let that = this;

    return new Promise(resolve => {
      resolve(that.http.get(that.ruta
        + '?nombreFuncion=PersonaListar').toPromise())
    });

  }
}
