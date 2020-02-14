import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ThirdPartyDemo extends Component{
    render(){
        return(
            <View style={styles.container}> 
                 <View style={styles.viewStyle}>
                     <Icon size={40} name="ios-trash" color="red"   />
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewStyle: {
        
    }
})