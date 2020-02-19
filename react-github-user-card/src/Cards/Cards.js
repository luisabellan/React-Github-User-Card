import React from 'react'
import axios from 'axios'
import './Cards.css';

class Card extends React.Component {
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
      
            followersArray: []
            /*     name: "",
                image: "",
                userName: "",
                location: "",
                url: "",
                followers: "",
                following: "",
                bio: "", */


        }





        
    }

    componentDidMount() {
        console.log('componentDidMount is getting called')

        axios
            .get("https://api.github.com/users/squarerobin/followers")
            .then(res => {
                // this probably returns a 200 status code
                //console.log(res.data)
                res.data.map(follower => this.setState( ...this.state.followersArray, follower))


                
            })




            .catch((err) => {
                // this probably returns either a 400 or 500 status code
                console.log('You hit an error: ', err);
            });




    }

    render() {
        //console.log()

        return (


            this.state.followersArray.map(follower => {

                return (

                    <div className="card" >


                        <img src={follower.avatar_url} alt="me" />
                        <div className="card-info">
                            <h3 className="name">{follower.name}</h3>
                            <p className="username">{follower.login}</p>
                            <p>Location: {follower.location}</p>
                            <p>Profile: <a href={follower.url}>{follower.url}</a>
                            </p>
                            <p>Followers: {this.state.followers}</p>
                            <p>Following: {follower.following}</p>
                            <p>Bio: {follower.bio}</p>
                        </div>
                    </div>

                )


            })



        )




    }
}

export default Card;