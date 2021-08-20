import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Injectable(){
  providedIn: 'root';
}
export class DatosService {

  constructor(public http: HttpClient) { 
    console.log('Hola soy tu provedor');
  }

  obtenerDatos(){
    return this.http.get('https://demo6193376.mockable.io/todos');
  }
}
