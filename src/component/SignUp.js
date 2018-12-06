
import React, { Component } from 'react';
import { StyleSheet,
Text,
View,
TouchableOpacity,
TextInput
} from 'react-native';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




class RegistrationPage extends Component {
 state={
   name_of_salon : '',
   type_of_salon : '',
   first_name_salon_owner : '',
   last_name_salon_owner : '',
   salon_owner_phone : '',
   address_of_owner : '',
   address_of_salon : '',
   city_of_owner : '',
   city_of_salon : '',
   country_of_salon : '',
   emirates_id_of_owner : '',
   email_of_owner : '',
   email_of_salon : '',
   pin_of_owner : '',
   pin_of_salon : '',
   gender_of_owner : '',
   image_of_salon : '',
   salon_open_time : '',
   salon_close_time : '',
   bank_name : '',
   branch_of_bank : '',
   bank_account_number : '',
   account_holder_name : '',
   iban_number : '',
   user_name : '',
   password : '',
   status_of_registration:'',
   phoneError:'',
   first_name_salon_owner_Error:'',
   last_name_salon_owner_Error:'',
   email_of_salon_Error:''
     }

    signupButton(){
       Actions.pop();
    }
    goBack=()=>{
        Actions.login();
    }
    
    SignupApi_Integartion=async ()=>{
        console.log("inside api function",this.state.name_of_salon,this.state.first_name_salon_owner,this.state.salon_owner_phone);
         fetch('http://localhost:4003/request', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           "name_of_salon":this.state.name_of_salon,
           "first_name_salon_owner":this.state.first_name_salon_owner,
           "last_name_salon_owner":this.state.last_name_salon_owner,
           "salon_owner_phone":this.state.salon_owner_phone,
           "address_of_salon":this.state.address_of_salon,
           "emirates_id_of_owner":this.state.emirates_id_of_owner,
           "email_of_salon":this.state.email_of_salon
            })
      })
          .then((response) => {
         
            return response.json();
       
          }).then((data)=>{
          console.log("response object returned by response.json(), here response.json returns promise so resolve it",data);
          this.setState({
              "status_of_registration":false
          })
    })
          
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error);
             // ADD THIS THROW error
              throw error;
            });
       }
       phoneNumber=()=>{
           if(this.state.phoneError==="Please enter valid phone number"){
            return <Text style={{color:'red'}}>{this.state.phoneError}</Text>;
           }else {
            return <Text style={{color:'green'}}>{this.state.phoneError}</Text>;
           }
          }
          first_name=()=>{
            if(this.state.first_name_salon_owner_Error==="first name should not be empty"){
             return <Text style={{color:'red'}}>{this.state.first_name_salon_owner_Error}</Text>;
            }else {
             return <Text style={{color:'green'}}>{this.state.first_name_salon_owner_Error}</Text>;
            }
           }
           last_name=()=>{
            if(this.state.last_name_salon_owner_Error==="last name should not be empty"){
             return <Text style={{color:'red'}}>{this.state.last_name_salon_owner_Error}</Text>;
            }else {
             return <Text style={{color:'green'}}>{this.state.last_name_salon_owner_Error}</Text>;
            }
           }
           email=()=>{
            if(this.state.email_of_salon_Error==="Please enter valid email address"){
             return <Text style={{color:'red'}}>{this.state.email_of_salon_Error}</Text>;
            }else {
             return <Text style={{color:'green'}}>{this.state.email_of_salon_Error}</Text>;
            }
           }
       renderButton(){
        switch(this.state.status_of_registration){
            case true:
             return <Text style={styles.TextCss1}>Successfully Register</Text>;
            case false:
            return (
                <View  style={styles.TextContainer}>
                <Text  style={styles.TextCss1}>Thanks for registration ,</Text>
                <Text  style={styles.TextCss1}>will update you soon by Email</Text>
                </View>  
            );
            default:
           
            return(
                
                <View style={styles.container}>
                <TextInput  style={styles.textInput} placeholder="salon name" underlineColorAndroid={'transparent'}
                onChangeText={(name_of_salon) => this.setState({"name_of_salon":name_of_salon})}
                ></TextInput>
                <Text></Text>
                <TextInput  style={styles.textInput} placeholder="first name of salon owner" underlineColorAndroid={'transparent'}
                onChangeText={(first_name_salon_owner) =>{
                
                    if(first_name_salon_owner===""){
                        console.log("test")
                        this.setState({'first_name_salon_owner_Error': "first name should not be empty"})
                        
                      }else{
                   
                            this.setState({'first_name_salon_owner': first_name_salon_owner,'first_name_salon_owner_Error': "valid first name"})}  
                        
                      }
                    }
                ></TextInput>
                <Text>{this.first_name()}</Text>
                <TextInput placeholder="last name of salon owner" style={styles.textInput} underlineColorAndroid={'transparent'}
                onChangeText={(last_name_salon_owner) => {
                    if(last_name_salon_owner===""){
               
                    this.setState({'last_name_salon_owner_Error': "last name should not be empty"})
                    
                  }else{
               
                        this.setState({'last_name_salon_owner': last_name_salon_owner,'last_name_salon_owner_Error': "valid last name"})}  
                  }
                }
            ></TextInput>
            <Text>{this.last_name()}</Text>
            <TextInput placeholder="contact number" style={styles.textInput} underlineColorAndroid={'transparent'}
                onChangeText={(salon_owner_phone) => {

                      if(isNaN(salon_owner_phone) || salon_owner_phone.length > 1 || salon_owner_phone.length <= 10){
                        this.setState({'phoneError': "Please enter valid phone number"})
                          if(salon_owner_phone.length == 10){
                            this.setState({'salon_owner_phone': salon_owner_phone,'phoneError': "phone number is valid"})}  
                        }
                      }}
                ></TextInput>
                 {this.phoneNumber()}
                <TextInput placeholder="address" style={styles.textInput} underlineColorAndroid={'transparent'}
                onChangeText={(address_of_salon) => this.setState({"address_of_salon":address_of_salon})}
                ></TextInput>
                <Text></Text>
                <TextInput placeholder="emirated id" style={styles.textInput} underlineColorAndroid={'transparent'}
                onChangeText={(emirates_id_of_owner) => this.setState({"emirates_id_of_owner":emirates_id_of_owner})}
                ></TextInput>
                <Text></Text>
                <TextInput placeholder="email id" style={styles.textInput} underlineColorAndroid={'transparent'}
                onChangeText={(email_of_salon) =>{
                    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                    if(reg.test(email_of_salon)== true){
                        console.log("please check",email_of_salon)
                        this.setState({'email_of_salon': email_of_salon,'email_of_salon_Error': "valid email address"})
                         }else{
                            this.setState({'email_of_salon_Error': "Please enter valid email address"})
                         }  
                      
                    }}
              ></TextInput>
                <Text>{this.email()}</Text>
            <TouchableOpacity  style={styles.buttonContainer} onPress={this.SignupApi_Integartion}>
            <Text style={styles.button}>Sign up</Text>
            </TouchableOpacity>

            <View style={styles.SignUpContainer} >
            <Text style={styles.Signuptext}>Already have an account?</Text>
            <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Sign in</Text>
            </TouchableOpacity>
            </View>
            </View>
            );
         }
        }

    render() { 
        return (  
           
          <KeyboardAwareScrollView style={{flex:1,alignSelf:'stretch',backgroundColor: 'white'}}>
            {this.renderButton()}
            </KeyboardAwareScrollView>
           
        );
    }
}
 const styles=StyleSheet.create({
     container:{
         alignItems:'center',
         flexGrow:1,
         

     },
     TextContainer:{
        flexDirection:'row',   
        justifyContent: 'center',
        alignItems: 'center'
     },
     TextCss1:{
        
        color:'green',
        fontFamily: 'Cochin',
        fontWeight:'bold',
        fontSize:18,
        fontStyle: 'italic'
     },
    
     button:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },
     buttonContainer:{
        backgroundColor:'#e81d62',
        borderRadius:5,
        paddingVertical:15,
        alignSelf:'stretch',
        margin:10

    },
    SignUpContainer:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:10,
        flexDirection:'row',
        // backgroundColor:"grey"
     },
     signupButton:{
        color:'#5333ed',
        fontWeight:'500',
        fontSize:16

    },
    textInput:{
        alignSelf:'stretch',
        height:40,
        margin:2,
        color:'black',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:2

    },
         Signuptext:{
             color:'black',
             fontSize:16
         }
 })
export default RegistrationPage;