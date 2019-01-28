import React from "react";
import "./style.css"

function Jumbotron () {
    return (
        <section>
            <div className="jumbotron">
                <div className="containerJumbotron">
                    <h1 className="display-3 text-center">Clicky Game:</h1>
                    <h2 className="display-5 text-center">The Simpsons Edition!</h2>
                    <p className="instructions text-center">Click on an image to earn points, but don't click on any more than once!</p>
                </div>
            </div>
        </section>
    )
}

export default Jumbotron;