import React from "react";
import '../App.css';
import '../styles/mystyle.css';
//import Text from ""


function Profile() {
    return (
        <div style={styles.content}>
            <h2>Personal Summary</h2>
            <body>
                <p>12+ 	years of professional experience in software development and support</p>
                <p>3+ 	years of administrative and leadership    experience </p>
                <p>Well-rounded,	detail-oriented, self-starter, quick learner and team player</p>
                <p> Fluent	in verbal and written English communication skills</p>
                <p>Restorative(ability	to find/fix bugs), <br/> Individualization(ability to customize), Intellection(strong analytical skills), <br/>
                Strategic(finds better ways of doing) and Connectedness(ability to see patterns) <br/> based on the book Strengths Finder 2.0 by Tom Rath </p>
            </body>
            <div>
				<span>Progress bar here! 90%</span>
			</div>
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

export default Profile;