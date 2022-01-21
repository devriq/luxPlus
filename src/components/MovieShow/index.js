import './MovieShow.css'

export default function ({status, original_title, poster_path, overview}) {
  function openModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500"+poster_path;
    document.getElementById("title").innerText = original_title;
    document.getElementById("overview").innerText = overview;
  }
  return (
    <div className="movieShow">
        <img onClick={openModal} className={status} src={"https://image.tmdb.org/t/p/w500"+poster_path} alt="poster" />
        <h3>{original_title}</h3>
        <div onClick={openModal} className='overviewInfo'>
          <h3>Sinopse</h3>
          <p>{overview}</p>
        </div>
    </div>
  )
}
