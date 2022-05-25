import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const MenuScreen = () => {
	return (
		<View style={styles.contentBody}>
			<Text style={{ textAlign: 'center', fontSize: 21 }}>Découvrir le menu</Text>

			<View style={styles.buttons}>
				<Button style={styles.SubmitButtonStyle} title={'Menu'} mode={'contained'} height={50} uppercase={true} onPress={() => navigation.navigate('Menu')}></Button>
				<Button style={styles.buttonTwo} title={'Plats & desserts'} solid textColor="white" shadowColor="#ff738b" color="#ff738b"></Button>

				<Button style={styles.buttonThree} title={'Boissons'} outline color="#ff738b" textColor="#ff738b" borderColor="#ff738b"></Button>
			</View>

			<View style={styles.body}>
				<Text
					style={{
						color: 'red',
						textAlign: 'center',
						marginTop: 15,
						fontSize: 35,
					}}
				>
					Toute la journée
				</Text>
				<Text style={{ fontSize: 21, color: 'red', marginLeft: 9, fontWeight: 'bold' }}>Entrée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, color: 'red', marginLeft: 9, fontWeight: 'bold' }}>Plats</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	contentBody: {
		borderWidth: 1,
		borderColor: 'thistle',
		marginTop: 23,
		paddingBottom: 20,
		marginHorizontal: 9,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 45,
		overflow: 'hidden',
		marginTop: 23,
	},
	body: {
		borderWidth: 1,
		borderColor: 'thistle',
		marginTop: 23,
		marginHorizontal: 9,
	},
});

export default MenuScreen;
