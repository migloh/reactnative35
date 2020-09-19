import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";
import {MaterialIcons, AntDesign, Feather} from '@expo/vector-icons';

export default function App() {
  const imgData = [
    { id: 1, imgSource: require('./assets/hplaptop.jpg') },
    { id: 2, imgSource: require('./assets/lapandbooks.jpg') },
    { id: 3, imgSource: require('./assets/lapandtable.jpg') },
    { id: 4, imgSource: require('./assets/look.jpg') },
    { id: 5, imgSource: require('./assets/touchthelid.jpg') },
    { id: 6, imgSource: require('./assets/anotherlapandtable.jpg') }
  ];
  const imghigh = [175, 300];
  const centerImgData = Math.floor(imgData.length / 2);

  return (
  <View style={styles.container}>
    <ScrollView style={styles.scrollview}>
      <StatusBar style="auto" />

      <View style={styles.upperBar}>
        <MaterialIcons style={{marginLeft: 12}} name="arrow-back" size={27} />
        <MaterialIcons style={{marginRight: 12}} name="filter-center-focus" size={27} />
      </View>
      
      <View style={styles.info}>
        <View style={styles.overview}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('./assets/qbu.png')}
              style={styles.avatarImage}
              resizeMode='cover'
            />
          </View>
          <View style={styles.namejob}>
            <Text style={styles.namae}>倉石たんぽぽ</Text>
            <Text style={styles.metier}>Student</Text>
            <View style={styles.followorib}>
              <TouchableOpacity onPress={() => {alert('Followed')}}>
                <View style={styles.fl} >
                  <Text style={styles.fltext}>Follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {alert('Message sent')}}>
                <View style={styles.ib}>
                  <MaterialIcons style={styles.sendicon} name="send" size={20} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.numbres}>
          <View style={styles.stats}>
            <Text style={styles.numerique}>6</Text>
            <Text style={styles.cate}>Photos</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.numerique} nativeID="getflwer">12</Text>
            <Text style={styles.cate}>Followers</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.numerique}>20</Text>
            <Text style={styles.cate}>Followings</Text>
          </View>
        </View>
      </View>
      <View style={styles.photoviewing}>
        <View style={{flexDirection: 'column', marginVertical: 0}}>
          {imgData.slice(0, centerImgData).map(item => {
            return <Image source={item.imgSource} style={{alignSelf: 'center',
                height: imghigh[Math.floor(Math.random() * imghigh.length)],
                width: 175,
                borderRadius: 25,
                marginVertical: 10}}  key={item.id}/>
          })}
        </View>
        <View style={{flexDirection: 'column', marginVertical: 0}}>
          {imgData.slice(centerImgData).map(item => {
            return <Image source={item.imgSource} style={{alignSelf: 'center',
              height: imghigh[Math.floor(Math.random() * imghigh.length)],
              width: 175,
              borderRadius: 25,
              marginVertical: 10}}  key={item.id} />
          })}
        </View>
      </View>  
    </ScrollView>
    <View style={styles.bottombar}>
      <AntDesign name="laptop" size={27} />
      <Feather name="plus-circle" size={27} />
      <MaterialIcons name="person-outline" size={27} />
    </View>
  </View>


  );
}

const styles = StyleSheet.create({
  scrollview:{
    marginTop: Constants.statusBarHeight
  },
  upperBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40
  },
  info:{
    flexDirection: "column"
  },
  overview:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',  
  },
  imageWrapper:{
    flex: 1,
    height: 110,
    marginHorizontal: 12,
    marginVertical: 12,
  },
  avatarImage:{
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 5
  },
  namejob:{
    flex: 2,
    height: 110,
    marginRight: 12
  },
  namae:{
    fontWeight: 'bold',
    fontSize: 30,
  },

  metier:{
    fontSize: 20,
    color: 'gray'
  },

  followorib:{
    marginVertical: 12,
    flexDirection: 'row'
  },
  fl:{
    height: 30,
    width: 120,
    borderRadius: 15,
    backgroundColor: '#3B73FF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
  fltext:{
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    lineHeight: 30
  },
  sendicon:{
    alignSelf: 'center',
    lineHeight: 30
  },
  ib:{
    height: 30,
    width: 70,
    borderRadius: 15,
    backgroundColor: '#56D8FF',
    marginHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
  numbres:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  stats:{
    height: 70,
    width: 110,
  },
  numerique:{
    alignSelf:'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  cate:{
    alignSelf: 'center',
    fontSize: 15,
    color: 'gray'
  },
  photoviewing:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
    alignSelf: 'stretch',
    fontFamily: 'sans-serif',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});