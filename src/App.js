import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
import Bio from  './components/Bio'
import Socials from './components/Socials';
import BitcoinContainer from './components/Interactive/BitcoinContainer';
import Portofolio from './components/Portfolio/Portofolio';
import TodoList from './components/Utility/TodoList';
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <BitcoinContainer/>
      <Header/>
      <About/>
      <Bio/>
      <Portofolio/>
      <Socials/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;