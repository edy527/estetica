import './App.css';

import NavBar from './components/NavBar';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
      <div className="App">
      <header className="AppHeader">
        <img src={logo} alt="Logo"/>
        <NavBar/>
      </header>
      </div>
      
        <Switch>
          <Route path='/' component={ItemListContainer} />
          <Route path='/' component={ItemDetailContainer} />
        </Switch>
    </Router>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
