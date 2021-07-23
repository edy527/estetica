
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import logo from './components/img/logooo.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} /> */}
        <img src={logo} />
        <NavBar/>
      </header>
      <ProductCard/>
      
    </div>
  );
}

export default App;
