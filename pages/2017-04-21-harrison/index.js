const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import image1096 from './IMG_1096.jpg';
import image1108 from './IMG_1108.jpg';
import image1112 from './IMG_1112.jpg';
import image1117 from './IMG_1117.jpg';
import image1118 from './IMG_1118.jpg';
import image1126 from './IMG_1126.jpg';
import image1128 from './IMG_1128.jpg';
import image1129 from './IMG_1129.jpg';
import image1138 from './IMG_1138.jpg';
import image1141 from './IMG_1141.jpg';
import image1151 from './IMG_1151.jpg';
import image1156 from './IMG_1156.jpg';
import image1160 from './IMG_1160.jpg';
import image1161 from './IMG_1161.jpg';
import image1180 from './IMG_1180.jpg';
import image1187 from './IMG_1187.jpg';
import image1188 from './IMG_1188.jpg';
import image1190 from './IMG_1190.jpg';
import image1705 from './IMG_1705.jpg';

        // <ReactPlayer url='https://youtu.be/mC9eMhBpvvc' className="video" />
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we woke up. We were very excited to go in the swimming pool.</p>
        <p>We were going to an art class after lunch.</p>
        <img src={ image1096 } />
        <p><em>Tuk tuk cafe - not open for lunch though...</em></p>
        <img src={ image1108 } />
        <p><em>Yummy Yoga cafe</em></p>
        <p>We had okra. They call them <strong>Ladies' fingers</strong>. The okra was crunchy and we had a bread with a kind of curry called <strong>Paratha</strong>.</p>
        <h3>Art class with Locky</h3>
        <p>At art class, I painted a horse and my brother painted a camel.</p>
        <img src={ snippetImage } />
        <img src={ image1112 } />
        <img src={ image1117 } />
        <img src={ image1118 } />
        <img src={ image1126 } />
        <img src={ image1128 } />
        <img src={ image1129 } />
        <img src={ image1138 } />
        <img src={ image1141 } />
        <img src={ image1151 } />
        <p><em>Holding my brother's head up for the picture!</em></p>
        <img src={ image1188 } />
        <img src={ image1156 } />
        <img src={ image1187 } />
        <h3>Locky did some henna on my back too</h3>
        <img src={ image1160 } />
        <img src={ image1161 } />
        <p>We went home, did more swimming. In our room, there was a little bed by the window.</p>
        <img src={ image1705 } />
        <p>We had butter chicken for dinner on the roof. We could see bats!</p>
        <h3>My drawings today</h3>
        <img src={ image1180 } />
        <p><em>Our swimming pool</em></p>
        <img src={ image1190 } />
        <p><em>My horse again</em></p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Art class with Locky',
  date: '2017-04-21T20:30:00+05:30',
  path: '/2017-04-21-art-with-locky/'
};
