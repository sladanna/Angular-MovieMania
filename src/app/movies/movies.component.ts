import { Component, OnInit } from '@angular/core';
import { MovieList } from '../model/movie-list.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieList: MovieList = new MovieList();
  queryParams = {
    page: 1,
    pageSize: 6,
    sort: "",
    sortDirection: ""
  }
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() : void {
    this.service.getAll(this.queryParams).subscribe((data: MovieList) => {
      this.movieList = data;
    })
  }

  pageChange(newPage: number) : void {
    this.queryParams.page = newPage;
    this.getAll();
  }

  changeDirection() : void {
    if(this.queryParams.sortDirection === "desc") {
      this.queryParams.sortDirection = "asc"
    } else {
      this.queryParams.sortDirection = "desc"
    }
    this.getAll();
  }

}
