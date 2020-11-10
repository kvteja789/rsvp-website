import React from 'react';
import First from './components/First';
import {Route,Link, Redirect} from 'react-router-dom';
import Second from './components/Second';
import Third from './components/Third';

//Here container component is having navigation bar related elements
// and routing..
let Container = () =>{
    return(
      <div>        
        <nav className="navbar navbar-expand-lg navbar-light  bg-info">
          <Link className="navbar-brand text-white" to="/First">First Screen</Link>
          <Link className="navbar-brand text-white" to="/Second">Second Screen</Link>
          <Link className="navbar-brand text-white" to="/Third">Third Screen</Link>
        </nav>

        <Route path="/"  exact={true} component={First} />
        <Route path="/First" component={First} />
        <Route path="/Second" component={Second} />
        <Route path="/Third" component={Third} />
        <Redirect to="/" />
      </div>     
    )
}
export default Container