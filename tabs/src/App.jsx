import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leave from './pages/Leave';
import Balance from './pages/Balance';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/*<Route exact path="/">

          <Redirect to="/Home" />

  </Route>*/}
        <>
          <Route path='/home' exact component={ Home } />
          <Route path='/leave' exact component={ Leave } />
          <Route path='/balance' exact component={ Balance } />
          <Route path='/upcoming' exact component={ Upcoming } />
        </>
      </Router>
    </>
  );
}
export default App;