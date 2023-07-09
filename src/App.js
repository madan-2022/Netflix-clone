
import './App.scss';
import Home from './Components/Home';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    
    
<div className='App'>
    <Router>
    <Header/>
    <Home/>
    </Router>
        
       
    </div>
    
    
  );
}

export default App;
