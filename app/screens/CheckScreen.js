import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem, Overlay, Input, Icon, Button } from 'react-native-elements';
import { Fab } from 'native-base';
// import console = require('console');

export default class CheckScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: [
        {name: 'Do Laundry', done: false},
        {name: 'Walk the Dog', done: false},
        {name: 'Meet the Boss', done: true}
      ],
      isAdderVisible: false,
      adderInput: null,
    }
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      checkmark={item.done}
    />
  )

  addTask = (taskName) => {
    this.state.task.push(taskName)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.task}
            renderItem={this.renderItem}
            extraData={this.state.refreshList}
          />
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
                  if(this.state.adderInput !== null) {
                    tempObject = {name: this.state.adderInput, done: false}
                    this.setState({
                      task: [...this.state.task, tempObject],
                      isAdderVisible: false,
                      adderInput: null,
                    })
                  }
                  this.setState({ isAdderVisible: false })
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