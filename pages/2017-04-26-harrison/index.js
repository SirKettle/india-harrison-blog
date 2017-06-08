const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import image2200 from './IMG_2200.jpg';
import image2202 from './IMG_2202.jpg';
import image2203 from './IMG_2203.jpg';
import image2206 from './IMG_2206.jpg';
import image2212 from './IMG_2212.jpg';
import snippetImage from './snippet.jpg';
import image2237 from './IMG_2237.jpg';
import image2242 from './IMG_2242.jpg';
import image2243 from './IMG_2243.jpg';
import image2244 from './IMG_2244.jpg';
import image2256 from './IMG_2256.jpg';
import image2265 from './IMG_2265.jpg';
import image2272 from './IMG_2272.jpg';
import image2273 from './IMG_2273.jpg';
import image2275 from './IMG_2275.jpg';
import image2282 from './IMG_2282.jpg';
import image2284 from './IMG_2284.jpg';
import diaryImage from './diary.jpg';

// movies - 2283

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we got up and I was very excited to go to the Taj Mahal.</p>
        <p>We went in a car for 5 hours.</p>
        <img src={ image2200 } />
        <img src={ image2202 } />
        <img src={ image2203 } />
        <img src={ image2206 } />
        <p>We rode on a horse and carriage.</p>
        <h3>The Taj Mahal</h3>
        <img src={ image2212 } />
        <p>It was made of white marble and it took 22 years to build!</p>
        <p>There was 22,000 men to build!</p>
        <p>The writing was made of onyx.</p>
        <p>It was 44 degrees here but snowing in England!</p>
        <img src={ snippetImage } />
        <img src={ image2237 } />
        <img src={ image2242 } />
        <img src={ image2243 } />
        <img src={ image2244 } />
        <img src={ image2256 } />
        <img src={ image2265 } />
        <img src={ image2272 } />
        <img src={ image2273 } />
        <h3>The drive back</h3>
        <img src={ image2275 } />
        <img src={ image2282 } />
        <ReactPlayer url='https://youtu.be/kCFOHb1VJLQ' className="video" />
        <img src={ image2284 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'The Taj Mahal trip',
  date: '2017-04-26T20:30:00+05:30',
  path: '/taj-mahal-agra/'
};
