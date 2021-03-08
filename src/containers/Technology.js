import React from "react";
import '../App.css';
import '../styles/mystyle.css';


function Technology() {
    return (
        <div style={styles.content}>
            <p><h2>Technology</h2></p>
        </div>
    );
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: 'rgb(205,224,201)'
};

styles.content = {
  ...styles.fill,
  top: "50px",
  textAlign: "center"
};

export default Technology;