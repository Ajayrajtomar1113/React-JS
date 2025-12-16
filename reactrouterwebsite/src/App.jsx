// import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import { Outlet } from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <Header/>
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

// export default App;



import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>  
  )
}

export default App;
