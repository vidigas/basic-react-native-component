import { StyleSheet } from 'react-native';


export default StyleSheet.create({
	 wrapper : {
	 	width: '100%',
	 	flexDirection: 'column',
	 	paddingLeft: 15,
	 	paddingRight: 15,
	 	height: 216,
	 	paddingBottom: 10,

	 //	backgroundColor: 'pink'
	 },
	 row : { 
	 	flex: 1,
	 	marginTop: 16,
	 	height: 56,
	 	flexDirection: 'row',
	 },
	 button_main: {
		flex: 1,
	 	height: 56,
    justifyContent: 'center',
    alignItems: 'center',
	 	backgroundColor: '#0097a7',
	 	color: 'white',
	 	borderRadius: 10
	 },
	 button_more: {
	 	flex: 1,
	 	height: 56,
	 	backgroundColor: '#0097a7',
	 	color: 'white',
	 	borderRadius: 10,
	 	justifyContent: 'center',
    alignItems: 'center',

	 },
	 button_later: {
	 	flex: 1,
	 	height: 56,
	 	backgroundColor: '#0097a7',
	 	color: 'white',
	 	justifyContent: 'center',
    alignItems: 'center',
	 	borderRadius: 10

	 },
	 button_now: {
	 	justifyContent: 'center',
    alignItems: 'center',
	 	flex:2,
	 	height: 56,
	 	backgroundColor: '#8c6eff',
		color: 'white',
		marginLeft: '4%',
		borderRadius: 10

	 }

});





