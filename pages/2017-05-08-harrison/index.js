const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 3181, 3188
import diaryImage from './diary.jpg';

import image3196 from './IMG_3196.jpg';
import snippetImage from './snippet.jpg';
import image3201 from './IMG_3201.jpg';
import image3222 from './IMG_3222.jpg';
import image3241 from './IMG_3241.jpg';
import image3265 from './IMG_3265.jpg';
import image3271 from './IMG_3271.jpg';
import image3282 from './IMG_3282.jpg';
import image3299 from './IMG_3299.jpg';
import image3302 from './IMG_3302.jpg';
import image3303 from './IMG_3303.jpg';
import image3305 from './IMG_3305.jpg';
import image3312 from './IMG_3312.jpg';
import image3314 from './IMG_3314.jpg';
import image3316 from './IMG_3316.jpg';
import image3338 from './IMG_3338.jpg';
import image3342 from './IMG_3342.jpg';
import image3344 from './IMG_3344.jpg';
import image3346 from './IMG_3346.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We went on the exhilarating toy train.</p>
        <p>We went in mountains and tunnels.</p>
        <p>It was called a toy train because it had shorter walls.</p>
        <p>We had the windows wide open and Daddy was scared we might fall out!</p>
        <p>We went through 102 tunnels and over 864 bridges. It was built in 1898.</p>
        <img src={ image3196 } />
        <img src={ snippetImage } />
        <img src={ image3201 } />
        <img src={ image3222 } />
        <img src={ image3241 } />
        <img src={ image3265 } />
        <img src={ image3271 } />
        <img src={ image3282 } />
        <img src={ image3299 } />
        <img src={ image3302 } />
        <img src={ image3303 } />
        <img src={ image3305 } />
        <img src={ image3312 } />
        <img src={ image3314 } />
        <img src={ image3316 } />
        <img src={ image3338 } />
        <img src={ image3342 } />
        <img src={ image3344 } />
        <img src={ image3346 } />
        <h3>We went to see leopards</h3>
        <p>They were growling at Daddy.</p>
        <ReactPlayer url="https://youtu.be/bvqNTW5y8Jk" className="video" />
        <ReactPlayer url="https://youtu.be/j279y7AQ10M" className="video" />
      </BlogPost>
    );
  }
}

export default Post;

exports.data = {
  title: 'Leopards and leaving Shimla',
  date: '2017-05-08T20:30:00+05:30',
  path: '/2017-05-08-shimla/'
};
