import React ,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';
import {Actions} from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class LoginPageComponent extends Component {
    signup(){
        Actions.signup()
    }
    forgotpassword(){
        Actions.forgot_password()
    }

    state = {  }
    render() { 
       
        return ( 
            <KeyboardAwareScrollView style={styles.container} >
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./Images/Group.png')}/>
            <Text style={styles.textStyling}>Adhaara</Text>
            </View>
            <LoginForm/>
            <View style={styles.SignUpContainer} >
            <Text style={styles.Signuptext}>Don't have an account yet? </Text>
            <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Sign up here</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.SignUpContainer} >
            <TouchableOpacity onPress={this.forgotpassword}>
            <Text style={styles.signupButton}>Forgot password?</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
         );
    }
};

//Apply CSS
const styles = {
    signupButton:{
        color:'#5333ed',
        fontWeight:'500',
        fontSize:16

    },
    SignUpContainer:{
        
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:10,
        flexDirection:'row'
         },
         Signuptext:{
             color:'black',
             fontSize:16
         },
    textStyling:{
        fontWeight: 'bold',
        fontSize:20,
        color:'#C2185B',
        marginVertical:1, 
        fontStyle: 'italic'
    },
    container: {
        // alignItems:'center',
         flexGrow:1,
        //  backgroundColor: 'radial-gradient(circle at 50% 43%, #e81d62, rgba(188, 25, 80, 0.4) 96%, #e81d62)'
    },
    logoContainer:{
        alignItems:'center',
        marginTop:25, 
        flexGrow:1,
        justifyContent:'center'
    },
    logo:{
        height:100,
        width:100,
        // marginBottom:2,
     
    },
    title:{
        color:'#FFF',
        marginTop:'10',
        width:160,
        textAlign:'center',
        opacity:0.9
    }
};

export default LoginPageComponent;
