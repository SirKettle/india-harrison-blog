import Typography from 'typography';
import { prefixLink } from 'gatsby-helpers'
// import Wordpress2016Theme from 'typography-theme-wordpress-2016'
// import GithubTheme from 'typography-theme-github'
// import irvingTheme from 'typography-theme-irving'
// import doelgerTheme from 'typography-theme-doelger'
// import moragaTheme from 'typography-theme-moraga'
import theme from 'typography-theme-lincoln';
import colors from 'constants/colors';
import wallpaper from 'components/harrison-mugshot.jpg';

theme.baseFontSize = '17px';
theme.baseLineHeight = 1.6;
theme.scaleRatio = 3;
theme.googleFonts = [
	{
		name: 'Playfair Display',
		styles: [
			'400',
			'700',
			'900'
		]
	},
	{
		name: 'Lora',
		styles: [
			'400',
			'400i',
			'700',
			'700i'
		]
	}
];

theme.bodyColor = colors.bodyText;
theme.headerColor = colors.headerText;
theme.headerWeight = 700;
theme.bodyWeight = 400;
theme.boldWeight = 700;
theme.headerFontFamily = [ 'Playfair Display', 'Georgia' ];
theme.bodyFontFamily = [ 'Lora', 'Arial', 'Sans serif' ];
theme.boldWeight = 700;

const anchorColor = colors.link;
const accentColor = colors.quotes;

theme.overrideThemeStyles = ({ rythym }, options) => ({
	'.app': {
		background: 'white',
		padding: '1.5rem 1.2rem'
	},
	'h1,h2,h3,h4,h5,h6': {
		marginBottom: '1.3rem',
		lineHeight: 1.2
	},
	'hr': {
		background: colors.quotes
	},
	'a': {
		color: anchorColor,
		backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${ anchorColor } 1px, ${ anchorColor } 2px, rgba(0, 0, 0, 0) 2px)`
	},
	'header > * > a': {
		textShadow: 'none',
		backgroundImage: 'none'
	},
	'blockquote': {
		borderLeftColor: `${ accentColor } !important`,
		marginLeft: '-1.6rem',
		lineHeight: 1.7,
		color: colors.bodyTextLight
	},
	'@media (min-width: 480px)': {
		'.app': {
			padding: '2rem 2.5rem',
			boxShadow: '0 0 10px rgba(0,0,0,0.1)'
		},
		'h1,h2,h3,h4,h5,h6': {
			marginBottom: '1.6rem',
			lineHeight: 1.2
		}
	},
	'@media (min-width: 769px)': {
		body: {
			paddingTop: '1.6rem',
			paddingBottom: '1.6rem',
			background: `url(${ prefixLink(wallpaper) })`,
			backgroundSize: '8%',
			position: 'relative'
		},
		'body:after': {
			position: 'absolute',
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			content: '""',
			background: '#f1efe8',
			opacity: 0.95,
			zIndex: -1
		},
		'.app': {
			padding: '2rem 4.5rem'
		}
	}
});

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
