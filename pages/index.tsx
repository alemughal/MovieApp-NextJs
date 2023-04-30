import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies, selectMovies } from "../store/action/movie";
import { AppDispatch } from "@/store/store";
import MovieCard from "../components/MovieCard";
import Image from "next/image";
import searchIcon from "../components/search.png";

const App = () => {
  const [search, setSearch] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const getmovies = useSelector(selectMovies);
  const movies = getmovies.Search;

  useEffect(() => {
    dispatch(searchMovies("avengers"));
  }, [dispatch]);

  if (getmovies.isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>MovieLand</title>
        <meta name="description" content="MovieLand" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Image
            src={searchIcon}
            alt="search-icon"
            onClick={() => dispatch(searchMovies(search))}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies?.map((movie: any) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default App;
