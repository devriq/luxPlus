import React, { useState } from "react";
import Listagem from "../Listagem";
import './navBar.module.css'

function NavBar(props: { movieList: any[], movieStatus: any[] }): JSX.Element {
    const [listNumber, setListNumber] = useState<string>('3');


    function handleClick(e: any): void {
        e.preventDefault();
        setListNumber(e.target.innerText);
    }

    return (
        <><nav>
            <img id="logo" src={require('../../assets/logo-luxplus.jpg')} alt="logIMGo" />
            <ul>
                <li onClick={handleClick}>1960-1995</li>
                <li onClick={handleClick}>1996-2010</li>
                <li onClick={handleClick}>2011-2020</li>
                <li onClick={handleClick}>2021-2022</li>
            </ul>
        </nav>
            <Listagem listNumber={listNumber} movieList={props.movieList} movieStatus={props.movieStatus}/>
        </>

    )
}

export default NavBar;