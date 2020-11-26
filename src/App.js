import About from './About';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Item from './Item';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav name="Name of Business"></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" exact component={Shop}></Route>
          <Route path="/shop/:id" component={Item}></Route>
        </Switch>
        
        

      </div>
    </Router>
  );
}

export default App;
