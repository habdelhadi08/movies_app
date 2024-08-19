import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import "./App.css";

function App() {
  const apiKey = "98e3fb1f";
  const [movie, setMovie] = useState(null);

  // getMovie
  const getMovie = async (searchTerm) => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apiKey=${apiKey}&t=${searchTerm}`,
      );

      const data = await res.json();

      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    console.log("running useEffect.....");
    getMovie("transformers");
  }, []);

  return (
    <>
      <h1>Movies App</h1>
      <Form moviesearch={getMovie} />
      {movie ? <MovieDisplay movie={movie} /> : <h1>No Movie to display</h1>}
    </>
  );
}
export default App;
