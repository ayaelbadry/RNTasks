import React, { Component }  from 'react';
import {StyleSheet, View, Text, Alert, SectionList} from 'react-native';


export default class Section extends Component{
  constructor() {
    super();
    this.state = {
      SectionListItems: [
         {title:'section1', data: ['one','two','three','four','five'] },
         {title:'section2', data: ['one','two','three','four','five'] },
         {title:'section3', data: ['one','two','three','four','five'] }
        ],
    };
    
  }
  renderSeparator = () => {
    return(
      <View 
         style={{height: 2,
                 width: "100%",
                 backgroundColor: "#000",}}
      />
    )
    
  }
  renderSeparatorSection = () => {
    return(
      <View 
      style={{height: 4,
              width: "100%",
              backgroundColor: "#fff",}}
   />
    )
  }
  GetItem(item) {
    //Function for click on an item
    Alert.alert(item);
  }
 
 
  render() {
    return (     
        <View style={styles.container}>
          <SectionList
          sections={this.state.SectionListItems}
          ItemSeparatorComponent={this.renderSeparator}
          SectionSeparatorComponent={this.renderSeparatorSection}
          renderItem={({item})=> <Text style={styles.item} onPress={this.GetItem.bind(this, item)}>{item}</Text>} 
          renderSectionHeader={({section})=><Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item,index) => index}
          
          />
         
        </View>
    )

  }
 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ead97" 
  }, 
  sectionHeader: {  
    paddingTop: 2,  
    paddingLeft: 10,  
    paddingRight: 10,  
    paddingBottom: 2,  
    fontSize: 22,  
    fontWeight: 'bold',  
    color: "#fff",  
    backgroundColor: '#8fb1aa',  
},  
item: {  
    padding: 10,  
    fontSize: 18,  
    height: 44,  
}  
});

