import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import InputForm from '../InputForm/InputForm';
import './Navbar.css';
import { Nav } from 'react-bootstrap';

const NavigationBar = ({}) => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <span> <Link to='/'>Home</Link> </span>

        <span> <Link to='/about'>About</Link> </span>

        <span> <Link to='/InputForm/InputForm'>InputForm</Link> </span>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/InputForm/InputForm'>
          <InputForm />
        </Route>
      </Switch>
    </div>
  );
};

export default NavigationBar;
