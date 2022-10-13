import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { PrincipalPage } from '../principal/principal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  mdl_user: string = '';
  mdl_pass: string = '';

  constructor(private router: Router,
    private alertController: AlertController,
    private db: DbService) { }

  ngOnInit() {
  }

  ingresar(){
    if (!this.db.validarCredenciales(this.mdl_user,this.mdl_pass)){
      this.mostrarMensaje('credenciales inválidas');
    }else{
      let extras: NavigationExtras = {
        state: {
          usuario: this.mdl_user,
          cualquierCosa: 'Cualquier valor'
        }
      }
      this.router.navigate(['principal']),extras;
      console.log('prueba1')
    }
  }

  async mostrarMensaje(mensaje){

    const alert = await this.alertController.create({
      header: 'Atención!',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();

  }
  navegar() {

    let extras: NavigationExtras = {
      state: {
        usuario: this.mdl_user,
        cualquierCosa: 'Cualquier valor'
      }
    }

    this.router.navigate(['principal'], extras);
  }

  navigate1(){
    this.router.navigate(['/restablecer']) 
  }
}

