import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { SearchProvider } from './utils/SearchContext.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './page/AboutPage.jsx'
import DescriptionPage from './page/DescriptionPage.jsx'
import MainPage from './page/MainPage.jsx'
import Navbar from './components/Navbar.jsx'
// import Popular from './page/Popular.jsx'
import TvSectionPage from './page/TvSectionPage.jsx'

import './App.css'

const App = () => {

  return (
    <>

      <SearchProvider>
        <Router>
            <Navbar/>
            <Routes>
              <Route path="/" index element={<MainPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/deskripsi/:id" element={<DescriptionPage />} />
              <Route path="/tv" element={<TvSectionPage />} />
            </Routes>
          <Footer />
        </Router>
      </SearchProvider>
    </>
  )
}

export default App
