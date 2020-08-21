import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales'

class App extends Component {
  render(){

    var courses = [
      {name:'C', price: 5000},
      {name:'C++', price: 3000},
      {name:'Java', price: 7000}
    ];

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React.js<br />
            | Course Sales App |
          </p>
        </header>

        <Coursesales items={courses}/>

      </div>
    );
  }
}

export default App;
