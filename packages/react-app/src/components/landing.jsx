import React from 'react';
import "./css/landing.css";

function Home() {
    return (
    <div>
        <nav>
            <div className="leftNav">
                <a href="/">
                    <img src="./img/logo.svg" alt="Spindle"></img>
                </a>
            </div>
            <div className="rightNav">
                <ul className="menu">
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Sign In</a></li>
                </ul>
                <a href="#" className="startBtn">Get Started</a>
            </div>
        </nav>

        <section className="mid">
            <div className="leftSec">
                <p className="smallTxt">The future of write-ups</p>
                <div className="bigTxt">The <div className="colorTxt">next gen</div><br/>
                    publishing platform,<br/> the collection of NFT’s
                </div>
                <p className="medTxt">Explore alternate storylines of the same book/visual memoir with
                    <span className="spindleTxt">spindle</span>
                </p>
            </div>
            <div className="rightSec">
                <img src="./img/eth.svg" alt="Etherium Coin" />
            </div>
        </section>
    <div className="bottomWave"></div>
    </div>
    );
}

export default Home;