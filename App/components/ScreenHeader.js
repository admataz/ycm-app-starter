import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const styles = StyleSheet.create({

    bgView: {

	},
	sign2wordText: {
		backgroundColor: "transparent",
		color: "rgb(103, 26, 87)",
		fontSize: 48,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.58,
		paddingTop: 7,
	},
	groupImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 66,
		height: 8,
		marginTop: 21,
	},
	welcomeBackText: {
		color: "rgb(103, 26, 87)",
		fontSize: 21,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.25,
		backgroundColor: "transparent",
		marginTop: 14,
	},
})

const ScreenHeader = (props) => {
    return(
        <View
            pointerEvents="box-none"
            style={{
                height: 187,
                marginRight: 1,
                marginTop: 44,
            }} >
            <View
                style={{		
					backgroundColor: "rgb(230, 230, 230)",
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					height: props.height
				}}/>
            <View
                pointerEvents="box-none"
                style={{
                    position: "absolute",
                    alignSelf: "center",
                    width: 259,
                    top: 38,
                    height: 132,
                    alignItems: "center",
                }}>
                <Text
                    style={styles.sign2wordText}>{props.title}</Text>
                <Image
					source={require("../../assets/group-3.png")}
                    style={styles.groupImage}/>
                <Text
                    style={styles.welcomeBackText}>{props.subTitle}</Text>
            </View>
        </View>
    )
};

export default ScreenHeader;