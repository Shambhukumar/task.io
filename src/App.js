import './App.scss';
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
    </div>
  );
}

export default App;
