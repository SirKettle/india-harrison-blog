const React = require('react');
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import diary2Image from './diary2.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';

// Videos

// 421 - house boat snippet
// 422 - house boat interview - poor sound
// 458 - tuk tuk time
// 460 - tuk tuk 2


        // <img src={ diaryImage } />
        // <p>Today I felt very ill.  We watched some TV then we went to the beach.  We buried us and we played cops and did cartwheels then we went home and had a dance. We had fish for dinner and we went to bed.</p>
        // <p>Oh, actually, we played with my teddy Nicholas.</p>
        // <ReactPlayer url='https://youtu.be/kgk20JADMqA' className="video" />
        // <img src={ image5 } />
        // <img src={ image6 } />
        // <p><em>Playing with Nicholas the teddy</em></p>
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <img src={ diary2Image } />
        <img src={ image1 } />
        <img src={ image2 } />
        <img src={ snippetImage } />
        <img src={ image3 } />
        <img src={ image4 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'The backwaters of Alleppey',
	date: '2017-04-08T20:30:00+05:30',
	path: '/2017-04-08-alleppey/'
};
