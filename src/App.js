import React from 'react';
import HomePage from './Pages/Home/Home'
import Modal from './Modal/Modal'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './AppStyle.css';
import { navBarStyle } from "./GlobasStyle"

function App() {
  return (
    <Router>
      <div>
        <header>
          <div class="nContainer">
            <a>  <img src={require('./image/placeholder.png')} height="50" /></a>
            <nav>
              <ul id="headerul">
                <li class="left">
                  <Link to="/users" style={navBarStyle}>Hjælp</Link>
                </li>
                <li class="left">
                  <Link to="/about" style={navBarStyle} >Opret Bruger</Link>
                </li>
                <li class="left">
                  <Link to="/" style={navBarStyle}>Log Ind</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div id="contactContainer">
          <div class="cul">
            <ul>
              <li><strong>KUNDESERVICE</strong></li>
              <li><a href="#">SOMETEXT</a></li>
              <li><a href="#">SOMETEXT</a></li>
              <li><a href="#">SOMETEXT</a></li>
              <li><a href="#">SOMETEXT</a></li>
            </ul>
          </div>
          <div class="cul">
          <ul>
            <li><strong>POPULÆRE BYER</strong></li>
            <li><a href="#">SOMETEXttttttT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
          </ul>
          </div>
          <div class="cul">
          <ul>
            <li><strong>SOMETEXT</strong></li>
            <li><a href="#">SOMETEXTtttt</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
          </ul>
          </div>
          <div class="cul">
          <ul>
            <li><strong>SOMETEXT</strong></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
            <li><a href="#">SOMETEXT</a></li>
          </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <HomePage />;
}

function About() {
  return <Modal/>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
