import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements';

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props)
    }

    checkBoxRender = (condition) => {
        if(condition)
            return <View><Icon name='check'/></View>
        return <View><Text>      </Text></View>
    }

    render() {
        return (
            <View>
                {this.checkBoxRender(this.props.condition)}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    // checkBoxContainer: {
    //     flex: 1,
    // }
})