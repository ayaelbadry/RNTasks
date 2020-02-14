import React , {Component} from 'react'
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity} from 'react-native'

export default class LayoutAnimationDemo extends Component{
    constructor(){
        super();
        this.state = {
            activeIndex: 0
        }

    }
    componentDidMount(){
        //make component fade in 
        // LayoutAnimation.linear();
        //create your own animation like linear or easeInEaseOut
        const {configureNext , create, Properties, Types} = LayoutAnimation
        configureNext(create(500, Types.linear, Properties.scaleXY))
        
    }
    updateActiveStatus = (activeIndex) => {
        // make component collapsed 
        // LayoutAnimation.linear();
        // LayoutAnimation.spring();
        // LayoutAnimation.easeInEaseOut();
        this.setState({activeIndex})

    }
    getStyleByCollapsingIndex = (index) => {
        return{
            Red: index === 1 && styles.collapsed,
            Green: index === 2 && styles.collapsed,
            Blue: index === 3 && styles.collapsed
        }
    }
    render(){
        const {Red, Green, Blue} = this.getStyleByCollapsingIndex(this.state.activeIndex)
        return(
            <View style={styles.container}>
                {/* View contains buttons in top bar */}
                <View style={styles.topbarStyle}>
                    {/* use touchable opacity to create our styles for buttons */}
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.updateActiveStatus(1)}>
                        <Text>Collabse Red</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.updateActiveStatus(2)} >
                        <Text>Collabse Green</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.updateActiveStatus(3)}>
                        <Text>Collabse Blue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => this.updateActiveStatus(0)}>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={[styles.redStyle, styles.area, Red]}></View>
                    <View style={[styles.greenStyle, styles.area, Green]}></View>
                    <View style={[styles.blueStyle, styles.area, Blue]}></View>

                
                 
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
        height: 70,
        backgroundColor: '#D0D4D0'

    },
    textStyle: {
        fontSize: 15,
        alignSelf:'center'
    },
    buttonStyle: {
        width: '22%',
        height: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
        

    },
    area: {
        flex: 1
    },
    redStyle: {
        width: '100%',
        backgroundColor: 'red'

    },
    greenStyle: {
        width: '100%',
        backgroundColor: 'green'

    },
    blueStyle: {
        width: '100%',
        backgroundColor: 'blue'

    },
    collapsed: {
        flex: 0
    }
})