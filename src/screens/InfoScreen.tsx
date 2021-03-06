import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Constants from "expo-constants"
// or any pure javascript modules available in npm
import { Card } from "react-native-paper"
import InfoCard from "../widget/InfoCard"

export default function InfoScreen({ navigation }: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>
				Change code in the editor and watch it change on your phone! Save to get a shareable url.
			</Text>
			<TouchableOpacity onPress={() => navigation.navigate("More details")} style={styles.btn}>
				<Text style={{ fontSize: 20, color: "white" }}>Something select</Text>
			</TouchableOpacity>
			<Card>
				<InfoCard />
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#ecf0f1",
		padding: 8,
	},
	btn: {
		alignItems: "center",
		backgroundColor: "#3f51b5",
		maxWidth: 200,
		padding: 10,
		borderRadius: 10,
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
})
