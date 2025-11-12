import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import PaidWork from './pages/PaidWork';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/paid-work" element={<PaidWork />} />
        <Route path="/activities" element={<Leadership />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </Router>
  );
}

export default App;
