import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <UserForm />
      </Router>
    </>
  );
}

export default App;
