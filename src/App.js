
import './App.css';
import Hero from './components/Hero';

import {BrowserRouter as Router} from 'react-router-dom'
import Products from './components/products';
import {Data} from './components/products/data'
import Features from './components/Features';

function App() {
  return (
    <div className="App">
        <Router>
        
        <Hero/>
        <Products heading= 'Choose your favourite'  data= {Data} />
        <Features/>
        </Router>
       
    </div>
  );
}

export default App;
