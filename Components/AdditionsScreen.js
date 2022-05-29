import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Button, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { useNavigation } from "@react-navigation/native";



const HomeScreen = ({ navigation }) => {
	const [text, onChangeText] = React.useState("0 €...");
	const [number, onChangeNumber] = React.useState(null);
	

		return (
			
			<ScrollView style={styles.body}>

				<Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>NewAwaitOrder.com</Text>
				<Image style={styles.homeLogo} source={require('../assets/LogoAppli.png')} />
				<Text style={{ color: '#05ad91', fontWeight: 'bold', fontSize: 35, textAlign: 'center', marginVertical: 10 }}>Le restaurant</Text>
				<Text style={{ color: '#05ad91', fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginVertical: 10 }}>Votre addition              115,00 €</Text>
				<View style={styles.additionContent}>
					<View style={styles.circleIcons}>
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
						<MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="white" />
					</View>
					<View style={styles.textAddition}>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Le panacée</Text>
						<Text style={{ fontSize: 19, marginLeft: 9 }}>Salade de saison méditerranéenne 8</Text>
					</View>
				</View>

				<Button
					title="Cliquez ici !"
					onPress={() => navigation.navigate('Menu')}
					color="#05ad91"
				>
					<MaterialCommunityIcons
						name="silverware-fork-knife"
						size={24}
						color="black"
					/>
				</Button>

				< TouchableOpacity style={styles.buttonParts}>
					<Text>Partager l'addition</Text>
				</ TouchableOpacity>


				<View style={styles.tipText}>
				
					<View>
						<Text style={styles.tip}>Souhaitez-vous laisser un pourboire ?</Text>
					</View>
					<View style={styles.tipIcons}>
						<MaterialCommunityIcons name="numeric-2-box-outline" size={48} color="black" />
						<MaterialCommunityIcons name="numeric-5-box-outline" size={48} color="black" />
						<MaterialCommunityIcons name="numeric-7-box-outline" size={48} color="black" />
						<MaterialCommunityIcons name="numeric-8-box-outline" size={48} color="black" />
						<MaterialCommunityIcons name="numeric-10-box-outline" size={48} color="black" />
					</View>

					<View style={styles.tipChoice}>
						<Text style={styles.textChoice}>Choisir un autre montant</Text>
						<TextInput
   							style={styles.input}
   							onChangeText={onChangeText}
   							value={text}
						/>
					</View>

					<View style={styles.total}>
						<View style={styles.price}>
							<Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: 20}}>Votre addition (1/3 parts)</Text>
							<Text style={{ fontWeight: 'bold', marginLeft: 100, marginVertical: 10, fontSize: 20 }}>40,15€</Text>
						</View>
						<View style={styles.price} >
							<Text style={{color: 'grey', fontWeight: 'bold',fontSize: 20,  marginVertical: 10}}>Pourboire</Text>
							<Text style={{ color: 'grey', fontWeight: 'bold', marginLeft: 250, fontSize: 20,  marginVertical: 10}}>9€</Text>
						</View>
						<View style={styles.price}>
							<Text style={{ fontWeight: 'bold', marginVertical: 10, fontSize: 35}}>Total</Text>
							<Text style={{ fontWeight: 'bold', marginLeft: 170, fontSize: 35,  marginVertical: 10}}>49,15€</Text>
						</View>
					</View>

				</View>


			</ScrollView>
		);
	};

	const styles = StyleSheet.create({
		body: {
			backgroundColor: 'pink',
			borderWidth: 1,
			borderColor: 'thistle',
			marginTop: 23,
			paddingBottom: 20,
			marginHorizontal: 9,
			marginBottom: 9,
			borderRadius: 15,
		},

		homeLogo: {
			width: 150,
			height: 150,
			marginVertical: 20,
			marginLeft: 125,
			borderRadius: 200,
		},
		additionContent: {
			flex: 1,
			flexDirection: 'row',
			marginBottom: 25,
		},
		circleIcons: {
			color: 'white',
			marginTop: 10,
		},
		buttonParts: {
			alignItems: 'center',
			backgroundColor: '#05ad91',
			padding: 10,
			borderRadius: 20,
			margin: 40
		},
		tip: {
			fontSize: 20,
			fontWeight: 'bold',
			textAlign: 'center',
			color: '#05ad91',
			marginVertical: 15,
		},
		tipIcons: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			paddingHorizontal: 45,
			marginBottom: 25,
		},
		input: {
			height: 40,
			width: 70,
			margin: 12,
			borderWidth: 1,
			padding: 10,

		},
		tipChoice: {
			flexDirection: 'row',
			justifyContent: 'space-around',
		},
		textChoice: {
			fontSize: 20,
			paddingVertical: 20,
			color: '#05ad91',
		},
		price: {
			flexDirection: 'row',
		}
	});
export default HomeScreen;
