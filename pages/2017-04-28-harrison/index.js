const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';

// movies 2323, 2428
import image1531 from './IMG_1531.jpg';
import image1533 from './IMG_1533.jpg';
import image1603 from './IMG_1603.jpg';
import image2327 from './IMG_2327.jpg';
import image2331 from './IMG_2331.jpg';
import image2340 from './IMG_2340.jpg';
import image2346 from './IMG_2346.jpg';
import image2361 from './IMG_2361.jpg';
import image2369 from './IMG_2369.jpg';
import image2374 from './IMG_2374.jpg';
import image2382 from './IMG_2382.jpg';
import image2389 from './IMG_2389.jpg';
import image2390 from './IMG_2390.jpg';
import image2396 from './IMG_2396.jpg';
import image2405 from './IMG_2405.jpg';
import image2414 from './IMG_2414.jpg';
import image2415 from './IMG_2415.jpg';
import image2416 from './IMG_2416.jpg';
import image2423 from './IMG_2423.jpg';
import image2429 from './IMG_2429.jpg';
import image2430 from './IMG_2430.jpg';
import image2431 from './IMG_2431.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We saw Amber Fort today.</p>
        <p>I found the second fort (Nager) more interesting.</p>
        <p>We came back and had a lazy day in the swimming pool.</p>
        <p>I thought the food at the farm was yummy.</p>
        <ReactPlayer url='https://youtu.be/YkEY_YrAW0w' className="video" />
        <img src={ image2327 } />
        <img src={ image2331 } />
        <img src={ image2340 } />
        <img src={ image2346 } />
        <img src={ image2361 } />
        <img src={ image2369 } />
        <img src={ image2374 } />
        <img src={ image2382 } />
        <img src={ image2389 } />
        <img src={ image2390 } />
        <img src={ image2396 } />
        <img src={ image2405 } />
        <img src={ snippetImage } />
        <img src={ image1533 } />
        <img src={ image2414 } />
        <img src={ image1531 } />
        <img src={ image2415 } />
        <img src={ image2416 } />
        <img src={ image2423 } />
        <ReactPlayer url='https://youtu.be/JAwu8DT2HvY' className="video" />
        <img src={ image2429 } />
        <img src={ image2430 } />
        <img src={ image2431 } />
        <h3>Waiting for the midnight train to Jaisalmer</h3>
        <img src={ image1603 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Jaipur - visiting the forts',
  date: '2017-04-28T20:30:00+05:30',
  path: '/jaipur-forts/'
};
