import React, {Component} from 'react'
import { View, Text, StyleSheet, Picker} from 'react-native'

export default class PickerTry extends Component {
    constructor(){
        super();
        this.state = {
            choosenIndex: 0
        }
    }
    render(){
        return(
            <View style={styles.container}>  
                <Text style={styles.textStyle}>Picker Example</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  
                            this.setState({language: itemValue, choosenIndex: itemPosition})}  
                        mode='dropdown'
                    >  
                    <Picker.Item label="Java" value="java" />  
                    <Picker.Item label="JavaScript" value="js" />  
                    <Picker.Item label="React Native" value="rn" />  
                </Picker>  
                <Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>  
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
    textStyle:{
        fontSize: 25

    },
    pickerStyle: {
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  

    }
})