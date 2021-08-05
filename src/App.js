
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'



function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo"/>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ProductCard/>
      
    </div>
  );
}

export default App;
