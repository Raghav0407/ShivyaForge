import './App.css';
import   CardComponent  from './Components/CardComponent';
import Poster from './Components/Poster';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousels from './Components/Carousel';
import GTAndLN from './Components/GTAndLN';
import { MiddleComponent } from './Components/MiddleComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { OurForgingSolutions } from './Components/OurForgingSolutions';
import ComponentAndParts from './Components/ComponentAndParts';
import Facilities from './Components/Facilities';
import ContactUs from './Components/ContactUs';
function App() {
 
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
      <Carousels />
      <OurForgingSolutions/>
      
      <CardComponent />
      <ComponentAndParts/>
      <Facilities/>
      <Poster />
      <GTAndLN/>
      <ContactUs/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
