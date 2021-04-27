import React from 'react';
import './App.css';
import Home from './components/pages/Homepage/Home';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/SignUp/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/pages/Gallery';
import Questions from './components/pages/Questions';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contactus' component={Contact} />
        <Route path='/faq' component={Questions}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
