import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import QAForm from './components/QAForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact />
            <Route path='/user' exact component={UserForm} />
            <Route path='/qa' exact component={QAForm} />
          </Switch>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
