import MovieDetail2 from "./components/MovieDetail";
import ReactDOM from "react-dom";

import "./index.scss";

interface AppProps {
  movieId: number;
}

const App = ({ movieId }: AppProps) => {
  return (
    <div>
      <MovieDetail2 id={movieId} />
    </div>
  );
};
ReactDOM.render(<App movieId={550} />, document.getElementById("app"));

export default App;
