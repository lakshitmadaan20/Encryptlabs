import React from 'react';
import './App.css';
import Home from './components/pages/Homepage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/price' component={Pricing} />
        <Route path='/contactus' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
