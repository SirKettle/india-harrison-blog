const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 3181, 3188
import diaryImage from './diary.jpg';
import snippetImage from './snippet.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>When we got to Patna, we went through a monsoon.</p>
        <p>The driver was crazy 'cause he couldn't see where he was going. It was pretty frightening!</p>
        <p>We changed hotel because the first one was rubbish!</p>
        <img src={ snippetImage } />
        <ReactPlayer url="https://youtu.be/T1G3nv5BuIk" className="video" />
      </BlogPost>
    );
  }
}

export default Post;

exports.data = {
  title: 'Welcome to Patna',
  date: '2017-05-09T20:30:00+05:30',
  path: '/2017-05-09-patna/'
};
