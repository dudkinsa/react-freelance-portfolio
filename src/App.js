import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './Layout/Navigation/Navigation';
import Footer from './Layout/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Project from './Pages/Project/Project';
import Contacts from './Pages/Contacts/Contacts';

import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
