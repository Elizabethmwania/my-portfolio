import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/app.scss';
import Testmonials from './components/Testmonials';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testmonials />
      <Contact />
    </div>
  );
}

export default App;
