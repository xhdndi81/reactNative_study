/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class IU extends Component {

  render() {

    let iuimg = '';

    if(this.props.type === 'one') {
      iuimg = require('./assets/iu1.jpg');
    } else if(this.props.type === 'two') {
      iuimg = require('./assets/iu2.jpg');
    }

    return (
      <View>
        <Image source={iuimg} style={{width: 200, height: 200}}></Image>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'red',
  }
});

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }
  }

  writeAddress = () => {
    this.setState({
      address: '경기도 안양시'
    }, function() {
      alert('이거 되나?');
    });
  }

  resetAddress = () => {
    this.setState({
      address: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>hello world !!! 123</Text>
  
        <IU type="two"></IU>

        <Text>{this.state.address}</Text>
        <Button title={'나의 주소출력'} onPress={this.writeAddress}></Button>
        <Button title={'리셋'} onPress={this.resetAddress}></Button>
      </View>
    );
  }  

}

export default App;
