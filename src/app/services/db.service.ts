import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  ruta: String
  = 'https://fer-sepulveda.cl/API_CLASE/api-service.php'

  constructor(private router: HttpClient) { }

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
