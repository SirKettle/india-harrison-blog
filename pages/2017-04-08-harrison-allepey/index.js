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
import image0393 from './IMG_0393.jpg';
import image0396 from './IMG_0396.jpg';
import image0405 from './IMG_0405.jpg';
import image0407 from './IMG_0407.jpg';
import image0408 from './IMG_0408.jpg';
import image0414 from './IMG_0414.jpg';
import image0417 from './IMG_0417.jpg';
import image0419 from './IMG_0419.jpg';
import image0426 from './IMG_0426.jpg';
import image0428 from './IMG_0428.jpg';
import image0430 from './IMG_0430.jpg';
import image0431 from './IMG_0431.jpg';
import image0432 from './IMG_0432.jpg';
import image0433 from './IMG_0433.jpg';
import image0435 from './IMG_0435.jpg';
import image0437 from './IMG_0437.jpg';
import image0442 from './IMG_0442.jpg';
import image0453 from './IMG_0453.jpg';
import image0454 from './IMG_0454.jpg';
import image0456 from './IMG_0456.jpg';

// Videos

// 421 - house boat snippet
// 422 - house boat interview - poor sound
// 458 - tuk tuk time
// 460 - tuk tuk 2
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <img src={ diary2Image } />
        <p>Today we got up and had breakfast, which was water melon and fresh bananas.</p>
        <p>We went on a busy bus. Then we walked to a boat called a <strong>Shikkara</strong>.</p>
        <p>On the boat we saw a dark green gecko. The gecko was sucking up all the ants with it's long sticky tongue.</p>
        <p>When we had a break and we went to the toilet, we saw an eagle!</p>
        <ReactPlayer url='https://youtu.be/maIto61Kltk' className="video" />
        <img src={ image1 } />
        <img src={ image2 } />
        <img src={ image0393 } />
        <img src={ image0396 } />
        <img src={ image0405 } />
        <img src={ image0407 } />
        <img src={ image0408 } />
        <img src={ snippetImage } />
        <img src={ image0414 } />
        <img src={ image0417 } />
        <img src={ image0419 } />
        <img src={ image0426 } />
        <img src={ image0428 } />
        <img src={ image0430 } />
        <img src={ image0431 } />
        <img src={ image0432 } />
        <img src={ image0433 } />
        <p>Then we went back home and went in a tuk-tuk. It was a very quick and noisy little thing.</p>
        <p>When we got home, we had a shower outside and watched some of the film "Trolls".</p>
        <img src={ image3 } />
        <img src={ image0435 } />
        <img src={ image0437 } />
        <img src={ image0442 } />
        <img src={ image0453 } />
        <img src={ image0454 } />
        <img src={ image0456 } />
        <ReactPlayer url='https://youtu.be/oYr20Dsr2FY' className="video" />
        <ReactPlayer url='https://youtu.be/n5HJ42kAY3I' className="video" />
        <img src={ image4 } />
        <p>Oh I forgot something, we did some yoga in the morning. Anyway, we had some dinner and came inside and went to bed.</p>
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
