
import './App.css';
import  Carousels from './Components/Carousel';
import { Hotforging } from './Components/Hotforging';
import HotDie_1 from "./Assets/img/Hot-Die-Forging.jpg";
import HotDie_2 from "./Assets/img/Hardware-Tools-300x200.jpeg";
import data from './Assets/data/Carousel.json';
import Gallery from './Components/Gallery';

function App() {
  const images = [ HotDie_1, HotDie_2];
  return (
    <div className="App">
     <Carousels />
      
      {data && data.map((item,index)=>(
        <Hotforging 
        key={index}
        btn_name ={item.btn_name}
        img={images[item.img]}
        title={item.title}
        description={item.description}
        flag={item.flag}
        />
      ))}
      <Gallery />
    </div>
  );
}

export default App;
