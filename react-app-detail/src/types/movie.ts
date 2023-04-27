export interface Movie {
  background_image: string;
  background_image_original: string;
  genres: string[];
  id: number;
  large_cover_image: string;
  medium_cover_image: string;
  rating: number;
  small_cover_image: string;
  title: string;
  title_english: string;
  title_long: string;
  year: number;
  description_full: string;
  description_intro: string;
}

export interface Movie2 {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: Array<{ id: number; name: string }>;
}
