import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import Aboutus from './Componenets/Aboutus';
import Bubblesort from './Componenets/Bubblesort';
import Quicksort from './Componenets/Quicksort';
import Mergesort from './Componenets/Mergesort';
import Linearsearch from './Componenets/Linearsearch';
import Binarysearch from './Componenets/Binarysearch';
import Contactus from './Componenets/Contactus';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
          <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
          <Routes>
            <Route path='/aboutus' element={<Aboutus/>}/>
          </Routes>
          <Routes>
            <Route path='/bubblesort' element={<Bubblesort/>}/>
          </Routes>
          <Routes>
            <Route path='/quicksort' element={<Quicksort/>}/>
          </Routes>
          <Routes>
            <Route path='/mergesort' element={<Mergesort/>}/>
          </Routes>
          <Routes>
            <Route path='/linearsearch' element={<Linearsearch/>}/>
          </Routes>
          <Routes>
            <Route path='/binarysearch' element={<Binarysearch/>}/>
          </Routes>
          <Routes>
            <Route path='/contactus' element={<Contactus/>}/>
          </Routes>
          
          </div>
        </div>    
    </Router>
  );
}



export default App;