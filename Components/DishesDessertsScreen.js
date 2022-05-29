import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useNavigation } from "@react-navigation/native";

const DishesDesserts = () => {
	return (
		<ScrollView style={styles.body}>
			<Text style={{ color: '#05ad91', fontWeight: 'bold', fontSize: 35, textAlign: 'center', marginVertical: 10 }}>Le restaurant</Text>
			<Image style={styles.homeLogo} source={require('../assets/LogoAppli.png')} />
			<Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', textAlign: 'center', marginBottom: 25 }}
			>Pour consulter le menu...
				<MaterialCommunityIcons
					name="silverware-fork-knife"
					size={24}
					color="white"
					marginLeft={35}
				/>
			</Text>


			<Button title="Cliquez ici !"
				onPress={() => navigation.navigate('DishesDesserts')}
				color="#05ad91"
			><MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" /></Button>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	body: {
		backgroundColor: 'red',
	},

	homeLogo: {
		width:350,
		height: 350,
		marginVertical: 80,
		marginLeft: 30,
		borderRadius: 200,
	},
});
export default DishesDesserts;
