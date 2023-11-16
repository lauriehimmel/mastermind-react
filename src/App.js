import './App.css';
import { Route, Routes } from "react-router-dom";
import Gamepage from './Pages/Gamepage';
import Welcome from './Pages/Welcome';
import Instructions from './Components/Instructions';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}/>
      <Route path="/play" element ={<Gamepage />}/>
      <Route path="/instructions" element ={<Instructions />}/>
    </Routes>
  );
}

export default App;
