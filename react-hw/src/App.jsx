import React from 'react';
import Header from './components/Header/Index';


function Button () {
  return <button>Добавить</button>
}



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='header'>
        <div className='logo'>
          <img width="40px" src={logoPng} alt="Weather logo" />
        </div>
        <Button />
        <h1>REACT WEATHER</h1>
      </div>
    </div>

  )
}

export default App