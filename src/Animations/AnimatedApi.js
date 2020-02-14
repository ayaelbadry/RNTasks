import React , { Component } from 'react'
import { View, Text, StyleSheet, Animated, Easing} from 'react-native'

export default class AnimatedAPIDemo extends Component{
    constructor(){
        super();
        this.state = {
            items: 5,
            fadeAnim: new Animated.Value(0),
            ScaleAnim: new Animated.Value(0),
            slideAnim: new Animated.Value(-100)
        }
    }
    componentDidMount(){
        Animated.timing(this.state.fadeAnim,{
            duration: 3000,
            delay: 4000,
            easing: Easing.bounce,
            toValue: 1,
            useNativeDriver: true
        }).start()
        Animated.timing(this.state.slideAnim,{
            toValue: 0,
            delay: 4000,
            duration: 3000,
            useNativeDriver: true}).start()
        Animated.timing(this.state.ScaleAnim,{
            toValue: 1,
            duration: 3000,
            delay: 4000,
            useNativeDriver: true}).start()
    }
    getItems = () => {
        return Array(this.state.items)
        .fill(1)
        .map((item, index) => {
            switch(index){
               
                case 1: 
                //return Animted.View for relvent circle with index 1
                return(
                    <Animated.View style={[styles.circleStyle, {
                        transform: [
                            {scale: this.state.ScaleAnim}
                        ]
                        }]} key={index} >
                         <Text style={styles.itemText} >{index}</Text>
                    </Animated.View>
                )
                case 2: 
                //return Animted.View for relvent circle with index 2
                return(
                    <Animated.View style={[styles.circleStyle, {
                        transform: [
                            {translateY: this.state.slideAnim}
                        ]
                        }]} key={index} >
                         <Text style={styles.itemText} >{index}</Text>
                    </Animated.View>
                )
                case 3: 
                //return Animted.View for relvent circle with index 3
                return(
                    <Animated.View style={[styles.circleStyle, {
                        transform: [
                            {translateX: this.state.slideAnim}
                        ]
                        }]} key={index} >
                         <Text style={styles.itemText} >{index}</Text>
                    </Animated.View>
                )
                case 4: 
                //return Animted.View for relvent circle with index 5
                return(
                    <Animated.View style={[styles.circleStyle, {
                        transform: [
                            {translateX: this.state.slideAnim},
                            {translateY: this.state.slideAnim},
                        ]
                        }]} key={index} >
                         <Text style={styles.itemText} >{index}</Text>
                    </Animated.View>
                )
                default: 
                // return andimated.view for all other circles
                return(
                    <Animated.View  style={[styles.circleStyle, {
                        opacity: this.state.fadeAnim
                    }]} key={index}>
                         <Text style={styles.itemText}> {index}</Text>
                    </Animated.View>
                )
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
                {this.getItems()}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleStyle: {
        backgroundColor: '#D51D49',
        borderRadius: 50,
        width: 50,
        height: 50,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemText: {
        color: 'white'
    }
})