import React from 'react'
import { View, Text, Button, Modal, StyleSheet} from 'react-native'

export default class ModalDemo extends React.Component{
    constructor(){
        super()
        this.state = {
            visibleModal: false
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Modal 
                animationType="slide"  
                visible={this.state.visibleModal}
                onRequestClose={() => console.log("Modal Closed")}
                
                >
                    <View style={styles.modal}>
                        <Text style={styles.textStyle}>Modal is Open</Text>
                        <Button title='close Modal' onPress={() => this.setState({visibleModal: !this.state.visibleModal})} />
                    </View>
                </Modal>
                <Button title='Open Modal' onPress={() => this.setState({visibleModal: true})} />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    textStyle: {
        fontSize: 30,

    },
    modal: {
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDF158',
        borderRadius: 10,
        borderColor: '#5A5C02',
        borderWidth: 2,
        alignSelf:'center'
    }
})