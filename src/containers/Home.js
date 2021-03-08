import React from "react";
import headshot from '../images/headshot.png';
import '../App.css';


function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p>WELCOME </p>
                <img src={headshot} className="App-headshot" alt="headshot" />
            </header>
        </div>
    );
}

export default Home;