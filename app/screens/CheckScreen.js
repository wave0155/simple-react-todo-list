import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class CheckScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: [
        {name: 'Do Laundry'},
        {name: 'Walk the Dog'},
        {name: 'Meet the Boss'}
      ],
    }
  }

  addTask = (taskName) => {
    this.state.task.push(taskName)
  }

  render() {
    return (
      <View>
        {
          this.state.task.map((item, index) => (
            <ListItem
             key={index}
             title={item.name}/>
          ))
        }
      </View>
    );
  }
}