import React , {Component} from 'react'
import {View, Text, TextInput, StyleSheet } from 'react-native'

export default class Textinput extends Component{
    constructor(props){
        super(props);
        this.state = {
            TextChanged: ''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                 <TextInput  
                    multiline={true}
                    numberOfLines={10}
                    style={{backgroundColor: 'azure', fontSize: 20,  borderBottomColor: '#642125',  borderBottomWidth: 5}}  
                    placeholder="Type here to translate!"  
                    onChangeText={(TextChanged) => this.setState({TextChanged})}  

                /> 
                 
                <Text style={{padding: 100, fontSize: 50}}>  
                    { this.state.TextChanged.split(' ').map((word) => word && '🍕').join(' ') } 
                </Text>


            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    }
})