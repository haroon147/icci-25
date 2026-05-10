import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Scope from './pages/Scope';
import Dates from './pages/Dates';
import Speakers from './pages/Speakers';
import Committees from './pages/Committees';
import Submissions from './pages/Submissions';
import ThreeMinuteThesis from './pages/ThreeMinuteThesis';
import Schedule from './pages/Schedule';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import VirtualProceedings from './pages/VirtualProceedings';
import ICCI25Gallery from './pages/ICCI25Gallery';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Workshops from './pages/Workshops';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/icci-26" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/icci-25-gallery" element={<Gallery />} />
                <Route path="/scope" element={<Scope />} />
                <Route path="/dates" element={<Dates />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/committees" element={<Committees />} />
                <Route path="/submissions" element={<Submissions />} />
                <Route path="/3mt" element={<ThreeMinuteThesis />} />
                <Route path="/workshops" element={<Workshops />} />
                <Route path="/proceedings" element={<Schedule />} />
                <Route path="/virtual-proceedings" element={<VirtualProceedings />} />
                <Route path="/icci-25" element={<ICCI25Gallery />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
