import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import OrderReview from './components/OrderReview/OrderReview';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';


const App =()=> {
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/placeorder">
            <PlaceOrder/>
          </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          <Route exact path="*">
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
