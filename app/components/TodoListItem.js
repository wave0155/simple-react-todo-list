import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import CheckBox from '../components/CheckBox';
// import console = require('console');

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity>
        <ListItem
        containerStyle={{flex: 5,}}
          title={this.props.name}
          onPress={() => {
            this.props.checkerHandler(this.props.index)
          }}
          onLongPress={() => {
            this.props.editHandler(this.props, this.props.index)
          }}
          leftElement={<CheckBox condition={this.props.done}/>}
      />
    </TouchableOpacity>
    );
  }
}