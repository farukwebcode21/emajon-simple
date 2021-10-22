import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Shop from './components/Shop/Shop';


const App =()=> {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
           <Shop/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/inventory">
            <Inventory/>
          </Route>
          <Route path="/review">
            <OrderReview/>
          </Route>
          <Route exact path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
