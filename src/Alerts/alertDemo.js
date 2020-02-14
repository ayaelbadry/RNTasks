import React, {Component} from 'react'
import { View, Text, StyleSheet, Alert, TouchableHighlight} from 'react-native'

export default class AlertDemo extends Component{
    withCancleful = () => {
        Alert.alert(
            'with cancle',
            'hi , are you okay ?',
            [
                {text: 'Later', onPress: () => console.log('later pressed')},
                {text: 'ok', onPress: () => console.log('ok pressed')},
                {text: 'cancle', onPress: () => console.log('cancle pressed'), style: 'cancel'}
            ]
        )
    }
    withoutCancleful = () => {
        Alert.alert(
            'without cancle',
            'hi , are you okay ?',
            [
                {text: 'ok', onPress: () => console.log('ok pressed')},
                {text: 'cancle', onPress: () => console.log('cancle pressed'), style: 'cancel'}
            ],
            
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight onPress={this.withCancleful}>
                    <View style={styles.canclefulStyle}>
                        <Text>
                            with cancleful
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.withoutCancleful} >
                    <View style={styles.withoutCanclefulStyle}>
                        <Text>
                            without cancleful
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    canclefulStyle: {
        width: 150,
        height: 50,
        backgroundColor: '#4BD53D'
    },
    withoutCanclefulStyle: {
        width: 150,
        height: 50,
        backgroundColor: '#EB301D'
    }

})