const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
// import diaryImage from './diary.jpg';
import image1 from './1.jpg';
import image2 from './2.jpg';
import image3 from './3.jpg';
// import image4 from './4.jpg';
// import image5 from './5.jpg';
// import image6 from './6.jpg';

// Videos

// 329 - yoga
// 376 - sticks
// 382 - elliot stick


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
        <img src={ image1 } />
        <img src={ snippetImage } />
        <img src={ image2 } />
        <img src={ image3 } />
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
