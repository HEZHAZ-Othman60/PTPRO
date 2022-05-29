import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuScreen = ({navigation}) => {
	return (
		<ScrollView style={styles.contentBody}>
						<Text style={{ color: 'purple', textAlign: 'center', fontSize: 20, marginVertical: 15 }} >NewAwaitOrder.com</Text>

			<Text style={{ textAlign: 'center', fontSize: 21 }}>Découvrir le menu</Text>

			<View style={styles.buttons}>
				<Button
					style={styles.SubmitButtonStyle}
					title={'Menu'}
					mode={'contained'}
					height={50}
					uppercase={true}
					onPress={() => navigation.navigate('Menu')}
				>
				</Button>
				<Button
					style={{ borderRadius: 56, overflow: 'hidden' }}
					title={'Plats & desserts'}
					solid textColor="white"
					shadowColor="#ff738b"
					color="#ff738b"
					onPress={() => navigation.navigate('DishesDesserts')}

				>
				</Button>
				<Button
					style={styles.buttonThree}
					title={'Boissons'}
					outline color="#ff738b"
					textColor="#ff738b"
					borderColor="#ff738b"
					onPress={() => navigation.navigate('Drinks')}

				>
				</Button>

			</View>

			<View style={styles.body}>
				<Text
					style={{
						color: 'red',
						textAlign: 'center',
						marginTop: 5,
						fontSize: 35,
					}}
				>
					Toute la journée
				</Text>
				<Text style={{ fontSize: 21, color: 'red', marginLeft: 9, fontWeight: 'bold', marginVertical: 19 }}>Entrées</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, color: 'red', marginLeft: 9, fontWeight: 'bold', marginVertical: 19 }}>Plats</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, color: 'red', marginLeft: 9, fontWeight: 'bold', marginVertical: 19 }}>Desserts</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Le panacée</Text>
				<Text style={{ fontSize: 21, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
			</View>
			<View>
			<Button
				style={styles.buttonThree}
				title={'Voir l\'addition'}
				outline color="#ff738b"
				textColor="#ff738b"
				borderColor="#ff738b"
				onPress={() => navigation.navigate('Additions')}
			>
			</Button>
			</View>
		</ScrollView>
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
	buttonTouch: {},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 23,
	},
	body: {
		borderWidth: 1,
		borderColor: 'thistle',
		marginVertical: 23,
		marginHorizontal: 9,
	},
	buttonThree: {
		marginBottom: 35,
	}
});

export default MenuScreen;
