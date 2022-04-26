import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
const API_URL = 'http://localhost:8080/api/users'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User>{
    return this.http.get<User>(API_URL + `/${id}`, { responseType: 'json' });
  }

  addVetementToPanier(userId: number, vetementId: number): Observable<any>{
    return this.http.post(API_URL + `/panier?userId=${userId}&vetementId=${vetementId}`, { responseType: 'json' });
  }
}
