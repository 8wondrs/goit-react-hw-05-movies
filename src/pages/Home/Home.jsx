import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from '../../services/api.js';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MovieList, Title } from './Home.styled.jsx';

const theMovieDbAPI = new TheMovieDbAPI();

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.getPopularFilms();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <Title>Trending today:</Title>
      <MovieList>
        {movies !== null &&
          movies.map(movie => {
            return <MoviesList {...movie} key={movie.id} />;
          })}
      </MovieList>
      {error && <p>Error{error}</p>}
    </>
  );
}

export default Home;
