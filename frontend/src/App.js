import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomeScreen from './component/HomeScreen';
import ProductScreen from './component/ProductScreen';
import CartScreen from './component/CartScreen';
import LoginScreen from './component/LoginScreen';
import RegisterScreen from './component/RegisterScreen';
import ProfileScreen from './component/ProfileScreen';
import ShippingScreen from './component/ShippingScreen';
import PaymentScreen from './component/PaymentScreen';
import PlaceOrderScreen from './component/PlaceOrderScreen';
import OrderScreen from './component/orderscreen';
import PayPal from './component/paypal'
//import 'bootstrap';

function App() {
  return (
  <Router>
      <React.Fragment>
        <Header/>
          <main className="py-3">
            <Container>
              <Route path='/' component={HomeScreen} exact/>
              <Route path='/login' component={LoginScreen}/>
              <Route path='/payment' component={PaymentScreen}/>
              <Route path='/placeorder' component={PlaceOrderScreen}/>
              <Route path='/shipping' component={ShippingScreen}/>
              <Route path='/profile' component={ProfileScreen}/>
              <Route path='/register' component={RegisterScreen}/>
              <Route path='/product/:id' component={ProductScreen}/>
              <Route path='/order/:id' component={OrderScreen}/>
              <Route path='/cart/:id?' component={CartScreen}/>
                <Route path='/ca' component={PayPal}/>
              </Container>
          </main>
        <Footer/>
      </React.Fragment>
  </Router>
  );
}

export default App;
