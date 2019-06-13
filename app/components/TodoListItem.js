import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
// import console = require('console');

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity>
        <ListItem
          title={this.props.name}
          checkmark={this.props.done}
          onPress={() => {
            this.props.checkerHandler(this.props.index)
          }}
          onLongPress={() => {
            this.props.editHandler(this.props, this.props.index)
          }}
      />
    </TouchableOpacity>
    );
  }
}