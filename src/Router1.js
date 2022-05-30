
import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom';
import Demo from './Demo';
import Shownews from './Shownews';
class Router1 extends Component {
    render() {
        return (
            <Router>
            <div>
                <br></br>
                <h1 className='h1h'>Welcome to 24h News</h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className=" navbar-vav mr-auto">
                        <li><Link to={'/'} className="nav-link">Admin </Link></li>
                        <li><Link to={'./Shownews'} className="nav-link">Home</Link></li>
               
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Demo} />
                    <Route path='./Shownews' component={Shownews} />
                   
                </Switch>
            </div>
        </Router>
           
        );
    }
}
export default Router1;


