import './App.css';
import Home from "./pages/homepage";
import GamePage from './pages/gamepage';
import { HashRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/game'element={<GamePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
