import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor() {}

  getMovieDetails(id: number) {
    return axios.get(`https://yts.mx/api/v2/movie_details.json`, { params: { movie_id: id } });
  }
}
