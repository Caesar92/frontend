import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vetement } from '../interfaces/vetement';
import {Avis} from "../interfaces/avis";
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

  getVetementFilter(sexe : string, min : number, max : number, taille : string[]){
    let sexeParam: string = "";
    if(sexe != null){
      sexeParam = `sexe=${sexe}`
    }
    let minParam: string = "";
    if(min != null){
      minParam = `min=${min}`
    }
    let maxParam: string = "";
    if(max != null){
      maxParam = `max=${max}`
    }
    let tailleParam: string = "";
    if(taille != null){
      tailleParam = `taille=${taille}`
    }
    return this.http.get<Vetement[]>(API_URL + `vetements?${sexeParam}&${minParam}&${maxParam}&${tailleParam}`, { responseType: 'json' });
  }

  addAvis(id: number, avis: Avis) : Observable <any> {
    return this.http.put(API_URL + `vetements/avis/${id}`, avis)

}

}
