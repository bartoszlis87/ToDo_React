import React from "react";
import { Provider } from 'react-redux';
import store from "../redux/store"
import { HashRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Main from './Main'
import NotFound from './NotFound'

const activeStyle = {
  fontWeight: "bold",
  color: "red"
}

const App = () => (
  <Provider store={store}>
    <div>
      <Router>
        <ul>
          <li><NavLink activeStyle={activeStyle} to="/" exact>All</NavLink></li>
          <li><NavLink activeStyle={activeStyle} to="/done">Done</NavLink></li>
          <li><NavLink activeStyle={activeStyle} to="/not-done">Not-Done</NavLink></li>
        </ul>
        <Switch>
          <Route exact path={'/:filter?'} component={Main} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
