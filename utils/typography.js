import Typography from 'typography'
// import Wordpress2016Theme from 'typography-theme-wordpress-2016'
// import GithubTheme from 'typography-theme-github'
// import irvingTheme from 'typography-theme-irving'
// import doelgerTheme from 'typography-theme-doelger'
// import moragaTheme from 'typography-theme-moraga'
import theme from 'typography-theme-lincoln'

theme.baseFontSize = '17px';
theme.baseLineHeight = 1.6;
theme.scaleRatio = 2.5;
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

theme.bodyColor = 'hsla(0,0%,0%,0.6)';
theme.headerColor = 'hsla(0,0%,0%,0.6)';
theme.headerWeight = 700;
theme.bodyWeight = 400;
theme.boldWeight = 700;
theme.headerFontFamily = [ 'Playfair Display', 'Georgia' ];
theme.bodyFontFamily = [ 'Lora', 'Arial', 'Sans serif' ];
theme.boldWeight = 700;

const anchorColor = '#2b89d0';

theme.overrideThemeStyles = ({ rythym }, options) => ({
	'a': {
		color: anchorColor,
		backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${ anchorColor } 1px, ${ anchorColor } 2px, rgba(0, 0, 0, 0) 2px)`
	},
	'header > * > a': {
		color: 'inherit',
		textShadow: 'none',
		backgroundImage: 'none'
	},
	'header > * > a:hover': {
		color: anchorColor
	}
});

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
