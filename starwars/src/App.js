import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './componets/About';
import Home from './componets/Home';
import Planet from './componets/Planet';
import People from './componets/People';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planets/:id" element={<Planet />} />
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
