import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements';

export default class CheckBox extends React.Component {
    constructor(props) {
        super(props)
    }

    checkBoxRender = (condition) => {
        if(condition)
            return <Icon name='check'/>
        return <View></View>
    }

    render() {
        return (
            <View>
                {this.checkBoxRender(this.props.condition)}
            </View>
        )
    }
}