const React = require('react')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ snippetImage } />
        <p>Am looking forward to India tomorrow!</p>
        <ReactPlayer url='https://youtu.be/HXS8RfBToV8' className="video" />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Excited about India',
  date: '2017-04-03T18:49:00.000+01:00',
  path: '/excited/'
};
