import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomeScreen from './component/HomeScreen';
import ProductScreen from './component/ProductScreen';
//import 'bootstrap';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
          <main className="py-3">
            <Container>
              <Route path='/' component={HomeScreen} exact/>
              <Route path='/product/:id' component={ProductScreen}/>
            </Container>
          </main>
        <Footer/>
      </React.Fragment>
  </Router>
  );
}

export default App;
