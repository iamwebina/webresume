import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
//import Resume from '../component/Resume';
import Home from './Home';
import Profile from './Profile';
import Experience from './Experience';
import Technology from './Technology';

export default function Main() {
  return (
    <Router>
      <div>
        <ul style={styles.nav}>
            <NavLink to="/" className="nav-text"> Home  </NavLink>
            <NavLink to="/Profile" className="nav-text">Profile </NavLink>
            <NavLink to="/Experience" className="nav-text">  Experience  </NavLink>
            <NavLink to="/Technology" className="nav-text">   Technology  </NavLink>
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
}

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
}*/

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
  margin: 5,
  position: "absolute",
  top: 0,
  height: "100%",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  height: "30px",
  padding: "8px"
};
