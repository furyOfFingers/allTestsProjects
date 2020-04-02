import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from '../About';
import Home from '../Home';
import InputForm from '../InputForm/InputForm';
import './Navbar.css';
import ConverterPage from '../Converter/ConverterPage/ConverterPage';

const NavigationBar = ({}) => {
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/InputForm/InputForm'>InputForm</Link>
        <Link to='/ConverterPage/ConverterPage'>Converter</Link>
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

        <Route path='/ConverterPage/ConverterPage'>
          <ConverterPage />
        </Route>
      </Switch>
    </div>
  );
};

export default NavigationBar;
