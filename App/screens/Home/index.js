import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import Logo from "../../components/Logo";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function Home() {
  return (
    <View>
      <ScreenHeader 
          title = "Sign2Word"
          subTitle = "Welcome back"
          height = {187} />
      <View
          pointerEvents="box-none"
          style={{
            height: 300,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <Logo />
      </View>
      <View>
        <Text style={styles.welcome}>Welcome to React Native!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
