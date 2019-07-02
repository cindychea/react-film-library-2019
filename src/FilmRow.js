import React from 'react';
import FilmPoster from './FilmPoster';
import Faves from './Faves';


const FilmRow = ({film, faves, onFaveToggle, handleFilmDetails}) => {


  const handleClick = (film) => {
    onFaveToggle(film)
  }

  const handleFilmDetailsClick = (film) => {
    handleFilmDetails(film)
  };

  const favorited = (film) => {
    if (faves.includes(film)) {
      return 'remove-from-queue'
    } else {
      return 'add-to-queue'
    }
  }

  
  return (
    <div className="film-row" onClick={() => handleFilmDetailsClick(film)}>
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>
      <Faves favorite={favorited(film)} onFaveToggle={() => handleClick(film)} />
    </div>
  )
};

export default FilmRow;