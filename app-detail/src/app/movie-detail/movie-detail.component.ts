import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { Movie } from '../movie/movie.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
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
    this.route.params.subscribe((params) => (this.id = Number(params['id'])));
    await this.getMovieDetails(this.id);
  }
}
