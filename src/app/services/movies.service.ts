import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieList } from '../model/movie-list.model';
import {map} from 'rxjs/operators';
import { Movie } from '../model/movie.model';


const baseUrl = "http://localhost:3000/api/movies";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getAll(params?:any) : Observable<MovieList> {

    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort || "")
        .set("sortDirection", params.sortDirection)
      }
    }


     return this.httpClient.get(baseUrl,queryParams).pipe(map((x:any) => {
      return new MovieList(x);
    }))
  }

  getOne(movieId: number) : Observable<Movie> {
    return this.httpClient.get(`${baseUrl}/${movieId}`).pipe(map((x:any) => {
      return new Movie(x);
    }))
  }

  postMovie(movie: Movie) :Observable<Movie>{
    return this.httpClient.post(baseUrl, movie).pipe(map((x:any) => {
      return new Movie(x);
    }))
  }

  putMovie(movieId:number, movie:Movie) : Observable<Movie> {
    return this.httpClient.put(`${baseUrl}/${movieId}`, movie).pipe(map((x:any) => {
      return new Movie(x);
  }))
}
}
