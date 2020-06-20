import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

export default function About() {
  return (
    <View>
      <View>
        <ScreenHeader 
          title = "About Us"
          subtitle = "" 
          height = {150} />
      </View>
      <View>
        <Text style = {styles.heading} >
          Heading in here
        </Text>
        <Text style = {styles.paragraph}>
          Paragraph in here
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
    margin: 10,
  },
});
