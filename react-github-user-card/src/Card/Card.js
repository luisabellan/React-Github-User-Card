import React from 'react'
import axios from 'axios'
import './Card.css';

class Card extends React.Component {
  constructor() {
    super()
    console.log('constructor is getting called')
   // console.log(this.props)
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

  componentDidMount() {
    console.log('componentDidMount is getting called')

    axios
      .get(`https://api.github.com/users/squarerobin`)
      .then(res => {
        // this probably returns a 200 status code
       console.log(res.data)

        this.setState({



          name: res.data.name,
          image: res.data.avatar_url,
          userName: res.data.userName,
          location: res.data.location,
          url: res.data.url,
          followers: res.data.followers,
          following: res.data.following,
          bio: res.data.bio


        })
      })




      .catch((err) => {
        // this probably returns either a 400 or 500 status code
        console.log('You hit an error: ', err);
      });




  }

  render() {
    //console.log()

    return (


     
        <div className="card" >


          <img src={this.state.image} alt="me" />
          <div className="card-info">
            <h3 className="name">{this.state.name}</h3>
            <p className="username">{this.state.userName}</p>
            <p>Location: {this.state.location}</p>
            <p>Profile: <a href={this.state.url}>{this.state.url}</a>
            </p>
            <p>Followers: {this.state.followers}</p>
            <p>Following: {this.state.following}</p>
            <p>Bio: {this.state.bio}</p>
          </div>
        </div>

    )




  }
}

export default Card;