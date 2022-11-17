import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './pages/main';
import Enquiry from './pages/enquiry'


function App() {
  return (
    <Router>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path='/'element={<Main/>}/>
        <Route path='/enquiry' element={<Enquiry/>}/>
      </Routes>
    </Router>
  );
}

export default App;
