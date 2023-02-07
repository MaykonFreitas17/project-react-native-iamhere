import { StyleSheet } from 'react-native';

// Estilo da página
export const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#131016',
	  padding: 24
	},
  
	eventName: {
	  color: '#FDFCFE',
	  fontSize: 24,
	  fontWeight: 'bold',
	  marginTop: 48,
	},
  
	eventDate: {
	  color: '#6B6B6B',
	  fontSize: 16
	},

	containerForm: {
		width: '100%',
		flexDirection: 'row',
		marginBottom: 25,
		marginTop: 25,
	},

	input: {
		backgroundColor: '#1F1E25',
		borderRadius: 5,
		color: '#FDFCFE',
		flex: 1,
		fontSize: 15,
		height: 56,
		marginRight: 12,
		padding: 16,
	},

	containerButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#31CF67'
	},

	buttonText: {
		color: '#FDFCFE',
		fontSize: 24,
	},

	listEmptyText: {
		color: '#FDFCFE',
		fontSize: 16,
		textAlign: 'center',
	},
});