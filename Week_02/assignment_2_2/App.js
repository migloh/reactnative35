import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import {MaterialIcons, AntDesign, Feather, Entypo} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />   
          <ImageBackground source={require('./assets/tokyotower.jpg')} style={styles.imgcover} imageStyle={{borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>
          <View style={styles.upperBar}>
            <MaterialIcons style={{marginLeft: 20}} name="arrow-back" size={30} />
            <MaterialIcons style={{marginRight: 20}} name="filter-center-focus" size={30} />
          </View>
          </ImageBackground>
      <View style={styles.info}>
        <View style={styles.places}>
          <View style={styles.nameofplace}>
            <Text style={styles.name}>Tokyo Tower</Text>
            <Text style={styles.locateat}><Entypo name="location-pin" size={20} color="gray" /> Tokyo, Japan</Text>
          </View>
            <View style={styles.dlicon} onPress={() => {alert('Downloaded')}}>
              <Feather name='download-cloud' size={30} color='white' onPress={() => {alert('Downloaded')}}/>
            </View>
        </View>
        <View style={styles.descript}>
          <View>
            <Text style={{marginHorizontal: 20, marginVertical: 20, fontSize: 15}}>Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan. At 332.9 meters (1,092 ft), it is the second-tallest structure in Japan.</Text>
          </View>
          <View style={styles.hash}>
            <View style={styles.hashtag}><Text style={styles.hashtext}>#photography</Text></View>
            <View style={styles.hashtag}><Text style={styles.hashtext}>#city</Text></View>
          </View>
        </View>
        <View style={styles.actions}>
          <View style={styles.actionleft}>
            <AntDesign name="heart" size={30} color="#9EA6D1" onPress={() => {alert('Liked')}}/> 
            <MaterialIcons name="mode-comment" style={{marginLeft: 20}} size={30} color="#9EA6D1"/>
          </View>
          <View style={styles.actionright}>
          <MaterialIcons name="bookmark" size={30} color="#9EA6D1"  onPress={() => {alert('Bookmarked')}}/>
          </View>
        </View>
      </View>
      <View style={styles.bottombar}>
        <AntDesign name="laptop" size={27} />
        <Feather name="plus-circle" size={27} />
        <MaterialIcons name="person-outline" size={27} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperBar:{
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    height: 50
  },
  info:{
    flex: 1,
  },
  imgcover: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    justifyContent: 'flex-start'
  },
  places:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: 20,
  },
  name:{
    fontWeight: 'bold',
    fontSize: 40,
  },
  locateat:{
    fontSize: 17,
    color: 'gray',
    marginTop: 4
  },
  nameofplace:{
    marginLeft: 20
  },
  dlicon:{
    backgroundColor :'#3B73FF',
    marginRight: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent:'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  hash:{
    flexDirection:'row',
    marginHorizontal: 20
  },
  hashtag:{
    backgroundColor: '#F5F6FA',
    marginRight: 10,
    borderRadius: 20
  },
  hashtext:{
    color: '#ACB4D8',
    fontSize: 15, 
    margin: 10
  },
  actions:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  actionleft:{
    flexDirection: 'row',
    marginHorizontal: 20
  },
  actionright:{
    marginRight: 20,
  },
  bottombar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: "#f3f6fa",
    bottom: 0,
    height: 40
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'stretch',
    fontFamily: 'sans-serif'
  },
});
