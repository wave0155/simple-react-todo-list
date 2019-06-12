import React from 'react';
import { View, Text } from 'react-native';
import { Overlay } from 'react-native-elements';

export default class TaskAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isAdderVisible: props.isAdderVisible,
    }
  }

  render() {
    return (
      <Overlay 
       isVisible={this.state.isAdderVisible}
       onBackdropPress={() => {
        this.setState({ isAdderVisible: false });
        // this.props.parentStateHandler(false);
       }}
       >
         <Text>Overlay Test</Text>
      </Overlay>
    );
  }
}