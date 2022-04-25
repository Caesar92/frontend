import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }
  
  register(
    email: string, 
    password: string, 
    prenom: string,
    nom: string,
    dateDeNaissance: Date,
    adresse: String,
    codePostal: String,
    ville: String,
    pays: String
    ): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      email, password, prenom, nom, dateDeNaissance, adresse, codePostal, ville, pays
    }, httpOptions);
  }
}
