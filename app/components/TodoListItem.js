import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import CheckBox from '../components/CheckBox';
// import console = require('console');

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <TouchableOpacity 
        style={{flex: 5,flexDirection: 'row', height: 50, alignItems: 'center', marginLeft: 15}}
        onPress={() => {
            this.props.checkerHandler(this.props.index)
        }}
        onLongPress={() => {
            this.props.editHandler(this.props, this.props.index)
        }}
        >
        <CheckBox condition={this.props.done}/>
        <View style={{flex: 4, marginLeft: 17}}><Text style={{fontSize: 15}}>{this.props.name}</Text></View>
    </TouchableOpacity>
    );
  }
}