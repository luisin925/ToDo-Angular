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
  todo: string;
  prioridad: string;
  active: boolean;

  constructor(private datosService: DatosService) {}
  
  ngOnInit() {
    this.datosService.getData().subscribe((listas)=> {
      this.listas = listas;
    });
  }

  agregarTarea() {
    this.datosService.crearLista({
      id: Math.floor(Math.random() *(1 * 100) + 5),
      title: this.todo,
      active: true,
      prioridad: this.prioridad,
    });
  }

  eliminarTarea(item){
    this.datosService.eliminarLista(item);
    //console.log(this.listas);
  }

  obtenerTarea(event){
    //console.log(event.target.value);
    this.todo = event.target.value;
  }

  obtenerPrioridad(event){
    //console.log(event.target.value);
    this.prioridad = event.target.value;
  }

  tareaCompleta(event,i){
      console.log(event.target.checked);
      console.log(i);
      this.datosService.completarTarea();
  }
}
