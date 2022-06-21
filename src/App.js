import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
