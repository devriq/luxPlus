import React from 'react'
import './Modal.css'


export default ({ status, nome, poster }) => {
    function closeModal() {
        let modal = document.querySelector('.modal')
        modal.style.display = 'none';
    }
    return(
        <div className='modal'>
            <img onClick={closeModal} src="https://www.themoviedb.org/t/p/w500/qqqE8jR2bzZldtW5lJwKhHMxkx0.jpg" id='poster' alt='img'/>
            <div id='description'>
                <div id='title'>Pânico 4</div>
                <div id='overview'>Faz muitos anos que o assassino Ghostface deixou um rastro mortal pela cidade de Woodsboro. A fim de superar o trauma desses terríveis acontecimentos, Sidney Prescott escreveu um livro de auto-ajuda. Ela retorna à Woodsboro para lançar seu livro e reencontra os velhos amigos Gale Weathers e o Xerife Dewey. No entanto, a chegada de Sidney também provoca o retorno de Ghostface, colocando Sidney e todos que ama em perigo.</div>
            </div>
        </div>
    )}