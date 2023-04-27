import MovieDetail from "./components/MovieDetail";
import ReactDOM from "react-dom";

import "./index.scss";

interface AppProps {
  movieId: number;
}

const App = ({ movieId }: AppProps) => {
  return (
    <div>
      <MovieDetail id={movieId} />
    </div>
  );
};
ReactDOM.render(<App movieId={50834} />, document.getElementById("app"));

export default App;
