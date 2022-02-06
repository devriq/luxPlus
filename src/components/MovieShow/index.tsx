import React from 'react';
import './MovieShow.css'
import Movie from '../../Movie';

export default function MovieShow(movie:Movie): JSX.Element{
 
  return (
    <div className="movieShow">
      
      <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="poster" />
      <div className='overviewInfo'>
        <h2>{movie.original_title} ({movie.release_date.substring(0, 4)})</h2>
        
            <p>{movie.overview}</p>
      </div>
    </div>
  );
}
