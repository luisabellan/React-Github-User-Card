import React from "react";
import "./Card.scss";

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor is getting called");
    // console.log(this.props)
    this.state = {
      follower: {
        name: "",
        image: "",
        userName: "",
        location: "",
        url: "",
        followers: "",
        following: "",
        bio: ""
      }
    };
  }

  

  render() {
    //console.log()

    return (
      <div className="card">
        <img src={this.state.follower.image} alt="me" />
        <div className="card-info">
          <h3 className="name">{this.state.follower.name}</h3>
          <p className="username">{this.state.follower.userName}</p>
          <p>Location: {this.state.follower.location}</p>
          <p>
            Profile:{" "}
            <a href={this.state.follower.url}>{this.state.follower.url}</a>
          </p>
          <p>Followers: {this.state.follower.followers}</p>
          <p>Following: {this.state.follower.following}</p>
          <p>Bio: {this.state.follower.bio}</p>
        </div>
      </div>
    );
  }
}

export default Card;
