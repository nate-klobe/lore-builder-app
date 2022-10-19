import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Worlds from './components/world/worlds.component';
import World from './components/world/world.component';
import Homepage from "./components/homepage.component";
import EditWorld from "./components/world/edit-world.component";
import CreateWorld from "./components/world/create-world.component";

function App() {
  return (
    <Router>
      <div className='container'>
      <Navbar />
      <br/>
      <Routes>
      <Route exact path ="/" element={< Homepage />}/>
      <Route exact path ="/worlds" element={< Worlds />} />
      <Route exact path ="/worlds/create" element={< CreateWorld />} />
      <Route exact path ="/worlds/:id" element={< World />} />
      <Route exact path ="/worlds/:id/edit" element={< EditWorld />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
