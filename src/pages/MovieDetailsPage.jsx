import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import api from 'services/api';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import style from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const locationRef = useRef(useLocation().state);

  useEffect(() => {
    try {
      const response = api.fetchMoviesWithId(movieId);
      response.then(data => {
        const {
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = data.data;
        setMovieDetails({
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        });
      });
    } catch (error) {}
  }, [movieId]);

  if (movieDetails) {
    const { title, overview, poster_path, vote_average, genres, release_date } =
      movieDetails;

    return (
      <>
        {locationRef.current && (
          <Link
            className={style.link}
            to={locationRef.current.location}
            state={locationRef.current.search}
          >
            &#8592; Go back
          </Link>
        )}
        <div className={style.info}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className={style.img}
            alt={title}
          />
          <div className={style.text}>
            <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
            <p>{`User score: ${vote_average * 10}%`}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => `${name} `)}</p>
          </div>
        </div>
        <p>Additional information</p>
        <AdditionalInformation />
      </>
    );
  }
}
