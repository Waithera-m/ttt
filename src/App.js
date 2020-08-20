import React from 'react';
import './App.css';
import Game from './components/Game';


function App() {
  
  return (
    <div>
      <header className="jumbotron shadow shadow-lg mb-5" style={{backgroundColor: "#4AD3C5", color:"white"}}>
        <h2 className="display-4 text-center">Tic-Tac-Toe</h2> 
      </header>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-7 col-sm-12">
          <Game />
        </div>
        <div className="col-md-1"></div>
    </div>
      
    </div>
    

    
  );
  

  

  

  
}


export default App;
