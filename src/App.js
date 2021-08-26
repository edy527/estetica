
import './App.css';
import NavBar from './components/NavBar';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="AppHeader">
        <Link to='/'>
        <img src={logo} alt="Logo"/>
        </Link>
        <NavBar/>
      </header>

      <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route exact path="/item/:id" component={ItemDetailContainer}/> 
      </Switch>
      
    </div>
  </BrowserRouter>
    
  );
}

export default App;