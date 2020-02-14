import React, { Component } from 'react'
import { View, StyleSheet, Animated, Easing } from 'react-native'

export default class SpinningImage extends Component {
    constructor() {
        super();
        this.state = {
            spinValue: new Animated.Value(0)
        }
    }
    componentDidMount() {
        this.spinImage()

    }
    spinImage = () => {
        this.state.spinValue.setValue(0)
        Animated.timing(this.state.spinValue, {
            toValue: 1,
            duration: 10000,
            easing: Easing.linear
        }).start(() => this.spinImage())
    }

    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        return (
            <View style={styles.container}>
                <Animated.Image style={[styles.imageStyle, {
                    transform: [{ rotate: spin }]
                }
                ]} source={require('../assets/images/hqdefault.jpg')} />

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
    imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 50

    }
})