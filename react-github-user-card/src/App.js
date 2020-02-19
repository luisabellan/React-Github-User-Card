import React from "react";
import "./App.css";
import Card from "./Card/Card";
import Cards from "./Cards/Cards";

class App extends React.Component {
  constructor() {
    console.log('constructor is getting called')
    super()
    this.state = {

      name: "",
      image: "",
      userName: "",
      location: "",
      url: "",
      followers: "",
      following: "",
      bio: "",
    }
  }


 

  render() {
    //console.log(this.state.user)

    return (
      <div className="container">
        <div className="header">
          <div className="left-logo">
            <img className="lambda-logo" alt="Lambda Logo" />
          </div>
          <p>
            <span aria-label="heart" role="img">
              ❤️
            </span>
            's
          </p>
          <div className="right-logo">
            <img className="github-logo" alt="GitHub Logo" />
          </div>
        </div>
        <Card />
        <Cards />
        <div className="cards"></div>
      </div>
    )
  }
}

export default App;
