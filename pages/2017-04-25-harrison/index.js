const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';

import image1329 from './IMG_1329.jpg';
import image1330 from './IMG_1330.jpg';
import image2175 from './IMG_2175.jpg';
import image2181 from './IMG_2181.jpg';
// import image2184 from './IMG_2184.jpg';
import image2185 from './IMG_2185.jpg';
import image2189 from './IMG_2189.jpg';
import image2196 from './IMG_2196.jpg';

import image1256 from './IMG_1256.jpg';
import image1287 from './IMG_1287.jpg';
import image1290 from './IMG_1290.jpg';
import imagehammock from './hammock.jpg';
import imagehammock2 from './hammock2.jpg';
import imagehammock3 from './hammock3.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we got up and I was very excited to do yoga.</p>
        <p>We did lots of poses. The poses were cobra pose, downward dog and camel pose.</p>
        <ReactPlayer url='https://youtu.be/UtiodG-nhGM' className="video" />
        <img src={ image2175 } />
        <img src={ image2181 } />
        <img src={ snippetImage } />
        <img src={ image2185 } />
        <img src={ image2189 } />
        <p>We did some swimming and we watched a movie and had lunch.</p>
        <img src={ image1256 } />
        <ReactPlayer url='https://youtu.be/QyqfcsFngEg' className="video" />
        <p>We went in the swimming pool and had dinner and went to bed.</p>
        <img src={ image1287 } />
        <img src={ image1290 } />
        <ReactPlayer url='https://youtu.be/RscApHFkuUA' className="video" />
        <img src={ image1329 } />
        <img src={ image1330 } />

        <p>We saw eggs and saw a storm and found a hammock.</p>
        <img src={ image2196 } />
        <img src={ imagehammock } />
        <img src={ imagehammock2 } />
        <img src={ imagehammock3 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'The day when we did yoga',
  date: '2017-04-25T20:30:00+05:30',
  path: '/yoga-the-farm-jaipur/'
};
