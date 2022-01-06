import React, { useEffect, useState } from 'react'
import Data from './Data'
import MovieShow from './components/MovieShow'
import './App.css'

export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = () => {
      let list = Data.getMovieList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key) => (
          <MovieShow key={key} nome={item.nome} poster={item.poster} />
        ))}
      </section>
    </div>
  )
}
