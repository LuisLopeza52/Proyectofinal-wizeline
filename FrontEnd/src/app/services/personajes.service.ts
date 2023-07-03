import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  URL_API_PERSONAJES = "http://localhost:3000/personajes";

  constructor(private http: HttpClient) { }

  getAllCharacter(): Observable<any>{
    return this.http.get<any>(this.URL_API_PERSONAJES)
    .pipe( map((data: any) => data))
  };

  getCharacterById(id: string): Observable<any>{
    const url = `${this.URL_API_PERSONAJES}/${id}`
    return this.http.get<any>(url)
    .pipe( map((data: any) => data))
  };

}
