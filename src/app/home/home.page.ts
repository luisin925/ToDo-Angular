import { Component } from '@angular/core';
import { DatosService } from '../Provider/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listas

  constructor(public datosService: DatosService) {}

  ionViewDidLoad() {
    this.datosService.obtenerDatos()
      .subscribe(
        (data) => { this.listas = data; },
        (error) => { console.log(error); }
      )
  }
}
