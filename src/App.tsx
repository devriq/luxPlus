import React, { useEffect, useState } from 'react'
import './App.css'
import Movie from './Movie';
import NavBar from './components/navBar';
import Footer from './components/Footer';

export default function App() {
  const [movieList, setMovieList] = useState<any[]>([]);


  useEffect(function (): void {
    const loadAll = async () => {

      var tmdbMovieData: any[] = [];
      for (let i = 0; i < 10; i++) {
        let apiUrl = `https://api.themoviedb.org/4/list/8175818?page=${i + 1}&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`;

        await fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            data['results'].forEach((item: Movie) => { tmdbMovieData.push(item); });
          });
      }
      setMovieList(tmdbMovieData);
    };
    loadAll();
  }, []);


  return (
    <div className="page">
      <NavBar movieList={movieList} />
      <Footer />
    </div>
  )
}


