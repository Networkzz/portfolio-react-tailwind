import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
import Bio from  './components/Bio'
import Works from './components/Work/Works';
import Socials from './components/Socials';
import BitcoinContainer from './components/Interactive/BitcoinContainer';
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <BitcoinContainer/>
      <Header/>
      <About/>
      <Bio/>
      <Works/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;