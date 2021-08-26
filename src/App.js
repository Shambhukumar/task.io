import  {useEffect} from 'react';
import Aos from "aos";
import './App.scss';
import "aos/dist/aos.css";
import Features from './Components/Content-Features/Features';
import Pricing from './Components/Content-Pricing/Pricing';
import Worry from './Components/Content-Worry/Worry';
import Landing from "./Components/Landing/Landing";

const App = () => {
  useEffect(()=>{
    Aos.init({
      duration: 2000
    })
  },[])
  return (
    <div className="App">
      <span className="App-background"></span>
      <div className="App-land">
      <Landing/>
      </div>
      <div data-aos="fade-up">
      <Worry/>
      </div>
      
      <Features/>

      <div data-aos="fade-up">
      
      <Pricing/>
      </div>
    </div>
  );
}

export default App;
