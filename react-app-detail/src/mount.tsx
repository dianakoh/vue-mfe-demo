import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MovieDetail from "./components/MovieDetail";

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
      <MovieDetail id={movieId} />
    </StrictMode>
  );
};
