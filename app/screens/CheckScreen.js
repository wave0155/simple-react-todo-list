import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Overlay, Input, Icon, Button } from 'react-native-elements';
import { Fab } from 'native-base';
import TodoListItem from '../components/TodoListItem'

export default class CheckScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      task: [
        {name: 'Do Laundry', done: false},
        {name: 'Walk the Dog', done: false},
        {name: 'Kill Diavolo', done: false}
      ],
      isAdderVisible: false,
      isEditorVisible: false,
      editorTarget: null,
      adderInput: null,
      editorInput: null,
    }
  }

  keyExtractor = (item, index) => index.toString()

  checkerHandler = (index) => {
    this.setState(() => {
      const task = this.state.task
      task[index].done = !task[index].done
      return {
        task,
      }
    })
  }

  editHandler = (item, index) => {
    this.setState({
      isEditorVisible: true,
      editorInput: item.name,
      editorTarget: index,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Fab
          position='bottomRight'
          active='true'
          style={{ backgroundColor: '#5067FF' }}
          onPress={() => this.setState({ isAdderVisible: true })}
        >
          <Icon name='plus' type='font-awesome' color='white'/>
        </Fab>
        <View>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.task}
            renderItem={({ item, index }) => {
              return(
                <TodoListItem 
                  name={item.name}
                  done={item.done}
                  index={index}
                  checkerHandler={this.checkerHandler}
                  editHandler={this.editHandler}
                />
              )
            }}
            extraData={this.state}
          />
        </View>
        {/* Adder Overlay */}
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
                onPress={() => this.setState({ 
                  isAdderVisible: false, 
                  adderInput: null, 
                })}
              />
            </View>
          </View>
        </Overlay>
        {/* Editor overlay */}
        <Overlay
         height={400}
         isVisible={this.state.isEditorVisible}
         onBackdropPress={() => this.setState({ isEditorVisible: false })}
        >
          <View style={styles.overlayView}>
            <View>
              <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Edit Task</Text>
            </View>
            <View style={styles.addTaskInput}>
              <Input
                placeholder='Task Name'
                leftIcon={{ type: 'font-awesome', name: 'tasks' }}
                onChangeText={(text) => this.setState({editorInput: text})}
                value={this.state.editorInput}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Button
                title='Change task name'
                onPress={() => {
                  if(this.state.editorInput !== '') {
                    this.setState(() => {
                      task = this.state.task
                      task[this.state.editorTarget].name = this.state.editorInput
                      return {
                        task,
                      }
                    })
                    this.setState({
                      isEditorVisible: false,
                      editorInput: null,
                      editorTarget: null,
                    })
                  }
                  this.setState({ 
                    isEditorVisible: false,
                    editorInput: null,
                    editorTarget: null,
                  })
                }}
              />
              <Button
                title='Cancel'
                onPress={() => this.setState({
                  isEditorVisible: false,
                  editorInput: null,
                  editorTarget: null,
                })}
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