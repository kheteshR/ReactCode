//import library for making a component
import React from 'react';
import {Text,View} from 'react-native';



//Make a components
const Header=(props)=>{
   console.log("props========>",props);
    
   //Destructuring object
   const {ViewStyle,textStyle}=styles;

   return (
   <View style={ViewStyle}>   
   <Text style={textStyle}>{props.headerText}</Text>
   </View>
   );
};

const styles={
    ViewStyle:{
    backgroundColor:"#F8F8F8",
    alignItems: 'center',
    justifyContent:'center',
    paddingTop:0,
    shadowColor:'#000',
    shadowOffset:{width:0,height:20},
    shadowOpacity:0.2,
    height:60,
    elevation:2,
    position:'relative'
    },
    textStyle:{
    fontSize: 20,
    fontWeight: 'bold'
    }
}


//make componentavailaible to other parts of App
export default Header;