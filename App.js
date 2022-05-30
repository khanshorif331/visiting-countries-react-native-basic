import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Countries from './components/Countries'
import React, { useState, useEffect } from 'react'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Visiting Countriies!</Text>
			<Countries></Countries>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
