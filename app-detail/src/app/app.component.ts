import { Component, OnInit } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import { Movie } from './movie/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-detail';
  movie?: Movie;
  id = 50834;

  constructor(private movieApiService: MovieApiService, private router: Router, private route: ActivatedRoute) {}

  async getMovieDetails(id: number) {
    await this.movieApiService
      .getMovieDetails(id)
      .then((response) => {
        this.movie = response.data.data.movie;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async ngOnInit(): Promise<void> {
    console.log(this.router.url);
    await this.getMovieDetails(this.id);
  }
}
