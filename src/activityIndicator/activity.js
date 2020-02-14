// try activity indicator with all sizes and colors and make an animating to this to hidden indicator  after 6 seconds from 
// component mounted 
import React, { Component } from 'react'
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'

export default class TryActivity extends Component {
    constructor(){
        super();
        this.state = {
            animating: true
        }
    }
    closeActivity = () => {
        setTimeout(() => {
            this.setState({animating: false})
        },6000)
        
    }
    componentDidMount(){
        this.closeActivity()
    }
    render(){
        return(
            <View style={styles.container}> 
                <ActivityIndicator animating={this.state.animating}  size="large" color="#1E54C0" /> 
                <ActivityIndicator size="large" color="#89575A" />
                <ActivityIndicator size="small" color="#4AB226" />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        flexDirection: 'row',
        justifyContent: 'center'

    }
})