import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"

const styles = StyleSheet.create({
    libraryText: {
		color: "black",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
		marginLeft: 16,
		marginBottom: 13,
	},
	lineView: {
		backgroundColor: "rgb(102, 25, 87)",
		borderWidth: 1,
		borderColor: "rgb(102, 25, 87)",
		borderStyle: "solid",
		alignSelf: "flex-end",
		width: 378,
		height: 1,
		marginRight: 16,
		marginTop: 6,
	},
});

const BareScreenHeader = (props) => {
    return(<View style = {{
		marginTop: 100,
		height: 147,
    }}>
    <Text style={styles.libraryText}>{props.title}</Text>
	    <View style={styles.lineView}/>
    </View>)
};

export default BareScreenHeader;