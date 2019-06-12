import  React  from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackActions } from 'react-navigation';

const replaceAction = StackActions.replace({
    routeName: 'CheckScreen',
  });


export default class SplashScreen extends React.Component {
  constructor(props) {
      super(props);
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
        this.props.navigation.dispatch(replaceAction)
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <Icon name='check' type='font-awesome' size={200}/>
            <Text style={{fontSize: 40, textAlign: 'center'}}>Cheque</Text>
        </View>
    );
  }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});