import './MovieShow.css'

export default function ({status, nome, poster, overview}) {
  function openModal() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    document.getElementById("poster").src = poster;
    document.getElementById("title").innerText = nome;
    document.getElementById("overview").innerText = overview;
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
