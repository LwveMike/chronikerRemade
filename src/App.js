import React from 'react';
import NavBar from './components/NavBar'
import generalStyling from './styles/generalStyling.css';
import Note from './components/Note';

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', height: '100vh' }}>
        <Note />
      </div>

    </div>
  );
}

export default App;
