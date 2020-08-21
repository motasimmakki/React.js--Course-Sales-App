import React,{ Component } from 'react';

export default class Coursesales extends Component {
  render(){
    console.log(this.props.items);
    return(
      <div>
        I am from Course Sales Page. <br />
      </div>
    );
  }
}
