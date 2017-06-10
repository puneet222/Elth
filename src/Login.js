import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import elthLogo from './images/avatar.gif' ;
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorText : ''
    };
    this.handleClick = this.handleClick.bind(this) ;
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
    var mobile = this.refs.mobile.input.value ;
    if(mobile.toString().length === 10){
      this.props.loginHandler() ;
    }
    else{
      console.log("error") ;
      this.setState({
        errorText : "Mobile Number must be 10 digits"
      })
    }
  }

  handlePushClick = () => {
    var endpoint = 'https://fcm.googleapis.com/fcm/send/cLY8FFGalGQ:APA91bHpFySn0tCRTsdkbOY25sT9S0IKNZ4tYH3hCN39JpKDIR5TKRFf3RmfXyxchRs2ep0C20wwyDdJlI9W8w7Bd0JB8O_qUSy6sbXY1K_xdy1hmFYa0ZFvGCvKrC7O7Cz5J1ezKueN' ;
    var key = "BCUsKB45d8rLANDcbT1AqgKqoQDohERE61hktoQpi-WlH96M2Vtln-uAXhdtXQOrT2PAx0lbuNZXah3q41N8b14=";
    var authSecret = "qK2JtrGJNJdHlF2VW-8DiQ==" ;

    fetch('http://localhost:5000/sendNotification', {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: endpoint,
      key: key,
      authSecret: authSecret,
      title: "This is the titile",
      body: "This is Body",
      icon: "this is icon",
      link: "This is link"
    }),
  });
  }


  render() {

    return (
      <div className="login" style={this.styles.login}>
      <img src={elthLogo} style={this.styles.image} alt={"logo"} />
      <h2 style={this.styles.text}>elth.ai</h2>
      <TextField ref="mobile"  hintText="Mobile Number" type={"number"} errorText={this.state.errorText}/>
      <RaisedButton label="Get OTP" secondary={true} style={this.styles.button} buttonStyle={{"backgroundColor" : "#0096ff"}} onClick={this.handleClick}/>
      {/*<RaisedButton label="Get Message" secondary={true} style={this.styles.button} buttonStyle={{"backgroundColor" : "#0096ff"}} onClick={this.handlePushClick}/>*/}
      </div>
    );
  }
}

export default Login;
