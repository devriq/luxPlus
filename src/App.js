import React, { useEffect, useState } from 'react'
import MovieShow from './components/MovieShow'
import Modal from './components/Modal';
import './App.css'

const API1 = 'https://api.themoviedb.org/4/list/8175818?page=1&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'
const API2 = 'https://api.themoviedb.org/4/list/8175818?page=2&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'
const API3 = 'https://api.themoviedb.org/4/list/8175818?page=3&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'
const API4 = 'https://api.themoviedb.org/4/list/8175818?page=4&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'
const API5 = 'https://api.themoviedb.org/4/list/8175818?page=5&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [k,setK] = useState('0');
  const [w,setW] = useState('0');



  useEffect(() => {
    let dataArr = [];
    fetch(API1)
      .then((res)=>res.json())
      .then((data) => {
      data['results'].forEach(item => {dataArr.push(item)})

    fetch(API2)
      .then((res)=>res.json())
      .then((data) => {
      data['results'].forEach(item => {dataArr.push(item)})          
      });   
      
    fetch(API3)
      .then((res)=>res.json())
      .then((data) => {
      data['results'].forEach(item => {dataArr.push(item)})          
      });   
    
    fetch(API4)
      .then((res)=>res.json())
      .then((data) => {
      data['results'].forEach(item => {dataArr.push(item)})          
      });   

    fetch(API5)
      .then((res)=>res.json())
      .then((data) => {
      data['results'].forEach(item => {dataArr.push(item)})          
      });   
        setMovieList(dataArr);
        setW(data);
        console.log(dataArr)
      })
      
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
        <button>Search</button>        
      </nav>
      <section className="list"> 
        {movieList.map((movie) => (k=='1'&& parseInt(movie.release_date.substr(0,4))<1995) && <MovieShow key={movie.id} {...movie} status={w} />)}
        {movieList.map((movie) => (k=='2'&& parseInt(movie.release_date.substr(0,4))<2010 && parseInt(movie.release_date.substr(0,4))>=1995) && <MovieShow key={movie.id} {...movie} status={w}/>)}
        {movieList.map((movie) => (k=='3'&& parseInt(movie.release_date.substr(0,4))<2020 && parseInt(movie.release_date.substr(0,4))>=2010) && <MovieShow key={movie.id} {...movie} status={w}/>)}
        {movieList.map((movie) => (k=='4'&& parseInt(movie.release_date.substr(0,4))>=2020) && <MovieShow key={movie.id} {...movie} status={w}/>)}
      </section>
      <footer>
        {k!=='0' && <h6>Powered by ©. All rights reserved.</h6>}
      </footer>
    </div>
  )
}
