import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './products-list/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
 URL: "https://667436d675872d0e0a95907d.mockapi.io/api/Preferencias" = "https://667436d675872d0e0a95907d.mockapi.io/api/Preferencias";

  constructor(private http:HttpClient) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URL);
  }
}
