import React from 'react'
import './MovieShow.css'
import Modal from './Modal';

export default ({ status, nome, poster }) => {
  function openModal() {
    <Modal/>
    let modal = document.querySelector('.modal')
    modal.style.display = 'flex';
  }
  return (
    <div className="container">
      <div className="movieShow">
        <img onClick={openModal} className={status} src={poster} alt="poster" />
        <h4 className={status}>{nome}</h4>
      </div>
    </div>
  )
  
}
