import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Fab } from 'native-base';
import TodoListItem from '../components/TodoListItem'
import AddTaskOverlay from '../components/AddTaskOverlay'
import EditTaskOverlay from '../components/EditTaskOverlay'

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

  backdropAdderOverlayHandler = () => {
    this.setState({ 
      isAdderVisible: false,
      adderInput: null
    })
  }

  adderInputHandler = (text) => {
    this.setState({ adderInput: text })
  }

  addTaskConfirmButtonHandler = () => {
    if(this.state.adderInput !== null) {
        tempObject = {name: this.state.adderInput, done: false}
        this.setState({
          task: [...this.state.task, tempObject],
          isAdderVisible: false,
          adderInput: null,
        })
    }
    this.setState({ isAdderVisible: false })
  }

  addTaskCancelButtonHandler = () => {
    this.setState({ 
      isAdderVisible: false, 
      adderInput: null, 
    })
  }

  backdropEditorOverlayHandler = () => {
    this.setState({ 
      isEditorVisible: false,
      editorInput: null,
    })
  }
  
  editorInputHandler = (text) => {
    this.setState({ 
      editorInput: text,
    })
  }

  editTaskConfirmButtonHandler = () => {
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
  }

  editTaskCancelButtonHandler = () => {
    this.setState({
      isEditorVisible: false,
      editorInput: null,
      editorTarget: null,
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
        <AddTaskOverlay
         isAdderVisible={this.state.isAdderVisible}
         backdropAdderOverlayHandler={this.backdropAdderOverlayHandler}
         adderInputHandler={this.adderInputHandler}
         addTaskConfirmButtonHandler={this.addTaskConfirmButtonHandler}
         addTaskCancelButtonHandler={this.addTaskCancelButtonHandler}
        />
        {/* Editor overlay */}
        <EditTaskOverlay
         isEditorVisible={this.state.isEditorVisible}
         backdropEditorOverlayHandler={this.backdropEditorOverlayHandler}
         editorInputHandler={this.editorInputHandler}
         editorInput={this.state.editorInput}
         editTaskConfirmButtonHandler={this.editTaskConfirmButtonHandler}
         editTaskCancelButtonHandler={this.editTaskCancelButtonHandler}
        />
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
  },
  addTaskInput: {
    
  }
});