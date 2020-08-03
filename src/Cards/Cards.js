import React from 'react'
import axios from 'axios';
import './Cards.scss';

class Card extends React.Component {
  constructor(props) {
    console.log("constructor is getting called");
    super(props);
    console.log(props);

    this.state = {
     
      followers: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount is getting called");

   
    axios
      .get(
        `https://api.github.com/users/luisabellan/followers`
      )
      .then(res => {
        // this probably returns a 200 status code
        console.log(res.data);
        this.setState({
            followers : [...res.data]
        })
      })

     
            
       

      .catch(err => {
        // this probably returns either a 400 or 500 status code
        console.log("You hit an error: ", err);
      });
  
    }
  render() {
    //console.log()

    return this.state.followers.map(follower => <Card userName={follower.userName} />);
  }
}




export default Card;