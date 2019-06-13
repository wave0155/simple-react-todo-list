import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Overlay, Button, Input } from 'react-native-elements'

export default class AddTaskOverlay extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Overlay
            height={400}
            isVisible={this.props.isAdderVisible}
            onBackdropPress={this.props.closeAdderOverlayHandler}
            >
                <View style={styles.overlayView}>
                    <View>
                    <Text style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>Add Task</Text>
                    </View>
                    <View style={styles.addTaskInput}>
                    <Input
                        placeholder='Task Name'
                        leftIcon={{ type: 'font-awesome', name: 'tasks' }}
                        onChangeText={(text) => this.props.adderInputHandler(text)}
                    />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Button
                        title='Add Task'
                        onPress={() => this.props.addTaskConfirmButtonHandler()}
                    />
                    <Button
                        title='Cancel'
                        onPress={() => this.props.addTaskCancelButtonHandler()}
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