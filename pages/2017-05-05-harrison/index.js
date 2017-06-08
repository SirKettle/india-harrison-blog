const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 3102, 3148
import diaryImage from './diary.jpg';
import snippetImage from './snippet.jpg';
import image2104 from './IMG_2104.jpg';
import image2106 from './IMG_2106.jpg';
import image2137 from './IMG_2137.jpg';
import image2142 from './IMG_2142.jpg';
import image2153 from './IMG_2153.jpg';
import image2156 from './IMG_2156.jpg';
import image3083 from './IMG_3083.jpg';
import image3084 from './IMG_3084.jpg';
import image3086 from './IMG_3086.jpg';
import image3091 from './IMG_3091.jpg';
import image3095 from './IMG_3095.jpg';
import image3096 from './IMG_3096.jpg';
import image3116 from './IMG_3116.jpg';
import image3124 from './IMG_3124.jpg';
import image3152 from './IMG_3152.jpg';
import image3158 from './IMG_3158.jpg';
import image3161 from './IMG_3161.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>I had cream cheese sandwiches for breakfast on the tall high mountain. Shimla had loads of trees and rocky mountains. It is not as hot as other places we have been.</p>
        <p>After breakfast, we did building with building pens. I want to be a builder when I grow up.</p>
        <img src={ image3083 } />
        <img src={ image3084 } />
        <img src={ image3086 } />
        <img src={ image3091 } />
        <p>We went on a cable car to the top of a mountain. Dad was really scared! I was a bit anxious.</p>
        <img src={ image3095 } />
        <img src={ image3096 } />
        <ReactPlayer url="https://youtu.be/l7X4D9d_nMY" className="video" />
        <img src={ image2104 } />
        <img src={ image2106 } />
        <p>We went to a monkey temple and a naughty monkey chased me. We saw really cute baby monkeys. We walked through the forest pretending to be monkeys. I liked making the warning call.</p>
        <img src={ image3116 } />
        <img src={ image3124 } />
        <ReactPlayer url="https://youtu.be/ElP3qnBcNN0" className="video" />
        <ReactPlayer url="https://youtu.be/4_qe7uJjYPI" className="video" />
        <ReactPlayer url="https://youtu.be/EODsE4fvr4I" className="video" />
        <img src={ image3152 } />
        <img src={ image3158 } />
        <img src={ image3161 } />
        <img src={ snippetImage } />
        <img src={ image2137 } />
        <p>I got bubbles! We played with them at home then we went for dinner. We had a disgusting (masala) lassi! I had really spicy noodles.</p>
        <img src={ image2142 } />
        <img src={ image2153 } />
        <img src={ image2156 } />
      </BlogPost>
    );
  }
}

// class Post extends React.Component {
//   render () {
//         // <ReactPlayer url='https://youtu.be/WHG6-wjQ70A' className="video" />

//     return (
//       <BlogPost route={ this.props.route } author="HARRISON">
//         <p>test</p>
//       </BlogPost>
//     );

//   }
// }

export default Post;

exports.data = {
  title: 'Monkeying around in Shimla',
  date: '2017-05-05T20:30:00+05:30',
  path: '/2017-05-05-shimla/'
};
