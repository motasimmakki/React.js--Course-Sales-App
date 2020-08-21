import React, { Component } from 'react';

export default class Footer extends Component {
  render(){
    var myStr = "</> with 🧡 By Motasim ";
    return(
      <div>
        <p><b>{myStr}</b></p>
      </div>
    );
  }
}
