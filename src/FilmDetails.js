import React from 'react';

const FilmDetails = ({currentFilm}) => {

  let details;
  
  if (currentFilm) {
    const backdropUrl = `https://image.tmdb.org/t/p/w1280/${currentFilm.backdrop_path}`
    const posterUrl = `https://image.tmdb.org/t/p/w780/${currentFilm.poster_path}`
    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{currentFilm.title}</h1>
        </figure>

        <div className="film-meta">
          <h2 className="film-tagline">{currentFilm.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={currentFilm.title} />
            {currentFilm.overview}
          </p>
        </div>
      </div>
    )
  } else {
    details = (
      <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
      </div>
    )
  }



  return (
    <div className="film-details">
      <h1 className="section-title">DETAILS</h1>
      {details} 
    </div>
  )
};

export default FilmDetails;