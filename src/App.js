import React, { Component } from 'react';
import HomePage from './Pages/Home/Home'
import Modal from './Modal/Modal'
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import './AppStyle.css';
import { navBarStyle } from "./GlobasStyle"

class App extends Component {
  constructor(props) {
    super();
    this.state = { loginModal: false, createModal: false }
  }


  loginModalClick = () => {
    if (this.state.loginModal === false) {

      this.setState({ loginModal: true })
    }
    else {

      this.setState({ loginModal: false })
    }

  }


  createModalClick = () => {
    if (this.state.loginModal === false) {

      this.setState({ createModal: true })
    }
    else {

      this.setState({ createModal: false })
    }
  }

  componentDidMount(){

  }




  render() {
    return (
      <Router>
        <div>
          <header>
            <div class="nContainer">
              <li><Link to="/"> <a>  <img src={require('./image/placeholder.png')} alt="" height="50" /></a></Link></li>
              <nav>
                <ul id="headerul">
                  <li class="left">
                    <Link to="/users" style={navBarStyle}>Hjælp</Link>
                  </li>
                  <li class="left">
                    <a onClick={this.loginModalClick} href="#" style={navBarStyle} >Opret Bruger</a>
                  </li>
                  <li class="left">
                    <a onClick={this.loginModalClick} href="#" to="/login" style={navBarStyle}>Log Ind</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Modal loginModal={this.state.loginModal} loginModalClick = {this.loginModalClick} />


          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />

        </div>
      </Router>
    );
  }
}

function Home() {
  return <HomePage />;
}

function Users() {
  return <h2>Users</h2>;
}



export default App;
