import React, { Component } from 'react'
import { View, StyleSheet, Animated, Easing,Dimensions } from 'react-native'

export default class BounceBall extends Component {
    constructor(){
        super();
        this.state = {
            bounceball: new Animated.Value(0)
        }
    }

    componentDidMount(){
        this.bouncingBall()
    }

    bouncingBall = () => {
        Animated.timing(this.state.bounceball,{
            toValue: 1,
            duration: 4000,
            easing: Easing.bounce

        }).start(() => this.bouncingBall())
    }
    render(){
        const bounce = this.state.bounceball.interpolate({
            inputRange: [0,1],
            outputRange: [0,250],
            extrapolate: 'clamp'
        })
        const bgroundColor = this.state.bounceball.interpolate({
            inputRange: [0,0.5,1],
            outputRange: ['#D51D49','#F5E523','#D51D49']

        })
        return(
            <View style={styles.container}>
                <Animated.View style={[styles.bullStyle , {
                    
                    backgroundColor: bgroundColor,
                    transform: [
                        {translateY: bounce}
                    ]
                } ]} />

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
    bullStyle: {
        backgroundColor: '#D51D49',
        borderRadius: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    }
})