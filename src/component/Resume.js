import React, { Component } from 'react';
//import MyStyle from '/styles/mystyle';

class Resume extends Component {
  render() {
    return <div style={styles.content}> <h2>{this.props.value}</h2> </div> ;
  }
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
  top: "40px",
  textAlign: "center"
};

export default Resume;

