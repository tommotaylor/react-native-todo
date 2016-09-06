import React, { Component } from 'react';
import {
  Text,
  ListView,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

class TaskList extends Component {
  constructor(props, context) {
    super(props, context);
    const ds = new ListView.DataSource({
      rowHasChanged : (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }
  }

  renderRow(todo) {
    return (
      <Text>{todo.task}</Text>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }
}

export default TaskList;
