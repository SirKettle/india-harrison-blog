const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <h3>Yoga with Aki Chan</h3>
        <p>We did some yoga in the morning...</p>
        <ReactPlayer url='https://youtu.be/gp_JXWdgts8' className="video" />
        <img src={ image1 } />
        <ReactPlayer url='https://youtu.be/AGAzE8NMIQk' className="video" />
        <img src={ snippetImage } />
        <img src={ image2 } />
        <img src={ image3 } />
        <h3>Kalaripayattu</h3>
        <ReactPlayer url='https://youtu.be/6LLgBqmabEc' className="video" />
        <ReactPlayer url='https://youtu.be/v8M0h1OEXZ4' className="video" />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'Yoga and Kalaripayattu with Aki',
	date: '2017-04-08T10:30:00+05:30',
	path: '/2017-04-08-yoga-and-kalaripayattu/'
};
