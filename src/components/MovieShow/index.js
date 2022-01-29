import React from 'react';
import './MovieShow.css'

export default ({status, original_title, poster_path, overview, release_date, id}) => {
  var a = `movie:${id}`
  //console.log(status['comments'][a])
  
  return (
    <div className="movieShow">
        <img className={status['comments'][a]} src={"https://image.tmdb.org/t/p/w500"+poster_path} alt="poster" />
        <div className='overviewInfo'>
          <h2>{original_title} ({release_date.substr(0,4)})</h2>
          <p>{overview}</p>
        </div>
    </div>
  )
}
