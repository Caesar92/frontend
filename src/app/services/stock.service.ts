import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockList } from '../interfaces/stock';

const API_URL = 'http://localhost:8080/api/stocks'
@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  public decreaseStock(id: number): Observable<StockList>{
    return this.http.put<StockList>(API_URL + `/less/${id}`, { responseType: 'text' })
  }
}
