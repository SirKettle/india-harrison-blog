const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import image1059 from './IMG_1059.jpg';
import image1064 from './IMG_1064.jpg';
import image1068 from './IMG_1068.jpg';
import image1368 from './IMG_1368.jpg';
import image1370 from './IMG_1370.jpg';
import image1381 from './IMG_1381.jpg';

        // <ReactPlayer url='https://youtu.be/mC9eMhBpvvc' className="video" />
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>I got a football in Mumbai.</p>
        <blockquote><p>We played football at the park. We looked like Oompa Loompas.</p></blockquote>
        <p>We went home, had a shower and went to bed on a train.</p>
        <p>We needed a wash because we were Oompa Loompas with orange dirt, and we poured a bucket of water on Daddy and Elliot sprayed water with the toilet hose!</p>
        <img src={ image1368 } />
        <img src={ image1370 } />
        <h3>Football in the cricket park</h3>
        <img src={ image1059 } />
        <img src={ snippetImage } />
        <img src={ image1064 } />
        <h3>Night train to Sawai Madhopur</h3>
        <img src={ image1068 } />
        <ReactPlayer url='https://youtu.be/SQgu2JGxA6M' className="video" />
        <img src={ image1381 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Oompa loompa football and leaving Bombay',
  date: '2017-04-17T20:30:00+05:30',
  path: '/oompa-loompa-football-in-bombay/'
};
