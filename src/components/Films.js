/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState({ movies: []});
  //useEffect to make axios call to server
  useEffect(async () => {
    const result = await axios.get('/poop');
    console.log(result, 'movie list')
    setFilms(result.data);
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default Films;
