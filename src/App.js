import React from "react";
import axios from 'axios';
import "./App.scss";
import Card from "./Card/Card.js";
import Cards from "./Cards/Cards.js";

class App extends React.Component {
  constructor(props) {
    console.log("constructor is getting called");
    super(props);
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
      },

      followersArray: []
    };
  }


  componentDidMount() {
    console.log("componentDidMount is getting called");

    axios
      .get(`https://api.github.com/users/luisabellan/followers`)
      .then((res) => {
        // console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {

          this.state.followersArray.push(res.data[i].login)

        }


      }).then((res) => {
        for (let i = 0; i < this.state.followersArray.length; i++) {


          axios
            .get(`https://api.github.com/users/${this.followersArray[i]}`)
            .then((res) => {
              // this probably returns a 200 status code
              console.log(res)

              const follower = {
                name: res.data.name,
                image: res.data.avatar_url,
                userName: res.data.login,
                location: res.data.location,
                url: res.data.html_url,
                followers: res.data.followers,
                following: res.data.following,
                bio: res.data.bio,
              }
              this.setState = {
                follower: follower,

              }

              console.log(res.data)

              //GitHubCard()



            })
            .catch((err) => {
              // this probably returns either a 400 or 500 status code
              console.log('You hit an error: ', err);
            });
        }


      })

      .catch((err) => {
        // this probably returns either a 400 or 500 status code
        console.log('You hit an error: ', err);
      });

    console.log(this.state.followersArray)



    axios
      .get(`https://api.github.com/users/${this.state.follower.userName}`)
      .then(res => {
        // this probably returns a 200 status code
        console.log(res.data);
        const follower = {
          name: res.data.name,
          image: res.data.avatar_url,
          userName: res.data.userName,
          location: res.data.location,
          url: res.data.url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio
        }

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
    //console.log(this.state.user)

    return (
      <div className="container">
        <div className="header">
          <div className="left-logo">
            <img className="lambda-logo" src="../assets/lambdalogo.png" alt="Lambda Logo" />
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
        <Card className="card" userName="luisabellan" />
        <Cards className="cards" followers={this.state.followersArray} />
      </div>
    );
  }
}

export default App;
