import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

 import style from './park_buttons.style';
 import componentSchema from './park_buttons_schema';

export const ParkButtons = () => {
	
const onPress = (button) => {
	console.log('Pressed', button)
}
	 
	const renderButton = (button) => {
		return (
			<TouchableNativeFeedback onPress={() => this.onPress(button)} key={button}>
			  <Text style={{color: 'white'}}> {componentSchema.buttons[button].title } </Text>
			</TouchableNativeFeedback>
		);

	}

	const renderButtons = ( buttons ) => {
	 	return buttons.map( button => {
	 		return  (
	 			<View style = {style[button]} key = {button}>
	 				{renderButton(button)}
	 			</View>
	 		);
	 	});
	}

	const renderRow = (buttons, row) => {
		return (
			<View style = {style.row} key = {row} >
				{renderButtons(buttons)}
			</View>
		);
	}

	const renderRows = () => {
		return Object.keys(componentSchema.rows).map( row => {
			return renderRow(componentSchema.rows[row], row)
		})
	}


	return (
		<View style = {style.wrapper} >
			{renderRows()}
		 </View>
			
	);
}