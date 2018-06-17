import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient  } from 'expo';

export default class Weather extends Component{
  render(){
    return(
      <LinearGradient colors={["#00C6F8", "#005BEA"]} style={styles.container}>
      <View style={styles.upper}>
        <StatusBar barStyle="light-content"/>
        <Ionicons color="white" size={144} name="ios-rainy" />
        <Text style={styles.temp}>35 º </Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>Raining like a MF</Text>
        <Text style={styles.subtitle}>For more info look outsite</Text>
      </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    upper: {
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
      backgroundColor: "transparent",
      marginTop: 20
    },
    temp: {
      fontSize: 48,
      backgroundColor: "transparent",
      color: "white"
    },
    lower: {
      flex:1,
      alignItems: "flex-start",
      justifyContent: "flex-end",
      paddingLeft: 25
    },
    title: {
      fontSize: 30,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 10,
      fontWeight: "300"
    },
    subtitle: {
      fontSize: 24,
      backgroundColor: "transparent",
      color: "white",
      marginBottom: 24
    }
});
