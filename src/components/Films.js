import React, { useState } from 'react';

function Films() {
  const [films, setFilms] = useState('hey');
  return (
    <div className="App">
      {films}
    </div>
  );
}

export default Films;
