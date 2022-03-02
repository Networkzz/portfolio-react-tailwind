import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
import Bio from  './components/Bio'
import Socials from './components/Socials';
import BitcoinContainer from './components/Interactive/BitcoinContainer';
import Portofolio from './components/Portfolio/Portofolio';
import Portofolio2 from './components/Portfolio/Portofolio2';
import TodoList from './components/Utility/TodoList';
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <Header/>
      <About/>
      <Bio/>
      <Portofolio/>
      <Portofolio2/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;