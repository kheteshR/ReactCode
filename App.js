
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/component/header';
import Routes from './src/component/routes';




export default class App extends Component{
  state={
    loggedIn:false
  }
  renderContent(){

    switch(this.state.loggedIn){
      case true:
      return (
        <View>
        <Header headerText={'Adhaara Sign Out'}/>
  
        </View>
        );
      case false:
      return (
        <View style={styles.LoginContainer}>
        <Header headerText={'Adhaara Sign In'}/>
        <LoginPageComponent/>
        </View>
      );
      default:
      return <Spinner size="large"/>
    }
    
  }
  
  render() {
    return (
      <View style={styles.container}>
       <Routes/>
      </View>
    );
  }
}

//Apply CSS
const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    // backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)'


  },
  LoginContainer: {
    flexGrow: 1,
    backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)'
  }

});