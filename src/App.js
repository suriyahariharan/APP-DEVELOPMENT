import './App.css';
import App1 from './App1';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Services from './Services/Services';
import About from './About/About';
import Help from './Help/Help';
import Coimbatore from './Location/Coimbatore';
import Bangalore from './Location/Bangalore';
import Chennai from './Location/Chennai';
import Login from './Auth/Login';
import Registration from './Auth/Registration';
function App() {
  return (
    <div className="App">
     
     <Router>
      <Routes>
        <Route path="/" element={<App1/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/coimbatore" element={<Coimbatore/>} />
        <Route path="/bangalore" element={<Bangalore/>} />
        <Route path="/chennai" element={<Chennai/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Registration/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
