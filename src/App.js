
import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import OBL from './OBL'
import PBL from './PBL'
import Navbar from './Layout/Navbar.jsx';


function App() {
  return (
    <div>
      <Navbar />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/OBL">
            <OBL />
          </Route>
          <Route exact path="/PBL">
            <PBL />
          </Route>
        </div>
      </BrowserRouter>
    </div>

  );
}



export default App;
