import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import elthLogo from './images/logo.png' ;
import RaisedButton from 'material-ui/RaisedButton';

class Otp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText : ''
    };
  }

  styles = {
    otp : {
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
    var otp = this.refs.otp.input.value ;
    console.log(otp) ;
    if(this.props.otp == otp){
      this.props.otpHandler() ;
    }
    else{
      console.log("wrong") ;
      this.setState({
        errorText : "OTP does not match"
      })
    }
  }

  render() {

    return (
      <div className="otp" style={this.styles.otp}>
      <img src={elthLogo} style={this.styles.image} alt={"logo image"} />
      <h2 style={this.styles.text}>elth.ai</h2>
      <TextField ref="otp"  hintText="Enter OTP" type={"number"} errorText={this.state.errorText} />
      <RaisedButton label="Login" secondary={true} style={this.styles.button} buttonStyle={{"backgroundColor" : "#0096ff"}} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Otp;
