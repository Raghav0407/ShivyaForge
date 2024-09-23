
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
