const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';

// movies - 2601, 2605, 2616, 2623, 2659, 2809, 2833, 2834

import snippetImage from './snippet.jpg';
import image2579 from './IMG_2579.jpg';
import image2585 from './IMG_2585.jpg';
import image2588 from './IMG_2588.jpg';
import image2592 from './IMG_2592.jpg';
import image2602 from './IMG_2602.jpg';
import image2606 from './IMG_2606.jpg';
import image2608 from './IMG_2608.jpg';
import image2611 from './IMG_2611.jpg';
import image2617 from './IMG_2617.jpg';
import image2619 from './IMG_2619.jpg';
import image2626 from './IMG_2626.jpg';
import image2632 from './IMG_2632.jpg';
import image2637 from './IMG_2637.jpg';
import image2638 from './IMG_2638.jpg';
import image2648 from './IMG_2648.jpg';
import image2651 from './IMG_2651.jpg';
import image2655 from './IMG_2655.jpg';
import image2663 from './IMG_2663.jpg';
import image2668 from './IMG_2668.jpg';
import image2682 from './IMG_2682.jpg';
import image2684 from './IMG_2684.jpg';
import image2694 from './IMG_2694.jpg';
import image2695 from './IMG_2695.jpg';
import image2698 from './IMG_2698.jpg';
import image2701 from './IMG_2701.jpg';
import image2707 from './IMG_2707.jpg';
import image2709 from './IMG_2709.jpg';
import image2719 from './IMG_2719.jpg';
import image2720 from './IMG_2720.jpg';
import image2726 from './IMG_2726.jpg';
import image2727 from './IMG_2727.jpg';
import image2731 from './IMG_2731.jpg';
import image2737 from './IMG_2737.jpg';
import image2748 from './IMG_2748.jpg';
import image2755 from './IMG_2755.jpg';
import image2758 from './IMG_2758.jpg';
import image2764 from './IMG_2764.jpg';
import image2776 from './IMG_2776.jpg';
import image2788 from './IMG_2788.jpg';
import image2796 from './IMG_2796.jpg';
import image2829 from './IMG_2829.jpg';
import image2835 from './IMG_2835.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <h3>Waking up in the desert</h3>
        <img src={ image2579 } />
        <img src={ image2585 } />
        <img src={ image2588 } />
        <img src={ image2592 } />
        <ReactPlayer url='https://youtu.be/FiUXJiNeRgs' className="video" />
        <img src={ image2602 } />
        <ReactPlayer url='https://youtu.be/YC5fQJufTa4' className="video" />
        <img src={ image2606 } />
        <img src={ image2608 } />        
        <img src={ image2611 } />
        <ReactPlayer url='https://youtu.be/0fdgVRlu1mI' className="video" />
        <img src={ image2617 } />
        <img src={ image2619 } />
        <ReactPlayer url='https://youtu.be/nXqpI8tJnxc' className="video" />
        <img src={ image2626 } />
        <img src={ image2632 } />
        <img src={ image2637 } />
        <img src={ image2638 } />
        <img src={ image2648 } />
        <img src={ image2651 } />
        <img src={ image2655 } />
        <ReactPlayer url='https://youtu.be/qeXJvkWgk9w' className="video" />
        <img src={ image2663 } />
        <img src={ image2668 } />
        <img src={ image2682 } />
        <img src={ image2684 } />
        <img src={ image2694 } />
        <img src={ image2695 } />
        <img src={ image2698 } />
        <h3>Back to Jaisalmer in the jeep</h3>
        <img src={ image2701 } />
        <img src={ image2707 } />
        <img src={ image2709 } />
        <h3>Camel Safari - number two</h3>
        <p>Today we went on a jeep again to more camels.</p>
        <p>We had a big adventure Elliot and I.</p>
        <img src={ image2719 } />
        <img src={ image2720 } />
        <img src={ image2726 } />
        <img src={ image2727 } />
        <img src={ image2731 } />
        <img src={ image2737 } />
        <img src={ image2748 } />
        <img src={ image2755 } />
        <img src={ image2764 } />
        <img src={ image2776 } />
        <img src={ snippetImage } />
        <img src={ image2788 } />
        <img src={ image2796 } />
        <img src={ image2758 } />
        <ReactPlayer url='https://youtu.be/PjyvqoY_vPQ' className="video" />
        <p><em>Indian poo sticks! - using twigs and camel droppings as pieces.</em></p>
        <p>We went back and saw a dance show. I was quite scared to go up, but when I did I was happy.</p>
        <img src={ image2829 } />
        <ReactPlayer url='https://youtu.be/PUc5wJgo9Rs' className="video" />
        <ReactPlayer url='https://youtu.be/J81VK4BHpXY' className="video" />
        <p>We went on a camel cart to bed.</p>
        <img src={ image2835 } />
        <p>We slept out in the desert under the stars. I felt scared.</p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Dancing and sleeping in the desert',
  date: '2017-04-30T20:30:00+05:30',
  path: '/2017-04-30-jaisalmer-desert-safari-again/'
};
