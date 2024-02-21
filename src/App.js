import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getMoviePopular, searchMovie } from './Api';

function App() {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMoviePopular().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovies = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div className="card" key={i}>
          <img src={`${process.env.REACT_APP_BASIMGURL}/${movie.poster_path}`} alt={movie.title} />
          <div className="content">
            <h1 className="title">{movie.title}</h1>
            <h3 className="info">
              <FontAwesomeIcon icon={faStar} style={{ color: '#ffc800' }} /> | {movie.vote_average} Rating
            </h3>
            <div className="short-desc">Release Date: {movie.release_date}</div>
            <div className="btn">
              <a href="" className="btn-detail">
                Show Detail
              </a>
            </div>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q)
      setPopularMovie(query.results)
      console.log({ query: query })
    }
  }

  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <div className="brand">MIMOVIE</div>
          <ul className="nav-ul">
            <li className="nav-li">Home</li>
            <li className="nav-li">Top-Rated</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="search">
          <input type="text" placeholder="Cari Movie Kesukaan Anda!" className="search-input" onChange={({ target }) => search(target.value)} />
        </div>
        <div className="movies">
          <div className="movie-cards">
            <PopularMovies />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
