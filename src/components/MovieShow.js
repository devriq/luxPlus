import React from 'react'
import './MovieShow.css'


export default ({ status, nome, poster }) => {
  return (
    <div className="container">
      <div className="movieShow">
        <img className={status} src={poster} alt="poster" />
        <h4 className={status}>{nome}</h4>
      </div>
    </div>
  )
  
}
