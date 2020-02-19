
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './component/Create';
import Edit from './component/Edit';
import Course from './component/Course';
class App extends Component {
  render() {
    return (
      <Router> 
        <React.Fragment>
          <nav className="navbar navbar-dark bg-primary">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">React CRUD(JSON-server)</Link>
                <button className="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/course">Course</Link>
                  </li>
                  <li>
                    <Link to="/createnew">Create New</Link>
                  </li>
                  <li>
                    <Link to="/edit/:id">Edit Course</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Course} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/createnew" component={Create} />
            <Route exact path="/edit/:id" component={Edit} />
          </Switch>
          </React.Fragment>
      </Router>
    );
  }
}

export default App;