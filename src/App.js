import React from 'react';
import './App.css';
import Home from './components/pages/Homepage/Home';
import Services from './components/pages/Services/Services';
import Contact from './components/pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Questions from './components/pages/Questions';
import Course from './components/pages/Courses/Course';
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ScrollToTop>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contactus' component={Contact} />
        <Route path='/faq' component={Questions} />
        <Route path='/courses' component={Course} />
        </ScrollToTop>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
