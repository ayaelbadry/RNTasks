import React from 'react'
import {View , Text ,StyleSheet } from 'react-native'
import  {WebView} from 'react-native-webview'

export default class WebViewDemo extends React.Component{
    render(){
        return(
            <View style={styles.container}> 
                <WebView 
                source={{uri: 'https://astv.co'}}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
