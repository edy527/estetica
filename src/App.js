
import './App.css';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
import BtnCount from './components/BtnCount'


function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo"/>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ProductCard/>
      <BtnCount/>
    </div>
  );
}

export default App;
