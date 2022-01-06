import React from 'react'
import './MovieShow.css'

export default ({ nome, poster }) => {
  return (
    <div className="container">
      <div className="movieShow">
        <img src={poster} alt="poster" />
        <h4>{nome}</h4>
      </div>
    </div>
  )
}
