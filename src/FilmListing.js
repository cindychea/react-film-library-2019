import React, {useState} from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films, faves, onFaveToggle, handleFilmDetails}) => {

  const [filter, setFilter] = useState('all');

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  const allFilms = filter === 'faves' ? faves: films;

  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>

      <div className="film-list-filters">
      <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
        ALL
        <span className="section-count">{films.length}</span>
      </div>
      <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
        FAVES
        <span className="section-count">{faves.length}</span>
      </div>
    </div>

      {allFilms.map((film) => (
        React.createElement('div', {key: film.id}, <FilmRow film={film} faves={faves} onFaveToggle={onFaveToggle} handleFilmDetails={handleFilmDetails} />)
        ))
      }
    </div>
  )
};

export default FilmListing;