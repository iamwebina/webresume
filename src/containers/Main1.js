import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resume from '../component/Resume';
import Home from './Home.js';

export default function Main() {
  return (
    <Router>
      <div>
        <ul style={styles.nav}>
            <NavLink to="/"> <button style={styles.navItem}> Home  </button> </NavLink>
            <NavLink to="/Profile"><button> Profile </button> </NavLink>
            <NavLink to="/Experience"> <button>  Experience </button> </NavLink>
            <NavLink to="/Technology"> <button>  Technology </button> </NavLink>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Technology">
            <Technology />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*function Home() {
  return (
    <Resume value="Home"/>
  );
}*/

function Profile() {
  return (
    <Resume value="Profile"/>
  );
}

function Experience() {
  return (
    <Resume value="Experience"/>
  );
}

function Technology() {
  return (
    <Resume value="Technology"/>
  );
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );
}

const styles = {};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "80%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "5px"
};
