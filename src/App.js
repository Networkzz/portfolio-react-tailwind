import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
import Bio from  './components/Bio'
import Works from './components/Work/Works';
import Socials from './components/Socials';
import Bitcoin from './components/Interactive/Bitcoin';
import BitcoinPrice from "./services/BitcoinPrice"
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <Bitcoin/>
      <BitcoinPrice/>
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