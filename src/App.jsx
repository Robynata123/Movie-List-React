import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Movie from './components/Movie.jsx'
import Footer from './components/Footer.jsx'
import About from './parts/About.jsx'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (value) => {
      setSearchTerm(value);
  };


  return (
    <>
    
    <Navbar handleFilter={handleFilter} />
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Route path='/about'>
          <About />
        </Route> */}
      </div>
    </Router>

    <Banner />
    <Movie search={searchTerm} />
    <Footer />
    </>
  )
}

export default App
