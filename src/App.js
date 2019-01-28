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

  characterSelect = event => {

    const character = event.target.id;
    var count = 0;
    this.setState({ message: "You've picked wisely! Keep going..." });


    this.setState({
      clickedSimpsons: this.state.clickedSimpsons.concat(character)
    })
      
    for (let i = 0; i < this.state.clickedSimpsons.length; i++) {
      
      if(character === this.state.clickedSimpsons[i]) {

        console.log("You Lost");
        this.setState({ message: "D'oh! You lost!" });
        this.setState({ topScore: this.state.score });
        this.setState({ score: 0});
        this.setState({
          clickedSimpsons: []
        })
        this.shuffleGrid(this.state.Simpsons)
        return;
      }
      else {
        console.log("Pick Again");
        this.setState({ message: "You've picked wisely! Keep going..." });
        count++;
      }
    }

    if (count === this.state.clickedSimpsons.length) {
      this.setState({ score: this.state.score + 1 });
      
      console.log(this.state.score);
      
      this.shuffleGrid(Simpsons)
      
    }
  
  }

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
  
 
  

  render() {
    return (
      <div>
        <NavBar
            score = {this.state.score}
            topScore = {this.state.topScore}
            message = {this.state.message}
            />
        <Jumbotron />
        <section className="container">
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
