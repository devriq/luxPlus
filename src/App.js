import React, { useEffect, useState } from 'react'
import MovieShow from './components/MovieShow'
import Modal from './components/Modal';
import './App.css'

const data = require('./data.json');

export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = () => {
      let list = data
      setMovieList(list)
      console.log(list)
    }

    loadAll()
  }, [])


  return (
    <div className="page">
      <Modal/>
      <nav>
        <img src="https://document-export.canva.com/B_Jl0/DAE1ejB_Jl0/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220114T164948Z&X-Amz-Expires=39543&X-Amz-Signature=1bc1c05eacb6ef6663e12c03396a1b5530fed010e0a43c538e6fa69e4844e416&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2015%20Jan%202022%2003%3A48%3A51%20GMT" alt="logo"/>
        <ul>
          <li>1960 - 1994</li>        
          <li>1995 - 2010</li>        
          <li>2011 - 2021</li>
        </ul>
        <button>Add</button>        
      </nav>
      <section className="list">
        {movieList.map((item, key) => (
          <MovieShow status={item.status} key={key} nome={item.title} poster={item.poster} overview={item.overview} />
          ))}
      </section>
    </div>
  )
}
