import React , { Component } from 'react'
import { View, Text , StyleSheet , Animated} from 'react-native'

export default class ProgressAnimated extends Component {
    constructor(){
        super();
        this.state = {
            progressStatus: 0,
        }
    }
    anim  = new Animated.Value(0)
    componentDidMount(){
        this.onAnimated()
    }
    onAnimated = () => {
        this.anim.addListener(({value})=> {  
            this.setState({progressStatus: parseInt(value,10)});  
        });  
        Animated.timing(this.anim,{  
             toValue: 100,  
             duration: 50000,  
        }).start();  

    }
    render(){
        return(
            <View style={styles.container}>
                <Animated.View style={[
                    styles.inner,{width: this.state.progressStatus+"%"},
                     ]} 
                 />
                <Animated.Text  style={styles.textStyle}>
                    {this.state.progressStatus}%
                </Animated.Text>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    textStyle: {
        fontSize: 23,
        color: "black",  
        position: "absolute",  
        zIndex: 1,  
        alignSelf: "center", 
    },
    inner:{  
        height: 30,  
        borderRadius: 15,  
        backgroundColor:"green",  
      }
})