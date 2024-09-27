
import './App.css';
import   CardComponent  from './Components/CardComponent';
import Carousels from './Components/Carousel';
import Poster from './Components/Poster';

function App() {
 
  return (
    <div className="App">
      <Carousels />
      <CardComponent />
      <Poster />
    </div>
  );
}

export default App;
