import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieSearch from "./Components/MovieSearch";
import MovieAdd from "./Components/MovieAdd";

function App() {
  return (
    <div className="App">
      <h1> Movie App</h1>
      <MovieSearch />
      <MovieList />
      <MovieAdd editMode={false} />
    </div>
  );
}

export default App;
