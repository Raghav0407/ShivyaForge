import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousels from './Components/Carousel';
import GTAndLN from './Components/GTAndLN';
import { MiddleComponent } from './Components/MiddleComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { OurForgingSolutions } from './Components/OurForgingSolutions';
import ForgingRings from './Components/ForgingRings';
import Products from './Components/Products';
import Parts from './Components/Parts';
import ForgedComponents from "./Components/ForgedComponents";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Carousels />
          <ForgedComponents />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
