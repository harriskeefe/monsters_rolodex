import { Component } from 'react';
//1. Importing Component class enables us to use Component class react provides us with.


import './App.css';

//2. The class is created named App that extends functionality of the Component class from react.
class App extends Component {
  //5. When App runs, constructor method is the first thing to run.
  constructor() {
    //6. Super calls the constructor method on the component.
    super();

    //7. 'this' points to the constructor() on the component.
    //7b. .state is the state we want for this class.
    //7c. This object (can be other data types) is the state we want the application in.
    //7d. This state is set to the initial state.
    this.state = {
      monsters: []
    };
  }

  // 10. We want the data from the API as soon as the component is rendered.
  // 10a. This lifecycle method is called as soon as the component mounts.
  // 10b. When a component 'mounts', that the first time it's placed on the DOM, which is the best time to get the API.
  // 11. fetch() will get the data from URL.
  // 11a. If fetch() succeeds, we can call .then() sense we have a response.
  // 11b. This response is used in .then() and turns the response into a .json object.
  // 11c. The .json object used in the next .then() in the users parameter b/c we want the users from the API.
  // 11d. We use the setState() to make the users from the API the updated state.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
          return {monsters: users}
        },
        () => {
          console.log(this.state);
        }
      ));
  }

  //3. The render method comes from the Component class which allows rendering of the HTML code.
  //4. The return statement is put into the render method to return HTML code.
  render() {
    // 8. We iterate the state array with the map method making application dynamic.
    // 9a. key attribute distinguishes one mapped element from another.
    return (
      <div className="App">
        { 
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
