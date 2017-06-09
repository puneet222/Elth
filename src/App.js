import React, { Component } from 'react';
import Login from './Login' ;
import Otp from './Otp' ;
import Home from './Home' ;
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginState : true,
      otpState : false,
      homeState : false,
      otp : 9999
    };
    this.loginHandler = this.loginHandler.bind(this) ;
    this.otpHandler = this.otpHandler.bind(this) ;
  }

  loginHandler = () => {
    // alert("app function called") ;
    var otp = Math.floor(Math.random()*8999 + 1000) ;
    console.log(otp) ;
    alert("Your OPT is : " + otp) ;
    this.setState({
      loginState : false,
      otpState : true,
      homeState : false,
      otp : otp
    })
  }

  otpHandler = () => {
    this.setState({
      loginState : false,
      otpState : false,
      homeState : true
    })
  }

  render() {
    var items = [
    <SidebarItem>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ];
    return (
      <div className="App">
        <MuiThemeProvider>
        <Sidebar content={items} width={210} background={"#FAFAFA"} color={"#212121"} toggleIconSize={20} toggleIconColor={"#212121"}>
        {
          this.state.loginState
            ? <Login loginHandler = {this.loginHandler} />
            : null
        }
        {
          this.state.otpState
            ? <Otp otpHandler = {this.otpHandler} otp={this.state.otp}/>
            : null
        }
        {
          this.state.homeState
          ? <Home />
          : null
        }
        </Sidebar>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
