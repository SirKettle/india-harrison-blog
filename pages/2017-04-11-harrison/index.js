const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import image0590 from './IMG_0590.jpg';
import image0593 from './IMG_0593.jpg';
import image0594 from './IMG_0594.jpg';
import image0609 from './IMG_0609.jpg';
import image0625 from './IMG_0625.jpg';
import image0636 from './IMG_0636.jpg';
import snippetImage from './snippet.jpg';
import image0662 from './IMG_0662.jpg';
import image0667 from './IMG_0667.jpg';
import image0676 from './IMG_0676.jpg';
import image0681 from './IMG_0681.jpg';
import image0703 from './IMG_0703.jpg';
import image0707 from './IMG_0707.jpg';
import image0709 from './IMG_0709.jpg';
import image0715 from './IMG_0715.jpg';
import image0836 from './IMG_0836.jpg';
import image0838 from './IMG_0838.jpg';
import image0907 from './IMG_0907.jpg';
import image0706 from './IMG_0706.jpg';
import image0688 from './IMG_0688.jpg';
import image0682 from './IMG_0682.jpg';
import image0675 from './IMG_0675.jpg';
import image0674 from './IMG_0674.jpg';
import image0657 from './IMG_0657.jpg';
import image0664 from './IMG_0664.jpg';
import image0672 from './IMG_0672.jpg';
import image0649 from './IMG_0649.jpg';
import image0647 from './IMG_0647.jpg';
import image0639 from './IMG_0639.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We got up and went on a train and made new friends. We watched some TV and we went to a farm and went to bed, and they liked the English movies.</p>
        <h3>Waiting for the train</h3>
        <img src={ image0590 } />
        <img src={ image0593 } />
        <img src={ image0594 } />
        <h3>Making new friends on the way to Hampi</h3>
        <img src={ image0609 } />
        <img src={ image0625 } />
        <img src={ image0636 } />
        <img src={ image0639 } />
        <img src={ image0647 } />
        <img src={ image0649 } />
        <img src={ image0657 } />
        <img src={ snippetImage } />
        <img src={ image0662 } />
        <img src={ image0664 } />
        <img src={ image0667 } />
        <img src={ image0672 } />
        <img src={ image0674 } />
        <img src={ image0675 } />
        <img src={ image0676 } />
        <img src={ image0681 } />
        <img src={ image0682 } />
        <img src={ image0688 } />
        <h3>Woodstock 69, Hampi - our new home</h3>
        <img src={ image0703 } />
        <img src={ image0706 } />
        <img src={ image0707 } />
        <img src={ image0709 } />
        <img src={ image0836 } />
        <ReactPlayer url='https://youtu.be/sJ8rMVQhy-8' className="video" />
        <img src={ image0715 } />
        <img src={ image0907 } />
        <p><em>Funny land letters</em></p>
        <img src={ image0838 } />
        <p><em>Under the mosquito net in bed</em></p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'Train to Hampi',
	date: '2017-04-11T21:00:00+05:30',
	path: '/2017-04-11-train-to-madgoan/'
};
