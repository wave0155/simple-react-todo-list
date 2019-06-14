import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay, Button, Input } from 'react-native-elements'

export default class EditTaskOverlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Overlay
            height={400}
            isVisible={this.props.isEditorVisible}
            onBackdropPress={this.props.backdropEditorOverlayHandler}
            >
                <View style={styles.overlayView}>
                    <View>
                        <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Edit Task</Text>
                    </View>
                    <View>
                        <Input
                            placeholder='Task Name'
                            leftIcon={{ type: 'font-awesome', name: 'tasks' }}
                            onChangeText={(text) => this.props.editorInputHandler(text)}
                            value={this.props.editorInput}
                            autoFocus={true}
                            leftIconContainerStyle={{marginRight: 5, marginLeft: 0}}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Button
                            title='Edit'
                            onPress={this.props.editTaskConfirmButtonHandler}
                        />
                        <Button
                            title='Cancel'
                            onPress={this.props.editTaskCancelButtonHandler}
                        />
                        <Button
                            title='Delete'
                            buttonStyle={{backgroundColor: 'red'}}
                            onPress={this.props.deleteHandler}
                        />
                    </View>
                </View>
            </Overlay>
        );
    }
}

const styles=StyleSheet.create({
    overlayView: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    addTaskInput: {
    }
  });