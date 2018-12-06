import React ,{Component} from 'react';
import {View,ActivityIndicator} from 'react-native';


const Spinner=({size})=>{
    return(
        <View style={styles.SpinnerStyle}>
        <ActivityIndicator size={size || "large"}/>
        </View>
    );
};

const styles={
    SpinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItem:'center'
    }
}

export default Spinner;