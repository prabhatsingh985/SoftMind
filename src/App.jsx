import './App.css';
import ApplyForm from './pages/ApplyForm';
import Navbar from './components/Navbar'; // Corrected import path
import InternshipDetails from './pages/InternshipDetails';
import InternshipTraining from './pages/InternshipTraining';
import Career from './pages/Career';
import Service from './pages/Service'
import { BrowserRouter as Router } from 'react-router-dom'; // Added `Router`
import { Routes, Route } from 'react-router-dom'; // Added `Route`
import Insight from './pages/Insight';
import ScalableAWSPage from './pages/Insight2';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/insights" element={<Insight/>} />
        <Route path="/details" element={<InternshipDetails />} />
        <Route path="/training" element={<InternshipTraining />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service" element={<Service />} />
        <Route path ="/about"  element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
