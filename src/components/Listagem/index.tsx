import React, { useEffect, useState } from "react"
import Movie from "../../Movie"
import MovieShow from "../MovieShow"

function Listagem({ listNumber, movieList }: { listNumber: string; movieList: any[]; }): JSX.Element {
    const [activeMovieList, setActiveMovieList] = useState<any[]>([]);

    useEffect(function (): void {
        if (listNumber === '1960-1995') { setActiveMovieList(movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) <= 1995)) }
        if (listNumber === '1996-2010') { setActiveMovieList(movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 1996 && parseInt(movie.release_date.substring(0, 4)) <= 2010)) }
        if (listNumber === '2011-2020') { setActiveMovieList(movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2011 && parseInt(movie.release_date.substring(0, 4)) <= 2020)) }
        if (listNumber === '2021-2022') { setActiveMovieList(movieList.filter((movie: Movie) => parseInt(movie.release_date.substring(0, 4)) >= 2021)) }
    }, [listNumber, movieList]);

    return (
        <>
            <section className="list">
                {activeMovieList.map((movie: Movie) => {
                    return <MovieShow key={movie.id} id={movie.id} overview={movie.overview} original_title={movie.original_title} poster_path={movie.poster_path} release_date={movie.release_date} />
                })}
            </section>
        </>
    )
}
export default Listagem;