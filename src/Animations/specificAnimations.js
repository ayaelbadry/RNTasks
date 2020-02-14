import React, { Component } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'

export default class DifferentAnimation extends Component {
    constructor() {
        super();
        this.state = {
            animatedValue: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.differentAnimated()

    }
    differentAnimated = () => {
       
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear
        }).start(() => this.differentAnimated())
    }

    render() {
        const marginLeftAnim = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })
        const opacityAnim = this.state.animatedValue.interpolate({
            inputRange: [0,0.5, 1],
            outputRange: [0, 1, 0]
        })
        const marginMovingAnim = this.state.animatedValue.interpolate({
            inputRange: [0,0.5, 1],
            outputRange: [0, 300,0]
        })
        const rotateAnim = this.state.animatedValue.interpolate({
            inputRange: [0,0.5, 1],
            outputRange: ['0deg','180deg','360deg']
        })
        const textSizeAnim = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18,32,18]
        })
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.firstViewStyle,{opacity: opacityAnim}]} />
                <Animated.View style={[styles.secondViewStyle, {transform: [{rotate: rotateAnim}]}]} />
                <Animated.View style={[styles.thirdViewStyle, {marginLeft: marginLeftAnim} ]} />
                <Animated.View style={[styles.forthViewStyle, {marginLeft: marginMovingAnim}]} />
                <Animated.Text style={[styles.textStyle, {fontSize: textSizeAnim}]} >Animated Text </Animated.Text> 
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    firstViewStyle: {
        width: 50,
        height: 40,
        backgroundColor: '#E9F011'
    },
    secondViewStyle: {
        width: 50,
        height: 40,
        marginTop: 10,
        backgroundColor: '#27D22E'
    },
    thirdViewStyle: {
        width: 50,
        height: 40,
        backgroundColor: '#E11228',
        marginTop: 10
    },
    thirdViewStyle: {
        width: 50,
        height: 40,
        backgroundColor: '#1632BD',
        marginTop: 10
    },
    textStyle: {
        color: '#07928E',
        marginTop: 20
    }
   
   
})