import React, {useState} from 'react';
import FilmDetails from './FilmDetails';
import FilmListing from './FilmListing';
import axios from 'axios';
import TMDB from './TMDB';

require('dotenv').config();

const App = () => {

  const [faves, setFaves] = useState([]);
  const [currentFilm, setCurrentFilm] = useState();

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    if (faves.includes(film)) {
      favesCopy.splice(faves.indexOf(film), 1);
      setFaves(favesCopy);
    } else {
      setFaves([...favesCopy, film]);
    }
  };

  const handleFilmDetails = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    // const urlToken = 'http://localhost:8000/api/token/'
    // const url = 'http://localhost:8000/api/game-of-thrones/'

    
    //     axios.post(urlToken, {
    //       "username": process.env.REACT_APP_USERNAME,
    //       "password": process.env.REACT_APP_PASS
    //       })
    //       .then(function(response){
    //           console.log(response.data.access)
    //           localStorage.setItem('token', response.data.access)
    //       })
          
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    // axios.get(url, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    // .then(function (response) {
    //   // handle success
    //   console.log(response.data.message);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })

    axios.get(url).then(response => {
      setCurrentFilm(response.data);
    }).catch(error => {
    });
  };

  return (
    <main className="film-library">
      <div className="film-library">
        <FilmListing onFaveToggle={onFaveToggle} faves={faves} films={TMDB.films} handleFilmDetails={handleFilmDetails} />
        <FilmDetails currentFilm={currentFilm} />
      </div>
    </main>
  );
}

export default App;
