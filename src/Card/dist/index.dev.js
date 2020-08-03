"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/
var getUsers = function getUsers() {};

_axios["default"].get('https://api.github.com/users/luisabellan').then(function (res) {
  // this probably returns a 200 status code
  console.log(res);
  var name = res.data.name;
  var image = res.data.avatar_url;
  var userName = res.data.login;
  var location = res.data.location;
  var url = res.data.html_url;
  var followers = res.data.followers;
  var following = res.data.following;
  var bio = res.data.bio;
  console.log(res.data); //GitHubCard()

  var info = {
    image: image,
    name: name,
    userName: userName,
    location: location,
    url: url,
    followers: followers,
    following: following,
    bio: bio
  };
  var newGitHubCard = GitHubCard(info);
  cards.appendChild(newGitHubCard);
})["catch"](function (err) {
  // this probably returns either a 400 or 500 status code
  console.log('You hit an error: ', err);
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the followersArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


var followersArray = []; // STRETCH: get followers programmatically

_axios["default"].get("https://api.github.com/users/luisabellan/followers").then(function (res) {
  // console.log(res.data)
  for (var i = 0; i < res.data.length; i++) {
    followersArray.push(res.data[i].login);
  }
}).then(function (res) {
  for (var i = 0; i < followersArray.length; i++) {
    _axios["default"].get("https://api.github.com/users/".concat(followersArray[i])).then(function (res) {
      // this probably returns a 200 status code
      console.log(res);
      var name = res.data.name;
      var image = res.data.avatar_url;
      var userName = res.data.login;
      var location = res.data.location;
      var url = res.data.html_url;
      var followers = res.data.followers;
      var following = res.data.following;
      var bio = res.data.bio;
      console.log(res.data); //GitHubCard()

      var info = {
        image: image,
        name: name,
        userName: userName,
        location: location,
        url: url,
        followers: followers,
        following: following,
        bio: bio
      };
      var newGitHubCard = GitHubCard(info);
      cards.appendChild(newGitHubCard);
    })["catch"](function (err) {
      // this probably returns either a 400 or 500 status code
      console.log('You hit an error: ', err);
    });
  }
})["catch"](function (err) {
  // this probably returns either a 400 or 500 status code
  console.log('You hit an error: ', err);
});

console.log(followersArray);
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

var cards = document.querySelector('.cards');

function GitHubCard(obj) {
  // create elements
  var newGitHubCard = document.createElement('div');
  var imageImg = document.createElement('img');
  var cardInfoDiv = document.createElement('div');
  var nameH3 = document.createElement('h3');
  var userNameP = document.createElement('p');
  var locationP = document.createElement('p');
  var profileP = document.createElement('p');
  var addressA = document.createElement('a');
  var followersP = document.createElement('p');
  var followingP = document.createElement('p');
  var bioP = document.createElement('p'); // style elements

  newGitHubCard.classList.add('card');
  imageImg.src = obj.image;
  cardInfoDiv.classList.add('card-info');
  nameH3.classList.add('name');
  nameH3.textContent = obj.name;
  userNameP.classList.add('username');
  userNameP.textContent = obj.userName;
  locationP.textContent = "Location: ".concat(obj.location);
  profileP.textContent = 'Profile:';
  addressA.href = obj.url;
  addressA.textContent = obj.url;
  followersP.textContent = "Followers: ".concat(obj.followers);
  followingP.textContent = "Following: ".concat(obj.following);
  bioP.textContent = "Bio: ".concat(obj.bio); // structure component

  newGitHubCard.appendChild(imageImg);
  newGitHubCard.appendChild(cardInfoDiv);
  cardInfoDiv.appendChild(nameH3);
  cardInfoDiv.appendChild(userNameP);
  cardInfoDiv.appendChild(locationP);
  cardInfoDiv.appendChild(profileP);
  cardInfoDiv.appendChild(followersP);
  cardInfoDiv.appendChild(followingP);
  cardInfoDiv.appendChild(bioP);
  profileP.appendChild(addressA);
  return newGitHubCard;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/