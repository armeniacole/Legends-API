import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Legends API</h1>
      <h2>Very Basic Documentation</h2>
      <div>
        <h3>Characters</h3>
        <p>
          get all characters at <span>/api/characters</span>
        </p>
        <p>
          get character by id at <span>/api/characters/C001</span> character id
          begins with "C" followed by three unique digits.
        </p>
      </div>
      <div>
        <h3>Episodes</h3>
        <p>
          get all characters at <span>/api/episodes</span>
        </p>
        <p>
          get character by id at <span>/api/episodes/LOT101</span> character id
          begins with the show code eg: "LOT" for DC's Legends of Tomorrow
          followed by three digit season x episode code.
        </p>
      </div>
      <div>
        <h3>Seasons</h3>
        <p>
          get all characters at <span>/api/seasons</span>
        </p>
        <p>
          get character by id at <span>/api/seasons/LOT1</span> character id
          begins with the show code eg: "LOT" for DC's Legends of Tomorrow
          followed by the season number.
        </p>
      </div>
      <div>
        <h3>Groups</h3>
        <p>
          get all characters at <span>/api/groups</span>
        </p>
        <p>
          get character by id at <span>/api/groups/G001</span> character id
          begins with "G" followed by three unique digits.
        </p>
      </div>
    </div>
  );
}

export default App;
