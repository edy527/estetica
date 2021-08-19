
import './App.css';
import NavBar from './components/NavBar';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo"/>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
