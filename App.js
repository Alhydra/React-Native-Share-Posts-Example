import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Share} from 'react-native';

export default class App extends React.Component {
  Share = async () => {
    try {
      const result = await Share.share({
        message:`
        If you are planning to build a camera app using expo camera SDK, you have came to the right place.
        In this article we’re going to explore the React Native Camera Expo in multiple ways.
        And I will try my best to make it a full in depth guide with examples, for future references.`,
        title:"React Native Camera Expo Example",
        url:"https://reactnativemaster.com/react-native-camera-expo-example/"
      });

      if (result.action === Share.sharedAction) {
        alert("Post Shared")
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        alert("Post cancelled")
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Image style={styles.thumb}  source={{uri:"https://reactnativemaster.com/wp-content/uploads/2019/11/Featured-Image.jpg"}}/>
          <Text style={styles.h1}>React Native Camera Expo Example</Text>
          <Text style={styles.body}>
          If you are planning to build a camera app using expo camera SDK, you have came to the right place.
          In this article we’re going to explore the React Native Camera Expo in multiple ways.
          And I will try my best to make it a full in depth guide with examples, for future references.
          </Text>
          <TouchableOpacity style={styles.shareBtn} onPress={()=>this.Share()}>
            <Text style={styles.shareTxt}>SHARE</Text>
          </TouchableOpacity>
  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width:"80%",
    borderRadius:10,
    borderColor:"lightgray",
    borderWidth:1,
    justifyContent:"center",
    alignItems: 'center',

  },
  h1:{
    fontWeight:"bold",
    fontSize:30,
    color:"#000",
    margin:15,
  },
  body:{
    color:"#000",
    paddingHorizontal:10,
    textAlign:"justify",
    padding:10
    
  },
  thumb:{
    width:"100%",
    height:200,
    marginBottom:10,
    borderTopStartRadius:10,
    borderTopEndRadius:10
  },
  shareBtn:{
    margin:10,
    backgroundColor:"#FE7371",
    padding:10,
    width:"80%",
    borderRadius:20,
  },
  shareTxt:{
    fontSize:20,
    color:"#fff",
    alignSelf:"center"
  }
});
