import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';


import { Home } from './pages/home/home';
import { Main } from './pages/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/"  element={<Main/>} />
  
          

        </Routes>
      </Router>
    </div>
  );
}
export default App;

