import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ListItem, Overlay, Input, Icon, Button } from 'react-native-elements';
import { Fab } from 'native-base';

export default class CheckScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: [
        {name: 'Do Laundry'},
        {name: 'Walk the Dog'},
        {name: 'Meet the Boss'}
      ],
      isAdderVisible: false,
      adderInput: null,
    }
  }

  addTask = (taskName) => {
    this.state.task.push(taskName)
  }

  // renderTask = () => {
  //   this.state.task.map((item, index) => (
  //     <ListItem
  //      key={index}
  //      title={item.name}/>
  //   ))
  // }

  render() {
    return (
      <View style={styles.container}>
        <View>
        {
          this.state.task.map((item, index) => (
            <ListItem
             key={index}
             title={item.name}/>
          ))
        }
        </View>
        <Fab 
          position='bottomRight'
          active='true'
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => this.setState({ isAdderVisible: true })}
        >
          <Icon name='plus' type='font-awesome' color='white'/>
        </Fab>

        <Overlay
         height={400}
         isVisible={this.state.isAdderVisible}
         onBackdropPress={() => this.setState({ isAdderVisible: false })}
        >
          <View style={styles.overlayView}>
            <View>
              <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Add Task</Text>
            </View>
            <View style={styles.addTaskInput}>
              <Input
                placeholder='Task Name'
                leftIcon={{ type: 'font-awesome', name: 'tasks' }}
                onChangeText={(text) => this.setState({adderInput: text})}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Button
                title='Add Task'
                onPress={() => {
                  this.setState({ task: [...this.state.task, this.state.adderInput]} )
                  this.setState({ isAdderVisible: false })
                  this.setState({ adderInput: null })
                }}
              />
              <Button
                title='Cancel'
                onPress={() => this.setState({ isAdderVisible: false })}
              />
            </View>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayView: {
    flex: 1,
    justifyContent: 'space-evenly',
    // marginVertical: 50,
  },
  addTaskInput: {
    
  }
});