const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';

// movies - 2474, 2496, 2525, 2535, 2547
import snippetImage from './snippet.jpg';

import image1610 from './IMG_1610.jpg';
import image1615 from './IMG_1615.jpg';
import image1629 from './IMG_1629.jpg';
import image1635 from './IMG_1635.jpg';
import image1685 from './IMG_1685.jpg';
import image2448 from './IMG_2448.jpg';
import image2457 from './IMG_2457.jpg';
import image2461 from './IMG_2461.jpg';
import image2491 from './IMG_2491.jpg';
import image2514 from './IMG_2514.jpg';
import image2518 from './IMG_2518.jpg';
import image2521 from './IMG_2521.jpg';
import image2526 from './IMG_2526.jpg';
import image2527 from './IMG_2527.jpg';
import image2529 from './IMG_2529.jpg';
import image2545 from './IMG_2545.jpg';
import image2553 from './IMG_2553.jpg';
import image2565 from './IMG_2565.jpg';
import image2569 from './IMG_2569.jpg';
import image2572 from './IMG_2572.jpg';
import image2576 from './IMG_2576.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We got up early on the train. I drank Mummy's chai while she was asleep.</p>
		<img src={ image1610 } />
		<img src={ image1615 } />
		<img src={ image1629 } />
        <p>We got off the train and went in a jeep into the desert. It was colder than the city!</p>
        <p>We saw tumble weed.</p>
		<img src={ image2491 } />
        <p>We got to go on a camel...</p>
		<img src={ snippetImage } />
        <ReactPlayer url='https://youtu.be/WHG6-wjQ70A' className="video" />
		<img src={ image2457 } />
		<img src={ image2461 } />
        <ReactPlayer url='https://youtu.be/NSzgVdgcitg' className="video" />
		<img src={ image1685 } />
		<p>...and when we got to camp, Elliot and me played in the sand dunes.</p>
		<img src={ image2518 } />
		<img src={ image2521 } />
        <ReactPlayer url='https://youtu.be/eyEh8kVRByM' className="video" />
        <ReactPlayer url='https://youtu.be/gBSeBdqCOsQ' className="video" />
        <ReactPlayer url='https://youtu.be/gBSeBdqCOsQ' className="video" />
		<img src={ image2545 } />
        <p>We got no tent, instead we slept under the stars.</p>
        <p>We saw loads of Dung beetles.</p>
		<img src={ image2514 } />
        <p>I saw loads of skeletons and bones. I found big horns - 2 of them.</p>
		<img src={ image2448 } />
        <p>The men sang Indian songs.</p>
		<img src={ image2526 } />
		<img src={ image2527 } />
		<img src={ image2529 } />
		<img src={ image2553 } />
		<img src={ image2565 } />
		<img src={ image2569 } />
		<img src={ image2572 } />
		<img src={ image2576 } />
		<img src={ image1635 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Sleeping in the desert near Jaisalmer',
  date: '2017-04-29T20:30:00+05:30',
  path: '/2017-04-29-jaisalmer-desert-safari/'
};
