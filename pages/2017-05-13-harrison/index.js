const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 3655
import diaryImage from './diary.jpg';

import snippetImage from './snippet.jpg'; // 3702
import image3555 from './IMG_3555.jpg';
import image3565 from './IMG_3565.jpg';
import image3568 from './IMG_3568.jpg';
import image3579 from './IMG_3579.jpg';
import image3593 from './IMG_3593.jpg';
import image3605 from './IMG_3605.jpg';
import image3621 from './IMG_3621.jpg';
import image3630 from './IMG_3630.jpg';
import image3633 from './IMG_3633.jpg';
import image3637 from './IMG_3637.jpg';
import image3658 from './IMG_3658.jpg';
import image3659 from './IMG_3659.jpg';
import image3670 from './IMG_3670.jpg';
import image3671 from './IMG_3671.jpg';
import image3672 from './IMG_3672.jpg';
import image3683 from './IMG_3683.jpg';
import image3690 from './IMG_3690.jpg';
import image3693 from './IMG_3693.jpg';
import image3697 from './IMG_3697.jpg';
import image3712 from './IMG_3712.jpg';
import image3721 from './IMG_3721.jpg';
import image3731 from './IMG_3731.jpg';
import image3739 from './IMG_3739.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>I felt scared of the monkeys living at our flat because Saurab said they might jump on us!</p>
        <p>I felt very happy and excited when we went on the boat trip on the river Ganges.</p>
        <img src={ image3555 } />
        <img src={ image3565 } />
        <img src={ image3568 } />
        <img src={ image3579 } />
        <img src={ image3593 } />
        <img src={ image3605 } />
        <img src={ image3621 } />
        <img src={ image3630 } />
        <img src={ image3633 } />
        <img src={ image3637 } />
        <ReactPlayer url="https://youtu.be/sfDSx1E0b6Q" className="video" />
        <p>We saw the cremation grounds from the boat. I could see dead people on the fire. I felt sad for the people that loved them.</p>
        <p>Only men are allowed to go to the fires. The fires have been burning for thousands of years and the fire has never gone out.</p>
        <img src={ image3658 } />
        <img src={ image3659 } />
        <p>They sing a song to the river every night because they think it's a god.</p>
        <img src={ image3670 } />
        <img src={ image3671 } />
        <img src={ image3672 } />
        <img src={ image3683 } />
        <img src={ image3690 } />
        <p>I put candles on the water and made a wish.</p>
        <img src={ image3693 } />
        <img src={ image3697 } />
        <img src={ snippetImage } />
        <img src={ image3712 } />
        <img src={ image3721 } />
        <img src={ image3731 } />
        <img src={ image3739 } />
      </BlogPost>
    );
  }
}

export default Post;

exports.data = {
  title: "Exploring Varanasi",
  date: "2017-05-13T20:30:00+05:30",
  path: "/2017-05-13-varanasi/"
};