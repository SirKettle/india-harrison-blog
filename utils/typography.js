import Typography from 'typography'
import Wordpress2016Theme from 'typography-theme-wordpress-2016'
import GithubTheme from 'typography-theme-github'
import irvingTheme from 'typography-theme-irving'
import doelgerTheme from 'typography-theme-doelger'

const typography = new Typography(irvingTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
