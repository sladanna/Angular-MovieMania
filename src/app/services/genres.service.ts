import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../model/genre.model';
import { map } from 'rxjs/operators';


const baseUrl="http://localhost:3000/api/genres";
@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) { }

  getGenres() : Observable<Genre[]> {
    return this.httpClient.get(baseUrl).pipe(map((x:any) => {
      return x.map((elem: any) => new Genre(elem));
    }))
  }

  postGenre(genre: Genre) : Observable<Genre> {
    return this.httpClient.post(baseUrl, genre).pipe(map((x:any) => {
      return new Genre(x);
    }))
  } 
}
