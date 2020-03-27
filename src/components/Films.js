/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);
  //useEffect to make axios call to server
//   useEffect(async () => {
//     const result = await axios.get('/');
//     console.log(result, 'movie list')
//     setFilms(result.data.data);
//     console.log(films)
//   }, [])
  useEffect(() => {
    async function fetchData() {
        const result = await axios.get('/films');
        console.log(result, 'movie list')
        setFilms(result.data.data);
        console.log(films)
    }
    fetchData();
  });
  return (
    <div className="App">
        <header>
            Studio Ghibli Films
        </header>

        {films.map(movie => (
            <div key={movie.id}>
                <div>
                     {movie.title}
                </div>
                <div>
                    {movie.description}
                </div>
                <div>
                    {movie.director}
                </div>
                <p>{movie.release_date}</p>
            </div>
            
        ))}
        
    </div>
  );
}

export default Films;
