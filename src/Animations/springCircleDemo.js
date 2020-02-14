import React from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity} from 'react-native'

export default class SpringCircleDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            items: 1
        }
    }
    increaseItems = (items) => {
        // const customLayoutAnimation = {
        //     duration: 100,
        //     create: {
        //         type: LayoutAnimation.Types.linear,
        //         property: LayoutAnimation.Properties.scaleXY,
        //     },
        //     update: {
        //         type: LayoutAnimation.Types.spring,
        //         springDamping: 0.2,
        //     },
        //     delete: {
        //         type: LayoutAnimation.Types.linear,
        //         property: LayoutAnimation.Properties.opacity,
        //     }
        // }
        const customLayoutAnimation = {
            duration: 1000,
            create: {
                delay: 1000,
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.4,
                initialVelocity: 1,
            },
            update: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY,
            },
            delete: {
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity,
            }
        }
        LayoutAnimation.configureNext(customLayoutAnimation)
        this.setState({items})

    }
    getItems = () => {
    return Array(this.state.items).fill(1).map((item , index) => <View style={styles.circleStyle} key={index} />)
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topbarStyle}> 
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.increaseItems(1)} >
                        <Text style={styles.textStyle}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.increaseItems(2)} >
                        <Text style={styles.textStyle}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.increaseItems(3)}>
                        <Text style={styles.textStyle}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.area}>
                      {this.getItems()}
                </View>
                

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topbarStyle: {
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        backgroundColor: '#D0D4D0'

    },
    textStyle: {
        fontSize: 15,
        alignSelf:'center'
    },
    buttonStyle: {
        width: '30%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
        

    },
    circleStyle: {
        backgroundColor: '#D51D49',
        borderRadius: 50,
        
        width: 50,
        height: 50,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    area: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {

    }
})