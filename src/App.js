// Main game JS file

import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import GameCard from "./components/GameCard/GameCard";
import Footer from "./components/Footer/Footer";
import Simpsons from "./game.json";
import "./App.css";

class App extends Component {

  state = {
    Simpsons,
    clickedSimpsons: [],
    score: 0,
    topScore: 0,
    message: ""

  };

  // Function that handle main game functionality when user clicks on a character
  characterSelect = event => {

    // stores the character ID that user selected into 'character'
    const character = event.target.id;
    var count = 0;

    // Displays the following message automatically since it'll be the user first selection
    this.setState({ message: "You've picked wisely! Keep going..." });

    // Sets the state of the clickedSimpsons array with the added character ID selected by user
    this.setState({
      clickedSimpsons: this.state.clickedSimpsons.concat(character)
    })
      
    // Iterates through to check repetitive selections
    for (let i = 0; i < this.state.clickedSimpsons.length; i++) {
      
      // if character mathes any element in the array then user loses
      if(character === this.state.clickedSimpsons[i]) {

        // Sets states to display message, change the top score to the current score, resets score to 0, clears array, and shuffles grid
        this.setState({ message: "D'oh! ... You lost!" });
        this.setState({ topScore: this.state.score });
        this.setState({ score: 0});
        this.setState({clickedSimpsons: []})
        this.shuffleGrid(this.state.Simpsons)
        
        return;
      }
      else {

        // Sets state so the message is displayed and adds to count to keep track of the iteration
        this.setState({ message: "You've picked wisely! Keep going..." });
        count++;
      
      }
    }

    // If statment check if count equals the length the current array
    // If condition is met it signifies that length of the array was iterated through in the for loop above
    // meaning that there is no repitition and therefore the user deserves a point
    if (count === this.state.clickedSimpsons.length) {
    
      // Set state for count adding 1
      this.setState({ score: this.state.score + 1 });        

      // Calls shuffleGrid function to shuffle the character array after click event
      this.shuffleGrid(Simpsons)
    
    }
  }

  // Function shuffles the grid 
  shuffleGrid = (array) => {
      let i = array.length - 1;
      for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

  // Function that renders the various compnents
  render() {
    return (
      <div>

        {/* NavBar contains the score and message info */}
        <NavBar
            score = {this.state.score}
            topScore = {this.state.topScore}
            message = {this.state.message}
            />
        <Jumbotron />
        <section className="container">

          {/* Maps through the JSON into the Gamecard to display each character */}
          {this.state.Simpsons.map(Simpsons => (
            <GameCard
              id={Simpsons.id}
              key={Simpsons.name}
              data-id={Simpsons.id}
              image={Simpsons.image}
              characterSelect={this.characterSelect}
            />
          ))}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
