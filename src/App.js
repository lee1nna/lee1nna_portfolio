import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Career from './components/Career';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Career/>
      <Experience/>
    </div>
  );
}

export default App;
