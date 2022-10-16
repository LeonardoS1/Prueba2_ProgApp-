import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  mdl_rut: string = '';
  mdl_nombre: string = '';
  mdl_apellido: string = '';
  mdl_sueldo: string = '';

  constructor(private router: Router,
    private api: DbService,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  ngOnInit() {
    this.loadingController.create({
      message: 'Obteniendo Información...',
      spinner: 'lines'
    }).then(data => {
      data.dismiss();
    });
  }

  navegar() {
    let extras: NavigationExtras = {
      replaceUrl: true,
      state: {

      }
    }
    this.router.navigate(['listar'], extras);
  }

  almacenar(){
    let that= this;
    this.loadingController.create({
      message: 'Almacenando persona...',
      spinner: 'lines'
    }).then(async data => {
      data.present();
      try {
        let respuesta = await this.api.almacenarPersona(this.mdl_rut, this.mdl_nombre, this.mdl_apellido, this.mdl_sueldo);
        if (respuesta['result'][0].RESPUESTA == 'OK') {
            that.pr
        }
      }
    })
    
}

