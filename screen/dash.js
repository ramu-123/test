import React, { Component } from "react";

import {View,Text,StyleSheet,ScrollView,AsyncStorage,
  Image,Dimensions,TouchableOpacity,FlatList,ActivityIndicator, Alert,Platform,TextInput
} from "react-native";
import { ButtonGroup ,SearchBar} from 'react-native-elements';

// import AsyncStorage from '@react-native-community/async-storage';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


// import { withNavigation } from 'react-navigation';

// ############# Class Start ###################################

export default class dash extends Component {

  static navigationOptions = {
    header: null
}

// ############ constructor #####################################
constructor(props){

  super(props);
 
  this.state={

    SearchValue:'',
    fatch_Contact:[],
    visible:true,
    Array:[],
        myArray:'',
    ss:0

  }
  
    
  this.arrayholder = [];
};
    

ChangePlus=()=>{
this.setState({
  visible:false
})
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
      myArray :JSON.parse(myArray),
      visible:true
     })
     
    this.arrayholder =JSON.parse(myArray)
   }
   }catch(error){
     console.log('errrorrr',error)
   }
  
      }

      searchFilterFunction = text => {
        this.setState({
          value: text,
        });
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item}`;
          console.log('111',itemData)
          const textData = text;
          console.log('2222',textData)
      
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          myArray: newData,
        });
      };
      renderHeader = () => {
        return (
          <SearchBar
            placeholder="Item"
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        );
      };
      renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '86%',
              // backgroundColor: 'purple',
              marginLeft: '14%',
            }}
          />
        );
      };
      _listEmptyComponent = () => {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:15,fontWeight:'bold'}}>No item Available</Text>
            </View>
        )
      }
  //_______________________________________________________________________________________________________________________  
  render() {
    return (
      
        <View  style={{ flex: 1,backgroundColor:'white'}}>
  {this.state.visible ?<View style={{flex:1,flexDirection:'row',paddingTop:width/10}}> 
          <View style={{flex:1,padding:width/30,marginTop:width/100}}>
        
          </View>
          <View style={{flex:3,marginTop:width/40,alignItems:'center'}}>
     <Text style={{fontSize:25,fontWeight:'bold'}}>Item </Text>
          </View>
          
          <View style={{flex:1,marginLeft:width/29, marginTop:width/40}}>
         <View style={{alignItems:'center',width:width/10,height:width/10}}>
          {/* <Icon style={{marginTop:width/50,}}
          onPress={this.ChangePlus}
           name="plus" size={25} color="white"/>  */}
           <TouchableOpacity onPress={this.ChangePlus}>

           <Text style={{fontSize:25,fontWeight:'bold'}}>+</Text>
           </TouchableOpacity>
          </View>

          </View>
          </View> : 

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
          </View>
          }

          <View style={{flex:9}}> 

                
<ScrollView scrollEnabled style={{paddingTop:width/19,}}>
      


      <FlatList
      data={this.state.myArray}
      extraData={this.state}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => (
  
         <View  
         style={{flexDirection:'row',margin:width/30,borderRadius:width/60,justifyContent:'center',alignItems:'center'}}> 


      <Text style={{fontSize:25}}>{item}</Text>
</View>
                                      )}

                                      ItemSeparatorComponent={this.renderSeparator}
                                      ListHeaderComponent={this.renderHeader}
                                      
      
    ListEmptyComponent={this._listEmptyComponent}


/>


</ScrollView>

</View>

     </View>
       
    );
  }
}

// export default withNavigation(Search);

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    alignSelf:'center',
    height: width/4.6,width:width/4.6
  },
});

