import { Component } from '@angular/core';
import { DatosService } from './Provider/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title: 'angular-http-client';
  tareas;
  constructor(
    private datosService: DatosService
  ) {}

getList(){
  this.datosService.getData()
  .subscribe(lista => {
    this.tareas = lista;
    console.log(this.tareas);
  })
}
  
}
