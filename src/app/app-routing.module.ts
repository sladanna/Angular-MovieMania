import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "movies", component: MoviesComponent},
  {path: "new-movie", component: NewMovieComponent},
  {path: "new-movie/:id", component: NewMovieComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
