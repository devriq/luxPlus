import React, { useEffect, useState } from "react"
import Movie from "../../Movie"
import MovieShow from "../MovieShow"

function Listagem({ listNumber, movieList, movieStatus }: { listNumber: string; movieList: Movie[]; movieStatus: any[] }): JSX.Element {
    const [activeMovieList, setActiveMovieList] = useState<any[]>([]);

    useEffect(function (): void {
        if (listNumber === '1960-1995') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) <= 1995);
            setActiveMovieList(result);
        }
        if (listNumber === '1996-2010') { 
            let result = movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 1996 && parseInt(movie.release_date.substring(0, 4)) <= 2010) 
            setActiveMovieList(result)
        }
        if (listNumber === '2011-2020') { 
            let result =     movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2011 && parseInt(movie.release_date.substring(0, 4)) <= 2020)
            setActiveMovieList(result)
        }
        if (listNumber === '2021-2022') { 
            let result =     movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2021)
            setActiveMovieList(result)
        }
    }, [listNumber, movieList]);

    return (
        <>
            <section className="movie-list">
                {activeMovieList.map((movie: Movie) => {
                    return <MovieShow key={movie.id} movie={movie} status={movieStatus} />
                })}
            </section>
        </>
    )
}
export default Listagem;