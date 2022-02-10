import Movie from "./Movie";

function GetMovie (){

    let movieStatus: any[] = [];
    let movieData: any[] = [];
    
      async function loadData() {

            for (let i = 0; i < 10; i++) {
                let apiUrl = `https://api.themoviedb.org/4/list/8175818?page=${i + 1}&2&api_key=a79b231633cd9524b54133ecc5c8f1a5&language=pt-BR&sort_by=release_date.asc`;

                await fetch(apiUrl)
                    .then((res) => res.json())
                    .then((data) => {
                        if(i===0){movieStatus.push(data['comments']);}
                        data['results'].forEach((item: Movie) => { movieData.push(item); });
                    });
            }
        }
      loadData();
    

    return [movieData, movieStatus]
}

export default GetMovie;