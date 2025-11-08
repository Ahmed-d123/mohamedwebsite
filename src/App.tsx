import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Achievements from './pages/Achievements';
import Leadership from './pages/Leadership';
import Projects from './pages/Projects';
import Research from './pages/Research';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-[#132647] to-[#1a3d5c] text-[#E6F1FF]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
