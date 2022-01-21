import React, { useEffect, useState } from 'react'
import MovieShow from './components/MovieShow'
import Modal from './components/Modal';
import './App.css'
import { createLogicalOr } from 'typescript';

export default () => {
  const [movieList, setMovieList] = useState([])
  const [k,setK] = useState('0');
  const [w,setW] = useState('0');


  useEffect(async() => {
    let dataArr = [];
    for(let x = 0; x<10; x++){  
      var api_url = `https://api.themoviedb.org/4/list/8175818?page=${x+1}&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`
      await fetch(api_url)
        .then((res)=>res.json())
        .then((data) => {
        data['results'].forEach(item => {dataArr.push(item)});
        console.log(x);
        console.log(data);
        setW(data);
      })
        
    }
    setMovieList(dataArr);
    

}, [])

  function handleClick1(e) {
    e.preventDefault();
    setK('1');}
  function handleClick2(e) {
    e.preventDefault();
    setK('2');}
  function handleClick3(e) {
    e.preventDefault();
    setK('3');}
  function handleClick4(e) {
    e.preventDefault();
    setK('4');}

    
  return (
    <div className="page">
      <nav>
        <a href='https://devriq.github.io/luxPlus'><img src="https://document-export.canva.com/B_Jl0/DAE1ejB_Jl0/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220114T164948Z&X-Amz-Expires=39543&X-Amz-Signature=1bc1c05eacb6ef6663e12c03396a1b5530fed010e0a43c538e6fa69e4844e416&X-Amz-SignedHeaders=host&response-expires=Sat%2C%2015%20Jan%202022%2003%3A48%3A51%20GMT" alt="logo"/></a>
        <ul>
          <li onClick={handleClick1}>1960-1994</li>
          <li onClick={handleClick2}>1995-2010</li>
          <li onClick={handleClick3}>2011-2020</li>
          <li onClick={handleClick4}>2021+</li>
        </ul>
        <button>LR</button>     
        
      </nav>
      <section className="list"> 
        {movieList.map((movie) => (k==='1'&& parseInt(movie.release_date.substr(0,4))<1995) && <MovieShow key={movie.id} {...movie} status={w} />)}
        {movieList.map((movie) => (k==='2'&& parseInt(movie.release_date.substr(0,4))<=2010 && parseInt(movie.release_date.substr(0,4))>=1995) && <MovieShow key={movie.id} {...movie} status={w}/>)}
        {movieList.map((movie) => (k==='3'&& parseInt(movie.release_date.substr(0,4))>2010 && parseInt(movie.release_date.substr(0,4))<=2020) && <MovieShow key={movie.id} {...movie} status={w}/>)}
        {movieList.map((movie) => (k==='4'&& parseInt(movie.release_date.substr(0,4))>2020) && <MovieShow key={movie.id} {...movie} status={w}/>)}
      </section>
      <footer>
        {k!=='0' && <h6>Powered by ©. All rights reserved.</h6>}
      </footer>
    </div>
  )
}
