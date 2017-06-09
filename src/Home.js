import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import elthLogo from './images/logo.png' ;
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  styles = {
    homePage : {
      position: "relative",
	    top: "50%",
	    transform: 	"translateY(-50%)"
    },
    image : {
      height : "30%",
      width : "27%"
    },
    text : {
      color : "#0096ff" ,
      fontSize : "0.9em" ,
      textAlign : "center"
    },
    home : {
      color : "black" ,
      fontSize : "1.9em" ,
      textAlign : "center"
    }
  }

  render() {

    return (
      <div className="home" style={this.styles.homePage}>
      <img src={elthLogo} style={this.styles.image} />
      <h2 style={this.styles.text}>elth.ai</h2>
      <h2 style={this.styles.home}>This is the Home Page</h2>
      </div>
    );
  }
}

export default Home;
