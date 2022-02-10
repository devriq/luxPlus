import React from 'react';
import './MovieShow.css'
import Movie from '../../Movie';

export default function MovieShow(props: {movie: Movie; status:any[]}): JSX.Element {


  return (
    <div className="movieShow">

      <img className={props.status[0][`movie:${props.movie.id}`]} src={"https://image.tmdb.org/t/p/w500" + props.movie.poster_path} alt="poster" />
      <div className='overviewInfo'>
        <h2>{props.movie.original_title} ({props.movie.release_date.substring(0, 4)})</h2>
        <p>{props.movie.overview}</p>
      </div>
    </div>
  );
}
