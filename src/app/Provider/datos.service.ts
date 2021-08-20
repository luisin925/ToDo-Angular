import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  constructor(private http: HttpClient) {}
  
  getData(){
    const url = 'https://demo6193376.mockable.io/todos';
    return this.http.get<Data[]>(url);
  }


}
