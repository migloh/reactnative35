import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
// import StackGrid from "react-stack-grid";
import Constants from "expo-constants";
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';

export default function App() {
  const imgData = [
    { id: 1, imgSource: require('./assets/hplaptop.jpg') },
    { id: 2, imgSource: require('./assets/lapandbooks.jpg') },
    { id: 3, imgSource: require('./assets/lapandtable.jpg') },
    { id: 4, imgSource: require('./assets/look.jpg') },
    { id: 5, imgSource: require('./assets/touchthelid.jpg') },
    { id: 6, imgSource: require('./assets/anotherlapandtable.jpg') }
  ];

  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.upperBar}>
          <MaterialIcons style={{marginLeft: 12}} name="arrow-back" size={27} color="black" />
          <Ionicons style={{marginRight: 12}} name="md-expand" size={27} />
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
              <Text style={styles.namae}>Ricardo Milos</Text>
              <Text style={styles.metier}>Dancer</Text>
              <View style={styles.followorib}>
                <TouchableOpacity>
                  <View style={styles.fl}>
                    <Text style={styles.fltext}>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.ib}>
                    <MaterialIcons style={styles.sendicon} name="send" size={20} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.numbres}>
            <View style={styles.stats}>
              <Text style={styles.numerique}>210</Text>
              <Text style={styles.cate}>Photos</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.numerique}>15k</Text>
              <Text style={styles.cate}>Followers</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.numerique}>605</Text>
              <Text style={styles.cate}>Followings</Text>
            </View>
          </View>
        </View>
        <View style={styles.photoviewing}>
          <View style={{flexDirection: 'column'}}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.disimg}  key={item.id}/>
            })}
          </View>
          <View style={{flexDirection: 'column'}}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.disimg} key={item.id} />
            })}
          </View>
          {/* <StackGrid columnWidth={175}>
            {imgData.map(item => {
              return <Image source={item.imgSource} style={styles.disimg} key={item.id} />
            })}
          </StackGrid> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview:{
    marginTop: Constants.statusBarHeight
  },
  upperBar:{
    flexDirection: 'row',
    // backgroundColor: '#f3f6fa',
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
    // borderWidth: 1  
  },
  imageWrapper:{
    flex: 1,
    height: 110,
    marginHorizontal: 12,
    marginVertical: 12,
    // borderWidth: 1
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
    // borderWidth: 1,
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
    
  },
  fltext:{
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
  //fontWeight: 'bold',
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
  },
  numbres:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  //  backgroundColor: 'cyan'
    marginVertical: 15
  },
  stats:{
    height: 70,
    width: 110,
  //backgroundColor: 'green'
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
    alignItems: 'center',
  },
  disimg:{
    alignSelf: 'center',
    height: 175,
    width: 175,
    borderRadius: 25,
    marginVertical: 10
  },
  container: {
    alignSelf: 'stretch',
    fontFamily: 'sans-serif',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});
