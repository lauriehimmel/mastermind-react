import './App.css';
import { Route, Routes } from "react-router-dom";
import Gamepage from './Pages/Gamepage';
import Welcome from './Pages/Welcome';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Welcome />}/>
      <Route path="/play" element ={<Gamepage />}/>
    </Routes>
  );
}

export default App;
