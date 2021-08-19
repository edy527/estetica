import './App.css';

import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import logo from './img/logooo.png'
import ItemListContainer from './components/ItemListContainer'
<<<<<<< HEAD
<<<<<<< HEAD
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
=======
=======
>>>>>>> parent of 8d5e131 (edgardo david beltran entrega Numero 7)

>>>>>>> parent of 8d5e131 (edgardo david beltran entrega Numero 7)


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
<<<<<<< HEAD
      </div>
      
        <Switch>
          <Route path='/' component={ItemListContainer} />
          <Route path='/' component={ItemDetailContainer} />
        </Switch>
    </Router>
    </BrowserRouter>
    
    
    </>
=======
      <ItemListContainer/>
    </div>
>>>>>>> parent of 8d5e131 (edgardo david beltran entrega Numero 7)
  );
}

export default App;
