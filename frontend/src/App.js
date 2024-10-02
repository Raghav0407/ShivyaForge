import './App.css';
import Poster from './Components/Poster';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';
import HomePage from './Pages/HomePage';
import ForgedRings from './Pages/ForgedRings';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/contactus' element={<ContactPage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/productshow' element={<ProductPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/components/forgedrings' element={<ForgedRings/>}/>
        </Routes>
        <Poster />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
