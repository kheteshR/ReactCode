import React, { Component } from 'react';
import {View,TextInput,Text,Button} from 'react-native'

class ForgotPassword extends Component {
    state = {
        "email_of_salon":'',
        "message":'',
        "ButtonDisable":false
      }
    
    //Integration with forgot password web service
    forgotPassword=()=>{
          
        console.log("check",this.state.email_of_salon);
        fetch('http://192.168.1.22:4003/forgotPassword',{
            method: 'POST',
            headers: {
               Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
             "email_of_salon":this.state.email_of_salon,
            })
      })
          .then((response) => {
            if(JSON.parse(response._bodyInit).message == "we have sent reset link on your registered email id"){
             this.setState({"message":JSON.parse(response._bodyInit).message,"ButtonDisable":true})
           }else{
        this.setState({"message":JSON.parse(response._bodyInit).message,"ButtonDisable":false})
      }
             
    }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
           
           
      }

      DisplayText(){
        if(this.state.ButtonDisable && this.state.message == "we have sent reset link on your registered email id"){
            return <Text style={styles.TextCss}>{this.state.message}</Text>;
        }else{
            return <Text style={styles.TextCss1}>{this.state.message}</Text>;
        }
      }



    render() { 
        return ( 
            <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:25,paddingBottom:15}}>First, let's find your account</Text>
            <Text style={{fontWeight:'bold'}}>Registered Email Address:</Text>
            <TextInput style={styles.input}  onChangeText={(email_of_salon) => {
                    this.setState({"email_of_salon":email_of_salon})
            }} placeholder="Enter your registered email address"/>
            <Button style={styles.buttonContainer}
            title="submit"
            color="#841584"
            disabled={this.state.ButtonDisable}
            onPress={this.forgotPassword}
          />
          {this.DisplayText()}
            </View>
         );
    }
}
 const styles={
     container:{
         flexGrow:1,
         justifyContent:'center',
         alignItems:'center'
     },
     TextCss:{
     margin:10,
     color:'blue',
     fontWeight:'bold'
     },
     TextCss1:{
        margin:10,
        color:'green',
        fontWeight:'bold'
        },
     input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        margin:15,
        borderRadius:5,
        color:'black',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#e81d62',
        borderRadius:5,
        paddingVertical:15,
        marginBottom:20

    }
 }
export default ForgotPassword;