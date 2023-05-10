import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  getReviews(id: number) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${environment.API_KEY}&language=en-US&page=1`
    );
  }
}
