import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import TFCamera from '../../components/TFCamera';
import ScreenHeader from "../../components/ScreenHeader";

export default function Translate() {
  return (
    <View>
      <View> 
        <ScreenHeader 
          title = "Translate"
          subtitle = "" 
          height = {150}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.welcome}>Translate Page</Text>
        <TFCamera />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
