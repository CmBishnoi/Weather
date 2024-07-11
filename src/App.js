
import './App.css';
import HomeComponents from './Components/Home';
import LohiN from './Components/LohiN';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    
   
    <Routes>
      <Route path="/" exact element={<LohiN/>} />
      <Route path="/login" element={<HomeComponents/>} />
      </Routes>
  );
}

export default App;





























