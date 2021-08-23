import { Component, OnInit } from '@angular/core';
import { DatosService } from './Provider/datos.service';
import { Data } from './interfaces/data';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  listas: Data[];
  lista: Data;

  constructor(private datosService: DatosService) {}
  
  ngOnInit() {
    this.datosService.getData().subscribe((listas)=> {
      this.listas = listas;
    });
  }

  agregarTarea() {
    this.datosService.crearLista({
      id: Math.floor(Math.random() *(1 * 10) + 5),
      title: 'Comprar sodas',
      active: true,
      prioridad: 'baja',
    });
  }

  eliminarTarea(item){
    this.datosService.eliminarLista(item);
    console.log(this.listas);
  }

}
