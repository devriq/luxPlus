import React from 'react'
import './Modal.css'


export default () => {
    function closeModal() {
        let modal = document.querySelector('.modal')
        modal.style.display = 'none'
    }

    return(
        <div className='modal'>
            <img onClick={closeModal} src="" id='poster' alt='poster'/>
            <div id='description'>
                <div id='title'></div>
                <div id='overview'></div>
            </div>
        </div>
    )}