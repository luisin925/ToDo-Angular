import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../interfaces/data';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  url = 'https://demo6193376.mockable.io/todos';
  lista: Subject<Data[]>;
  todoData: Data[] = [];

  constructor(private http: HttpClient) {
    this.lista = new Subject();
    this.lista.next(this.todoData);
    this.initLista();
  }

  getData(): Observable<Data[]> {
    return this.lista;
  }

  initLista() {
    (this.http.get(this.url) as Observable<Data[]>)
      .toPromise()
      .then((value) => {
        console.log({ value });
        this.todoData = value;
        this.lista.next(value);
      });
  }

  crearLista(tarea: Data) {
    this.todoData.push(tarea);
    console.log(this.todoData);
    this.lista.next(this.todoData);
  }

  eliminarLista(item){
      //this.todoData.splice(item, this.todoData.indexOf(item));
      //console.log(this.todoData.splice(item));
      //const indice = this.todoData.indexOf(4,1);
      this.todoData.splice((item-1),1); 
  }

  completarTarea(){
    console.log(this.todoData.map);
  }
}
