import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Career from './components/Career';
import Header from './components/Header';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className='root'>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Career/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
