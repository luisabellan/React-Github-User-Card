import React from "react";
import axios from "axios";
import "./Card.css";

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

  componentDidMount() {
    console.log("componentDidMount is getting called");

    axios
      .get(`https://api.github.com/users/${this.props.userName}`)
      .then(res => {
        // this probably returns a 200 status code
        console.log(res.data);

        this.setState({
         

          follower: {
            name: res.data.name,
            image: res.data.avatar_url,
            userName: res.data.userName,
            location: res.data.location,
            url: res.data.url,
            followers: res.data.followers,
            following: res.data.following,
            bio: res.data.bio
          }
        });
      })

      .catch(err => {
        // this probably returns either a 400 or 500 status code
        console.log("You hit an error: ", err);
      });
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
