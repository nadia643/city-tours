import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import TourList from './components/TourList';
import About from './components/About/About';
import Home from './components/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';


function App() {
    return (
      <React.Fragment>
      <BrowserRouter> 
      <Navbar />
      <Switch> 
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tour-list" component={TourList} />
      </Switch>
      </BrowserRouter>
    </React.Fragment>
    )

  }

export default App;
