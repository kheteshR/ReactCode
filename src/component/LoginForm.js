import React ,{Component} from 'react';
import {View,TextInput,TouchableOpacity,Text,StatusBar} from 'react-native';
import Spinner from './Spinner';


class LoginForm extends Component {
    constructor() {
      super();
      this.state = { 
        username:'',
        password:'',
        error:'',
        loading:false
     }
     this.LoginApi_Integartion=this.LoginApi_Integartion.bind(this);
    }
  
    
    getValueUsername=(text)=>{
        console.log("get username----->",text);
        this.setState({username:text});
        console.log("get username----->",this.state.username);
    }
    getValuePassword=(text)=>{
        this.setState({password:text});
        console.log("get password----->",this.state.password);
    }
   

   

    
    renderButton(){
        if(this.state.loading){
            console.log("loading is true",this.state.loading);
            return <Spinner size="small"/>
        }else{
            console.log("loading in else statement",this.state.loading);
        return null
        }

    }
      LoginApi_Integartion=async ()=>{
          
        console.log(this.state.username,this.state.password,this.state.loading);
        return fetch('http://192.168.1.22:4003/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
           "walletName":this.state.username,
           "password":this.state.password
            })
      })
          .then((response) => {
          this.setState({
            error:'',
            loading:true
         });
    if(response!=null){
    // this.homePage();
    console.log("get something");
    }
          
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
      }

    
    render() { 
        return ( 
         <View style={styles.container}>
          <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
           />
          <Text style={styles.errorStyle}>{this.state.error}</Text>
          <TextInput 
          placeholder="Enter Username or email"
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={this.getValueUsername}
          value={this.state.username}
          style={styles.input}>
          </TextInput>
         
          <TextInput  
          placeholder="Enter password"
          secureTextEntry
          autoCorrect={false}
          onChangeText={this.getValuePassword}
          style={styles.input}>
          </TextInput>

          <TouchableOpacity style={styles.buttonContainer} 
              onPress={this.LoginApi_Integartion}
              title="OK!"
              color="#841584"
              >
            <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            {this.renderButton()} 
            </View>
         );
    }
};


//Apply CSS
const styles = {
    container: {
      padding:25,
    
    },
    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:15,
        borderRadius:5,
        color:'black',
        paddingHorizontal:10
    },
    button:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    },

   
    registerButton:{
        fontStyle: 'italic',
        textAlign:'center',
        color:'black',
        fontWeight:'700',
        margin:10,
        marginLeft:5
        },
       
    buttonContainer:{
        backgroundColor:'#e81d62',
        borderRadius:5,
        paddingVertical:15,
        marginBottom:20

    },
    RegistrationStyle:{
        // backgroundColor:'#336e7b',
        borderRadius:5,
        paddingVertical:15,
        marginBottom:20
    },
    errorStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center',
        marginBottom:5
    }
   
};

export default LoginForm;
