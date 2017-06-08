const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import image0535 from './IMG_0535.jpg';
import image0536 from './IMG_0536.jpg';
import image0538 from './IMG_0538.jpg';
import image0542 from './IMG_0542.jpg';
import image0547 from './IMG_0547.jpg';
import image0563 from './IMG_0563.jpg';
import snippetImage from './snippet.jpg';
import image0584 from './IMG_0584.jpg';
import image0814 from './IMG_0814.jpg';
import image0818 from './IMG_0818.jpg';
import image0827 from './IMG_0827.jpg';
import image0905 from './IMG_0905.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we went in a swimming pool and had lunch. We watched TV, we went back to the swimming pool and had dinner. We went to bed.</p>
        <h3>Waking up on the train</h3>
        <img src={ image0535 } />
        <img src={ image0536 } />
        <img src={ image0538 } />
        <img src={ image0542 } />
        <ReactPlayer url='https://youtu.be/rX1W_GomCx0' className="video" />
        <img src={ image0547 } />
        <h3>La Grace resort in Goa</h3>
        <ReactPlayer url='https://youtu.be/_paAlRUzZYk' className="video" />
        <img src={ image0563 } />
        <img src={ snippetImage } />
        <img src={ image0584 } />
        <ReactPlayer url='https://youtu.be/mrnnzw965T4' className="video" />
        <img src={ image0814 } />
        <p><em>Elliot finding the squirty jet of water hilarious whilst cleaing his bum</em></p>
        <img src={ image0818 } />
        <img src={ image0905 } />
        <p><em>Willy Wonka II making a chocolate river</em></p>
        <img src={ image0827 } />
        <p><em>Reading my little brother a night-time story</em></p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'One day in Goa',
	date: '2017-04-10T09:30:00+05:30',
	path: '/2017-04-10-train-to-madgoan/'
};
