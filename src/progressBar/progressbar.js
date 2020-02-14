import React from 'react'
import { View,Text , StyleSheet, ProgressBarAndroid , ProgressViewIOS, Platform, TouchableOpacity } from 'react-native'

export default class ProgressbarDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            progressStatus: 0,
        }
    }
    //Start Progress
    startProgress = () => {
        this.value = setInterval( () => {
            if(this.state.progressStatus <= 1){
                this.setState({progressStatus: this.state.progressStatus+ .01})
            }
            
        }, 100 );

    }

    //Stop Progress
    stopProgress = () => {
        clearInterval(this.value)

    }

    //reset Progress 
    resetProgress =() => {
        this.setState({progressStatus: 0.0})

    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}> ProgressBar Demo </Text>
                <Text style={styles.textStyle}> Progress Value : {parseFloat(this.state.progressStatus * 100).toFixed(0)} %</Text>
                {
                    (Platform.OS === 'android')?
                    (<ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={this.state.progressStatus} />):
                    (<ProgressViewIOS progress={this.state.progressStatus} />)
                }
                <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} onPress={this.startProgress}>
                    <Text style={styles.textStyle}>Start Progress</Text> 
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} onPress={this.stopProgress}>
                    <Text style={styles.textStyle}> Stop Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} style={styles.buttonStyle} onPress={this.resetProgress}>
                    <Text style={styles.textStyle}>Reset Progress</Text>
                </TouchableOpacity>

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
        fontSize: 25
    },
    buttonStyle: {
        width: '70%',
        borderRadius: 35,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#40BA31',
        alignItems: 'center'

    }
})