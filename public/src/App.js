import React  from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";
import Landing from './Components/Landing/Landing';
import TodaySpl from './Components/TodaySpl/TodaySpl';
import './styles.css'
import history from './history';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Router history={history}>
				<Switch>
					<Route exact path='/' component={Landing}></Route>
          <Route exact path='/todaySpl' component={TodaySpl}></Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}
