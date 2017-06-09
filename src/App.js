import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './Login' ;
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import './App.css';

class App extends Component {
  render() {
    var items = [
    <SidebarItem>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ];
    return (
      <div className="App">
        <Sidebar content={items} width={250} background={"#ECEFF1"} color={"#212121"} toggleIconSize={20}>
          <Login />
        </Sidebar>
      </div>
    );
  }
}

export default App;
