import React,{ Component } from 'react';
import Course from './Course';

export default class Coursesales extends Component {

  sumPrice(price){
    this.setState({total: this.state.total+price});
  }

  constructor(props){
    super(props);

    this.state = {
      total: 0
    };
    this.sumPrice = this.sumPrice.bind(this);
  }

  render(){
    console.log(this.props.items);
    var courses = this.props.items.map((item, i)=>{
      return <Course name={item.name} price={item.price}
        key={i} sumPrice={this.sumPrice} active={item.active}
      />;
    });
    return(
      <div>
        <h2> You can Buy Courses :</h2><br />
        <div id="courses">
          {courses}
          <p><strong>Total :</strong> <b>{this.state.total}</b></p>
        </div>

        <Course />
      </div>
    );
  }
}
