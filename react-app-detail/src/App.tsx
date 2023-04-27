// import React from "react";
// import ReactDOM from "react-dom";

// import "./index.scss";

// const App = () => (
//   <div className="mt-10 text-3xl mx-auto max-w-6xl">
//     <div>Name: react-app-detail</div>
//     <div>Framework: react</div>
//     <div>Language: TypeScript</div>
//     <div>CSS: Tailwind</div>
//   </div>
// );
// ReactDOM.render(<App />, document.getElementById("app"));

import React from "react";
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
