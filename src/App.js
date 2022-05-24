import './App.css';
import CardContainer from './Components/CardContainer/CardContainer';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
     <CardContainer/>
     <Footer/>
    </div>
  );
}

export default App;
