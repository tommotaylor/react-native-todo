import Exponent from 'exponent';
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import TaskList from "./components/TaskList";

class Todo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos : [
        { task : "Learn React Native" },
        { task : "Learn Redux" }
      ]
    };
  }

  handlePress() {
    console.log("press handled");
  }

  render() {
    return (
      <TaskList todos={this.state.todos} handlePress={this.handlePress}/>
    );
  }
}

AppRegistry.registerComponent('main', () => Todo);
