import React from "react";
import "./App.css";
import Card from "./Card/Card";
import Cards from "./Cards/Cards";

class App extends React.Component {
  constructor(props) {
    console.log("constructor is getting called");
    super(props);
    this.state = {
     
      followersArray: []
    };
  }

  

  render() {
    //console.log(this.state.user)

    return (
      <div className="container">
        <div className="header">
          <div className="left-logo">
            <img className="lambda-logo" src="" alt="Lambda Logo" />
          </div>
          <p>
            <span aria-label="heart" role="img">
              ❤️
            </span>
          </p>
          <div className="right-logo">
            <img
              className="github-logo"
              src={`./assets/lambdalogo.png`}
              alt="GitHub Logo"
            />
          </div>
        </div>
        <Card className="card" userName= "luisabellan" />
        <Cards className="cards" followers={this.state.followersArray} />
      </div>
    );
  }
}

export default App;
