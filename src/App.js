import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Navigation
import Navbar from "./components/navbar.component";
import Homepage from "./components/homepage.component";

//Worlds
import Worlds from './components/world/worlds.component';
import World from './components/world/world.component';
import EditWorld from "./components/world/edit-world.component";
import CreateWorld from "./components/world/create-world.component";

//Stories
import Stories from './components/story/stories.component';
import Story from './components/story/story.component';
import EditStory from "./components/story/edit-story.component";
import CreateStory from "./components/story/create-story.component";

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

      <Route exact path ="/stories" element={< Stories />} />
      <Route exact path ="/stories/create" element={< CreateStory />} />
      <Route exact path ="/stories/:id" element={< Story />} />
      <Route exact path ="/stories/:id/edit" element={< EditStory />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
