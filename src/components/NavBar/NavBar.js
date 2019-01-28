// Component that holds the Navbar
//Also has the html neeed to display the score, total score, and messages during gameplay

import React, { Component } from "react";
import "./style.css"

class NavBar extends Component {
    render () {
        return (
            <section>
                <nav className="navbar navbar-light py-3">
                    <span className="navbar-brand ml-5">Clicky Game!</span>
                    <span className="message text-center">{this.props.message}</span>
                    <div className = "gameScore">
                        <span className="score mr-5">Score: {this.props.score}</span>
                        <span className="topScore mr-5">Top Score: {this.props.topScore} </span>
                    </div>
                </nav>
            </section>
        )
    }
}

export default NavBar;