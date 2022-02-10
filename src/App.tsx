import React from 'react'
import './App.css'
import NavBar from './components/navBar';
import Footer from './components/Footer';
import GetMovie from './GetMovie';

export default function App() {
  
  let [movieList , movieStatus] = GetMovie();

  return (
    <div className="page">
      <NavBar movieList={movieList} movieStatus={movieStatus}/>
      <Footer />
    </div>
  )
}


