import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import Section from './components/Section';
import BooksCase from './components/BooksCase';
import Trending from './components/Trending';
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Landing/>
      <Section/>
      <BooksCase/>
      <Trending/>
      <Footer/>
      
    </div>
  );
}

export default App;
