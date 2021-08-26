import './App.scss';
import Features from './Components/Content-Features/Features';
import Pricing from './Components/Content-Pricing/Pricing';
import Worry from './Components/Content-Worry/Worry';
import Landing from "./Components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <span className="App-background"></span>
      <div className="App-land">
      <Landing/>
    
      </div>
      <Worry/>
      <Features/>
      <Pricing/>
    </div>
  );
}

export default App;
