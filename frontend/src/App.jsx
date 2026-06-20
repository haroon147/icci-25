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
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Workshops from './pages/Workshops';
import Gallery from './pages/Gallery';

// ICCI-25 archive site
import ArchiveLayout from './components/icci25/ArchiveLayout';
import Icci25Home from './pages/icci25/Home';
import Icci25About from './pages/icci25/About';
import Icci25Gallery from './pages/icci25/Gallery';
import Icci25Scope from './pages/icci25/Scope';
import Icci25Dates from './pages/icci25/Dates';
import Icci25Speakers from './pages/icci25/Speakers';
import Icci25Committees from './pages/icci25/Committees';
import Icci25Submissions from './pages/icci25/Submissions';
import Icci25ThreeMinuteThesis from './pages/icci25/ThreeMinuteThesis';
import Icci25Workshops from './pages/icci25/Workshops';
import Icci25Schedule from './pages/icci25/Schedule';
import Icci25VirtualProceedings from './pages/icci25/VirtualProceedings';
import Icci25Registration from './pages/icci25/Registration';
import Icci25Contact from './pages/icci25/Contact';
import Icci25Highlights from './pages/icci25/Highlights';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route
          path="/icci-25/*"
          element={
            <ArchiveLayout>
              <Routes>
                <Route path="/" element={<Icci25Home />} />
                <Route path="/about" element={<Icci25About />} />
                <Route path="/gallery" element={<Icci25Gallery />} />
                <Route path="/scope" element={<Icci25Scope />} />
                <Route path="/dates" element={<Icci25Dates />} />
                <Route path="/speakers" element={<Icci25Speakers />} />
                <Route path="/committees" element={<Icci25Committees />} />
                <Route path="/submissions" element={<Icci25Submissions />} />
                <Route path="/3mt" element={<Icci25ThreeMinuteThesis />} />
                <Route path="/workshops" element={<Icci25Workshops />} />
                <Route path="/proceedings" element={<Icci25Schedule />} />
                <Route path="/virtual-proceedings" element={<Icci25VirtualProceedings />} />
                <Route path="/registration" element={<Icci25Registration />} />
                <Route path="/contact" element={<Icci25Contact />} />
                <Route path="/highlights" element={<Icci25Highlights />} />
              </Routes>
            </ArchiveLayout>
          }
        />
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
