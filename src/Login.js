import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import elthLogo from './images/logo.png' ;
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  styles = {
    login : {
      position: "relative",
	    top: "50%",
	    transform: 	"translateY(-50%)"
    },
    button : {
      margin : 12
    },
    image : {
      height : "30%",
      width : "27%"
    },
    text : {
      color : "#0096ff" ,
      fontSize : "0.9em" ,
      textAlign : "center"
    }
  }

  handleClick = () => {
    this.props.loginHandler() ;
  }

  render() {

    return (
      <div className="login" style={this.styles.login}>
      <img src={elthLogo} style={this.styles.image} />
      <h2 style={this.styles.text}>elth.ai</h2>
      <TextField  hintText="Mobile Number" />
      <RaisedButton label="Get OTP" secondary={true} style={this.styles.button} buttonStyle={{"backgroundColor" : "#0096ff"}} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Login;
