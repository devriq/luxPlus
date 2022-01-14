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
      <nav>
        <button>1960-1994</button>        
        <button>1995-2010</button>        
        <button>2011-2021</button>        
      </nav>
      <section className="list">
        {movieList.map((item, key) => (
          <MovieShow key={key} nome={item.nome} poster={item.poster} />
        ))}
      </section>
    </div>
  )
}
