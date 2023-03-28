import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Auth } from 'aws-amplify';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: "#212121", padding: 15}}>

        <View style={{flexDirection:'row',}}>
        <View style={{backgroundColor:'#cacaca',width:50,height:50,borderRadius:25}}></View>


            <View>
                <Text style={{color:'white',fontSize:24}}>Sandun Tharuka</Text>
                <Text style={{color:'lightgrey'}}>5.00</Text>
            </View>
            
        </View>


        <View style={{borderTopWidth:1,borderBottomWidth:1,borderTopColor:'#eee',borderBottomColor:'#eee',paddingVertical:5,marginVertical:10}}>
        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "#dddddd",paddingVertical:5}}>Messages</Text>
        </Pressable>
        </View>

        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "white"}}>Do more with your account</Text>
        </Pressable>

        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "white"}}>Make money driving</Text>
        </Pressable>

      </View>

      <DrawerItemList {...props} />
      <Pressable onPress={()=>(Auth.signOut())}>
          <Text style={{color: "red",padding:5,paddingLeft:20}}>log out</Text>
        </Pressable>

    </DrawerContentScrollView>
  );
}
