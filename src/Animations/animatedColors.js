
 import React , { Component } from 'react'
 import { View, Text, StyleSheet, Animated, Easing} from 'react-native'
 
 export default class AnimatedColorsDemo extends Component{
     constructor(){
         super();
         this.state = {
           
            animatedValue: new Animated.Value(0)
         }
   
     }
     componentDidMount(){
        //using interpolate to make differnt animation with on animated value
         Animated.timing(this.state.animatedValue,{
             duration: 10000,
             delay: 4000,
             toValue: 2,
         }).start()
        
     }
    
     render(){
         const backgrnColor = this.state.animatedValue.interpolate({
             inputRange: [0,1],
             outputRange: ['rgb(0,0,0)','rgb(173, 79, 79)'],
             extrapolate: 'clamp'
         })
         const AnimatedColorBack = {
             backgroundColor: backgrnColor
         }
         
         return(
             <View style={styles.container}>
                   <Animated.View  style={[styles.viewStyle, AnimatedColorBack, {
                    opacity: this.state.animatedValue 
                    }]}>
                         
                   </Animated.View>
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
         width: '50%',
         height: '50%',
         backgroundColor: 'rgb(0,0,0)'
         
     }
 }) 