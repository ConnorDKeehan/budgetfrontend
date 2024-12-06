import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/Main';
import React, { useContext } from "react";
import { GlobalContext } from './contexts/GlobalContext';
import { Login } from './pages/Login';

function App() {
  const {hasApiKeyBeenEntered } = useContext(GlobalContext); 

  return (
    <div className="App">
      {hasApiKeyBeenEntered ?
                (<LandingPage/>)
                : (<Login/>)
            }
    </div>
  );
}

export default App;
