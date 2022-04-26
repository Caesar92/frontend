import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/'
@Injectable({
  providedIn: 'root'
})
export class VetementsService {

  constructor(private http: HttpClient) { }
  getVetements(): Observable<any> {
    return this.http.get(API_URL + 'vetements', { responseType: 'json' });
  }

  getDetailVetement(id :number): Observable<any>{
    return this.http.get(API_URL + 'vetements/' + id , { responseType: 'json' });   
  }

  
}
