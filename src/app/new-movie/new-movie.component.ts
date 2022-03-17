import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../model/genre.model';
import { Movie } from '../model/movie.model';
import { GenresService } from '../services/genres.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  movieId: number = 0;
  isNew: boolean = true;
  movie: Movie = new Movie();
  genres: Genre[] = [];
  displayMenu: boolean = false;
  newGenre: Genre = new Genre();
  constructor(private route: ActivatedRoute, private services: MoviesService, private genreService: GenresService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      if(data['id']) {
        this.movieId = data['id'];
        this.isNew = false;
        this.getOne();
      } else {
        this.isNew = true;
      }
      this.getGenres();
    })
  }

  getOne() : void {
    this.services.getOne(this.movieId).subscribe((data: Movie) => {
      this.movie = data;
    })
  }

  getGenres() : void {
    this.genreService.getGenres().subscribe((data: Genre[]) => {
      this.genres = data;
    })
  }
  save() : void {
    if(this.isNew) {
      this.services.postMovie(this.movie).subscribe((data:Movie) =>{
        this.router.navigateByUrl("/movies");
      }, err => alert("Error"));
    } else {
      this.services.putMovie(this.movieId,this.movie).subscribe((data:Movie) =>{
        this.router.navigateByUrl("/movies");
      }, err => alert("Error"));
    }
  }

  showMenu() : void {
    this.displayMenu = true;
  }

  postGenre() : void {
    this.genreService.postGenre(this.newGenre).subscribe((data: Genre) => {
      this.getGenres();
      this.displayMenu = false;
    })
  }

  

}
