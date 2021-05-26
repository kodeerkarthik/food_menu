import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ButtonList from '../Button-list/ButtonList';
import Grid from '../Grid-component/Grid';
import Home from '../Home-component/Home';

export default function RouterComponent() {
  return (
    <div>
      <Router >
				<Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/task1' component={ButtonList}></Route>
          <Route exact path='/task2' component={Grid}></Route>
        </Switch>
      </Router>
    </div>
  );
}
