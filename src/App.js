import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
import Bio from  './components/Bio'
import Works from './components/Works';
import WorksV2 from './components/WorksV2';
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <Header/>
      <About/>
      <Bio/>
      <Works/>
      <WorksV2/>
      <Footer/>
    </div>
  );
}

export default App;