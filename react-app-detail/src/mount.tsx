import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovieDetail2 from "./components/MovieDetail2";

export const mount = (movieId: number) => {
  const id = "app-detail";
  const rootContainer =
    document.getElementById(id) ||
    document.body.appendChild(
      Object.assign(document.createElement("div"), { id })
    );

  const root = createRoot(rootContainer);
  root.render(
    <StrictMode>
      <MovieDetail2 id={movieId} />
    </StrictMode>
  );
};
