import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import Landingpage from './pages/Landingpage';
import Detailpage from './pages/Detailpage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Landingpage />} />
          <Route exact path='/detailpage' element={<Detailpage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
