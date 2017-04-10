const React = require('react')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
import image5 from './5.jpg';
import image6 from './6.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ snippetImage } />
        <img src={ diaryImage } />
        <p>Today I felt very ill.  We watched some TV then we went to the beach.  We buried us and we played cops and did cartwheels then we went home and had a dance. We had fish for dinner and we went to bed.</p>
        <p>Oh, actually, we played with my teddy Nicholas.</p>
        <img src={ image2 } />
        <img src={ image3 } />
        <img src={ image4 } />
        <ReactPlayer url='https://youtu.be/kgk20JADMqA' className="video" />
        <img src={ image5 } />
        <img src={ image6 } />
        <p><em>Playing with Nicholas the teddy</em></p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'Felt ill but got better!',
	date: '2017-04-06T20:30:00+05:30',
	path: '/2017-04-06-kattoor/'
};
