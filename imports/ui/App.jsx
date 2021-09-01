import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Home';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route  path="/pageOne" component={PageOne} />
        <Route  path="/pageTwo" component={PageTwo} />
      </Switch>
    </Router>
  </div>
);
