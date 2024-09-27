import './App.css';
import   CardComponent  from './Components/CardComponent';
import Carousels from './Components/Carousel';
import Poster from './Components/Poster';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousels from './Components/Carousel';
import GTAndLN from './Components/GTAndLN';
import { MiddleComponent } from './Components/MiddleComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { OurForgingSolutions } from './Components/OurForgingSolutions';
function App() {
 
  return (
    <div className="App">
      <Carousels />
      <CardComponent />
      <Poster />
      <BrowserRouter>
      <Navbar/>
      <Carousels/>
      <OurForgingSolutions/>
      <GTAndLN/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
