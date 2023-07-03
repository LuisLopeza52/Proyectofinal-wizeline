import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  RL_API_COMICS = "http://localhost:3000/comics";

  constructor(private http: HttpClient) { }


  getAllComics(): Observable<any>{
    return this.http.get<any>(this.RL_API_COMICS)
    .pipe( map((data: any) => data))
  };
}
