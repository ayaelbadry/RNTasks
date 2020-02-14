import React from 'react'
import {View, Text ,StyleSheet, StatusBar} from 'react-native'

export default class StatusBarDemo extends React.Component{
    render(){
        return(
            <View>
                <StatusBar 
                backgroundColor="#654FA0"
                barStyle="light-content"
                hidden={false}
                translucent={false}
                />
                <View> 
                    <StatusBar hidden={false} backgroundColor="#3C6275" />
                </View>
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
})