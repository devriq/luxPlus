import React, { useEffect, useState } from 'react'
import MovieShow from './components/MovieShow'
import './App.css'
import Movie from './Movie';

export default () => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [listNumber,setListNumber] = useState<string>('3');
  const [w,setW] = useState('0');


  useEffect(function (): void {
      const loadAll = async () => {

        var dataArr: any[] = [];
        for (let i = 0; i < 10; i++) {
          let api_url = `https://api.themoviedb.org/4/list/8175818?page=${i + 1}&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`;

          await fetch(api_url)
            .then((res) => res.json())
            .then((data) => {
              data['results'].forEach((item: Movie) => { dataArr.push(item); });
              setW(data);
            });
        }

        setMovieList(dataArr);
      };
      loadAll();
    }, [listNumber]);
  
  function handleClick1(e:any): void {
    e.preventDefault();
    setListNumber('1');}
  function handleClick2(e:any): void {
    e.preventDefault();
    setListNumber('2');}
  function handleClick3(e:any): void {
    e.preventDefault();
    setListNumber('3');}
  function handleClick4(e:any): void {
    e.preventDefault();
    setListNumber('4');}

    
  return (
    <div className="page">
      <nav>
        <a href='https://devriq.github.io/luxPlus'><img id="logo" src="https://document-export.canva.com/mvE5w/DAE1eamvE5w/151/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20220126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220126T230718Z&X-Amz-Expires=85349&X-Amz-Signature=a347be39e4dba89f8fcab7b1b65efa39f104c6b3cade940bd664358141cc654d&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2027%20Jan%202022%2022%3A49%3A47%20GMT" alt="logIMGo"/></a>
        <ul>
          <li onClick={handleClick1}>1960-1994</li>
          <li onClick={handleClick2}>1995-2010</li>
          <li onClick={handleClick3}>2011-2020</li>
          <li onClick={handleClick4}>2021+</li>
        </ul>
      </nav>
      <section className="list"> 
        {movieList.map((movie:Movie) => {
          return (listNumber === '1' && parseInt(movie.release_date.substring(0, 4)) < 1995) && <MovieShow id={movie.id} original_title={movie.original_title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} />;
        })}
        {movieList.map((movie:Movie) => {
          return (listNumber === '2' && parseInt(movie.release_date.substring(0, 4)) <= 2010 && parseInt(movie.release_date.substring(0, 4)) >= 1995) && <MovieShow id={movie.id} original_title={movie.original_title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} />;
        })}
        {movieList.map((movie:Movie) => {
          return (listNumber === '3' && parseInt(movie.release_date.substring(0, 4)) > 2010 && parseInt(movie.release_date.substring(0, 4)) <= 2020) && <MovieShow id={movie.id} original_title={movie.original_title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date}/>;
        })}
        {movieList.map((movie:Movie) => {
          return (listNumber === '4' && parseInt(movie.release_date.substring(0, 4)) > 2020) && <MovieShow id={movie.id} original_title={movie.original_title} poster_path={movie.poster_path} overview={movie.overview} release_date={movie.release_date} />;
        })}
      </section>
    </div>
  )
}
function e(e: any) {
  throw new Error('Function not implemented.');
}

