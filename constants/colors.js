// Official Color codes of Indian Flag :
// Saffron: (RGB: 255, 153, 51) (hex code: #FF9933)
// White: (RGB: 255, 255, 255) (hex code: #FFFFFF)
// Green: (RGB: 19, 136, 8) (hex code: #138808)

const saffron = '#FF9933';
const green = '#3eb977';
const yellow = '#ffec62';
const quotes = '#f7f1c1';

const lightIndianScheme = {
	bodyBackground: '#ffffff',
	bodyText: 'hsla(0,0%,0%,0.6)',
	bodyTextDark: 'hsla(0,0%,0%,0.8)',
	bodyTextLight: 'hsla(0,0%,0%,0.4)',
	headerText: saffron,
	accent: yellow,
	quotes: quotes,
	link: green
};

const darkIndianScheme = {
	bodyBackground: '#333',
	bodyText: '#eee',
	bodyTextDark: '#ddd',
	bodyTextLight: '#fff',
	headerText: saffron,
	accent: '#555',
	quotes: green,
	link: '#2b89d0'
};

export default {
	...darkIndianScheme
	,...lightIndianScheme
};