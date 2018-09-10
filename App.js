import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {
  state={
    counter: 0
  }
  increaseCounter=()=>{
    this.setState({counter:this.state.counter+1})

  }
  decreaseCounter=()=>{
    this.setState({counter:this.state.counter-1})
  }
  render() {
    return (
           <View style ={styles.container}>
      <Text style={{fontSize:50}}>My Counter</Text>
      <View style ={{padding:20}}>
        <Button title ='Increase' onPress={()=>this.increaseCounter()} />
        </View> 
        <Button title = 'Decrease' onPress ={()=>this.decreaseCounter()} />
        <Text style={{padding:10,fontSize:50}}>{this.state.counter}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

