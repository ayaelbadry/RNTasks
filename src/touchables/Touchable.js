import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Alert, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

export default class Touchable extends Component {
    constructor(){
        super();
        this.state = {
            myButtonOpacity: 1

        };
    }
    highlightAction = () => {
        Alert.alert("hi aya ")
        

    }
    hideUnder = () => {
        Alert.alert('show Undelay')
    }
    onLongPressed = () => {
        Alert.alert('You Pressed Button along Time')
    }
    render() {

        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.touchableHighlightStyle} onPress={this.highlightAction} underlayColor='#CD0E17' activeOpacity={0} >
                    <Text style={styles.textStyle} >TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('red', true)}>
                    <View >
                        <Text style={styles.textStyle}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity onPress={this.highlightAction} activeOpacity={0.7} >
                    <View >
                    <Text style={styles.textStyle}> TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({ myButtonOpacity: 0.5}) }  onPressOut={() => this.setState({myButtonOpacity: 1})} >
                    <View style={{opacity: this.state.myButtonOpacity}}>
                    <Text style={styles.textStyle}> animate touch</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback >
                    <View>
                        <Text style={styles.textStyle}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight style={styles.touchableHighlightStyle} onPress={this.highlightAction} underlayColor='white' onLongPress={this.onLongPressed}  activeOpacity={0.7} >
                    <Text style={styles.textStyle} >On Long Pesss</Text>
                </TouchableHighlight>


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
    touchableHighlightStyle: {

        alignItems: 'center',
        backgroundColor: '#DCC9CA'



    },
    textStyle: {
        fontSize: 25,
        color: '#D35B41'
    }

})
