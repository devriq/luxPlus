import React from 'react';
import './MovieShow.css'
import Movie from '../../Movie';

export default function MovieShow(props: Movie): JSX.Element {

  return (
    <div className="movieShow">

      <img src={"https://image.tmdb.org/t/p/w500" + props.poster_path} alt="poster" />
      <div className='overviewInfo'>
        <h2>{props.original_title} ({props.release_date.substring(0, 4)})</h2>

        <p>{props.overview}</p>
      </div>
    </div>
  );
}
