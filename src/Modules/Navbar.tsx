import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import InputForm from './InputForm';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/inputForm'>InputForm</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/inputForm'>
          <InputForm />
        </Route>
      </Switch>
    </>
  );
};

export default Navbar;
