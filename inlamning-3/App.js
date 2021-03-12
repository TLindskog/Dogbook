import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom'
import Home from './Home'
import Edit from './Edit'
import Create from './Create'
import Profile from './Profile'
import { Component } from 'react'


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      frågetecken: "??",
      user: {}
    }
  }
  render(){
    return(
      <div className = "continer">
          <h1>Dogbook</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
                <Link to ="/profile">Profile</Link>
              </li>
              <li>
                <Link to ="/edit">Edit</Link>
              </li>
              <li>
                <Link to ="/create">Create new dog</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route 
            exact 
            path={"/profile"}
            render={props =>(
            <Profile {...props} frågetecken={this.state.frågetecken}/>
            )}
            />
            <Route exact path="/edit" component={Edit}/>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
        </div>
      
    )
  }
} 
/*
<div className="app">
        <BrowserRouter>
          <Switch>
            <Route 
            exact 
            path={"/profile"}
            render={props =>(
            <Profile {...props} loggedInStatus={this.state.loggedInStatus}/>
            )}
            />
          </Switch>
        </BrowserRouter>

      </div>
      */
  /*render(){
    return (
      <>
        <div className = "continer">
          <h1>Dogbook</h1>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
                <Link to ="/profile">Profile</Link>
              </li>
              <li>
                <Link to ="/edit">Edit</Link>
              </li>
              <li>
                <Link to ="/create">Create new dog</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/edit" component={Edit}/>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
        </div>
      </>
    );
  }*/


