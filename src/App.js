import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About/About';
function App() {
  return (
    <div className="bg-gray-700">
      <Nav/>
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
