import React from 'react'
import {View, Text ,StyleSheet , Switch } from 'react-native'

export default class SwitchDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            switchValue: false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}> {this.state.switchValue?'on':'off'}</Text>
                <Switch 
                value={this.state.switchValue}
                onValueChange={(switchValue) => this.setState({switchValue})}
                thumbColor='#BC5566'
                />
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
    textStyle: {
        fontSize: 25,
        color: '#47218A'
    }
})