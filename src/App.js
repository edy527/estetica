
import './App.css';
import NavBar from './components/NavBar';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo"/>
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