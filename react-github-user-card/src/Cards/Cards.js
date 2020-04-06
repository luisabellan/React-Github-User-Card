import React from 'react'
import axios from 'axios'
import './Cards.css';

class Card extends React.Component {
    
    
    constructor(props) {
        console.log('constructor is getting called')
        super(props);
        console.log(props);
        
        

        this.state = {
            ...props.followersArray,
            
            followersArray: []
        }
       

    }
        

    componentDidMount() {
        console.log('componentDidMount is getting called')

        axios
            .get("https://api.github.com/users/luisabellan/followers")
            .then(res => {
                // this probably returns a 200 status code
                console.log(res.data)
                
                res.data.map(follower => this.setState(
                    

                    <Card username={this.state.followersArray.userName}/>

                    
                    
                    
                ))
                

                
            })




            .catch((err) => {
                // this probably returns either a 400 or 500 status code
                console.log('You hit an error: ', err);
            });




    }

    render() {
        //console.log()

      return this.state.followersArray.map(follower => <Card />)
      
        
        
        
    }
}




export default Card;