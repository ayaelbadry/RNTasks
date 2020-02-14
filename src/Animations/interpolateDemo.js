 import React , { Component } from 'react'
import { View, Text, StyleSheet, Animated, Easing} from 'react-native'

export default class InterpolateDemo extends Component{
    constructor(){
        super();
        this.state = {
            items: 5,
           animatedValue: new Animated.Value(0)
        }
  
    }
    componentDidMount(){
       //using interpolate to make differnt animation with on animated value
        Animated.timing(this.state.animatedValue,{
            duration: 3000,
            delay: 4000,
            easing: Easing.bounce,
            toValue: 2,
            useNativeDriver: true
        }).start()
        // Animated.timing(this.state.slideAnim,{
        //     toValue: 0,
        //     delay: 4000,
        //     duration: 3000,
        //     useNativeDriver: true}).start()
        // Animated.timing(this.state.ScaleAnim,{
        //     toValue: 1,
        //     duration: 3000,
        //     delay: 4000,
        //     useNativeDriver: true}).start()
    }
    getItems = () => {
   
        return Array(this.state.items)
        .fill(1)
        .map((item, index) => {
            const slideAnim = this.state.animatedValue.interpolate({
                inputRange: [0,1],
                outputRange: [-100,0],
                //extrapolate prevent output ranges change value to 2 make on circle 2, 3 ,4
                 extrapolate: 'clamp'
            })
            switch(index){
               
                case 1: 
                //return Animted.View for relvent circle with index 1
                return(
                    <Animated.View style={[styles.circleStyle, {
                        transform: [
                            {scale: this.state.animatedValue}
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
                            {translateY: slideAnim}
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
                            {translateX: slideAnim}
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
                            {translateX: slideAnim},
                            {translateY: slideAnim},
                        ]
                        }]} key={index} >
                         <Text style={styles.itemText} >{index}</Text>
                    </Animated.View>
                )
                default: 
                // return andimated.view for all other circles
                return(
                    <Animated.View  style={[styles.circleStyle, {
                        opacity: this.state.animatedValue
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