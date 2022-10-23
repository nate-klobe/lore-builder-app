import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/home'
import Worlds from './pages/worlds/worlds'
import CreateWorld from './pages/worlds/create-world'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/worlds" element={<Worlds />}/>
            <Route path="/worlds/create" element={<CreateWorld />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;