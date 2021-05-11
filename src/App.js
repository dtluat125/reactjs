
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import "bootstrap/dist/js/bootstrap.bundle";
import Certificates from './components/Certificate';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id ="App" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
      <Navbar/>
      <Header/>
      <About/>
      <Certificates/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
