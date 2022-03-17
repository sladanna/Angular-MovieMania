import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie = new Movie();

  constructor() { }

  ngOnInit(): void {
  }

}
