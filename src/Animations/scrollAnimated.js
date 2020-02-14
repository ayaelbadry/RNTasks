import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, ScrollView, FlatList } from 'react-native'

export default class ScrollAnimatedDemo extends Component {
    constructor() {
        super();
        this.state = {
            animatedValue: new Animated.Value(0),
            
        }

    }
   
    render() {
        const bckground = this.state.animatedValue.interpolate({
            inputRange: [0, 5000],
            outputRange: ['rgb(216, 176, 247)', 'rgb(84, 11, 140 )'],
            extrapolate: 'clamp'
        })
        const event = Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.animatedValue } } }

        ])

        return (
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }} onScroll={event} scrollEventThrottle={16} horizontal={true}>
                    <Animated.View style={{ width: 5000, backgroundColor: bckground }}>
                        
                    </Animated.View>
                </ScrollView>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textStyle: {
        fontSize: 25
    },
    viewStyle: {
        height: 70,
        width: '100%',
        marginBottom: 5
    }
})