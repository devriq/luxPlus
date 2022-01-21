import './MovieShow.css'

export default function ({status, original_title, poster_path, overview, release_date, id}) {
  function openModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500"+poster_path;
    document.getElementById("title").innerText = original_title;
    document.getElementById("overview").innerText = overview;
  }

  var a = `movie:${id}`
  console.log(status['comments'][a])
  
  return (
    <div className="movieShow">
        <img onClick={openModal} className={status['comments'][a]} src={"https://image.tmdb.org/t/p/w500"+poster_path} alt="poster" />
        <h3>{original_title} ({release_date.substr(0,4)})</h3>
        <div onClick={openModal} className='overviewInfo'>
          <h3>Sinopse</h3>
          <p>{overview}</p>
        </div>
    </div>
  )
}
