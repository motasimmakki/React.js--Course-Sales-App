import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales'
import Footer from './Footer';

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
        <div id="body">
          <Coursesales items={courses}/>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
