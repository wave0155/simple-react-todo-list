import { React } from 'react';
import { View, Text } from 'react-native';

export default class TaskAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isVisible: props.isVisible,
    }
  }
  render() {
    return (
      <Overlay isVisible={this.state.isVisible}>
        
      </Overlay>
    );
  }
}