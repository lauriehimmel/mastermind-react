import './App.css';
import Gamepage from './Gamepage';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Gamepage />}/>
    </Routes>
  );
}

export default App;
