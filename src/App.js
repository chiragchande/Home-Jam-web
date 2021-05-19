import './App.css';
import Circle from './components/circle/circle.component';
import Img from './assets/Img.png';
import Navigation  from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <Circle></Circle>
    </div>
  );
}

export default App;
