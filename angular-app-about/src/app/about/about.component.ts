import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  id = window.movieId;
  reviews = undefined;

  constructor(private aboutService: AboutService) {}

  async getReviews(id: number) {
    await this.aboutService
      .getReviews(id)
      .then(
        (response) =>
          (this.reviews = response.data.results.map((item: any) => {
            return {
              ...item,
              created_at: item.created_at.split('T')[0],
            };
          }))
      )
      .catch((error) => console.error(error));
  }

  async ngOnInit(): Promise<void> {
    await this.getReviews(this.id);
  }
}
