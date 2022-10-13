import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  mdl_user: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    try {
      this.mdl_user = this.router.getCurrentNavigation().extras.state.usuario;
    } catch (error) {
      this.router.navigate(['principal']);
      console.log('prueba2');
    }
  }
  
}
