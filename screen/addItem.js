import React, { Component } from "react";

import {View,Text,AsyncStorage,
  Image,Dimensions,TextInput,FlatList
} from "react-native";

// import AsyncStorage from '@react-native-community/async-storage';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Add extends React.Component{ 
  constructor(props){
    super(props);
     this.state = {
      Name:' ',
      ss:0,
      Array:[]
    };
  }

  
  additemSubmit=async()=>{
   
this.state.Array.push(this.state.additem)
try{
 await AsyncStorage.setItem('arrayOfValue', JSON.stringify(this.state.Array));

}catch(error){
  console.log('errrorrr',error)
}
try{
 const myArray= await AsyncStorage.getItem('arrayOfValue');
 if(myArray !== null){
   console.log('LLLLLLL',typeof JSON.parse(myArray))
   this.setState({
     Name :JSON.parse(myArray)
   })
 }
 }catch(error){
   console.log('errrorrr',error)
 }
    }
    
  render(){
    return(
        <View style={{flex:1,flexDirection:'row',paddingTop:width/10}}> 
        <View style={{flex:3,marginTop:width/40,alignItems:'center'}}>
         <TextInput style={{width:width/1.5,height:width/12,padding:width/60, borderRadius:width/20, 
         backgroundColor:'white',borderWidth:1}}
          // value={this.state.SearchValue}
        onChangeText={(additem) => this.setState({additem})}
        // returnKeyType="next"
        // keyboardType="email-address"
        placeholder="Add Item "
                                />
        </View>
        
        <View style={{flex:1,marginLeft:width/29, marginTop:width/40}}>
       <View style={{alignItems:'center',justifyContent:'center',width:width/5,height:width/10,borderRadius:(width/10)/2,backgroundColor:'green'}}>
        <Text onPress={this.additemSubmit}>Add Item</Text>
        </View>

        </View>
        {/* <View style={{flex:1,marginLeft:width/29, marginTop:width/40}}>

        <FlatList
      data={this.state.Name}
      extraData={this.state}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
  
         <View key={item} 
         style={{flexDirection:'row',margin:width/30,borderRadius:width/60,justifyContent:'center',alignItems:'center'}}> 


      <Text style={{fontSize:25}}>{item}</Text>
</View>
                                      )}
ListEmptyComponent={() => (
<View  style={{
flex:1,
alignItems: 'center',
marginTop:height/2.3


}}>

                 <ActivityIndicator size="large" color="white"/>
     
</View>

)}


/>
        </View> */}
          </View>
   )
}
}