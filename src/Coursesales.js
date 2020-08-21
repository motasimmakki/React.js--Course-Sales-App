import React,{ Component } from 'react';

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
          <p><b>Total : </b>{this.state.total}</p>
        </div>
      </div>
    );
  }
}

class Course extends Component {

  clicker(){
    var active = !this.state.active;
    this.setState({active:active});
    this.props.sumPrice(active? this.props.price: -this.props.price);
  }

  constructor(props){
    super(props);

    this.state = {
      active:false
    };
    this.clicker = this.clicker.bind(this);
  }

  render(){
    return(
      <div>
        <p onClick={this.clicker}>{this.props.name} = <b>{this.props.price}</b></p>
      </div>
    );
  }
}
