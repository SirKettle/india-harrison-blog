const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import image0843 from './IMG_0843.jpg';
import image0849 from './IMG_0849.jpg';
import image0859 from './IMG_0859.jpg';
import image0866 from './IMG_0866.jpg';
import image0875 from './IMG_0875.jpg';
import image0879 from './IMG_0879.jpg';
import image0881 from './IMG_0881.jpg';
import image0882 from './IMG_0882.jpg';
import snippetImage from './snippet.jpg';
import image0887 from './IMG_0887.jpg';
import image0900 from './IMG_0900.jpg';
import image0913 from './IMG_0913.jpg';
import image0916 from './IMG_0916.jpg';
import image0936 from './IMG_0936.jpg';
import image0961 from './IMG_0961.jpg';
import image0970 from './IMG_0970.jpg';
import image0987 from './IMG_0987.jpg';
import image0990 from './IMG_0990.jpg';
import image0992 from './IMG_0992.jpg';
import image0998 from './IMG_0998.jpg';
import image1003 from './IMG_1003.jpg';
import image1015 from './IMG_1015.jpg';
import image1029 from './IMG_1029.jpg';
import image0910 from './IMG_0910.jpg';
import image0919 from './IMG_0919.jpg';
import image0923 from './IMG_0923.jpg';

import image0853 from './IMG_0853.jpg';
import image0856 from './IMG_0856.jpg';
import image0867 from './IMG_0867.jpg';
import image0869 from './IMG_0869.jpg';
import image0884 from './IMG_0884.jpg';
import image0894 from './IMG_0894.jpg';
import image0905 from './IMG_0905.jpg';
import image0911 from './IMG_0911.jpg';
import image0915 from './IMG_0915.jpg';
import image0917 from './IMG_0917.jpg';
import image0921 from './IMG_0921.jpg';
import image0923b from './IMG_0923b.jpg';
import image0948 from './IMG_0948.jpg';
import image0975 from './IMG_0975.jpg';


class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we got up and found 250 rupees from the tooth fairy.</p>
        <p>We had breakfast.</p>
        <blockquote><p>We went on a long journey and we saw temples that were over 600 years old.</p></blockquote>
        <p>We had french toast with baked beans.</p>
        <p>We went home on a tuk tuk and then on motorbikes.</p>
        <h3>The Indian tooth fairy left me something</h3>
        <img src={ image0843 } />
        <img src={ image0849 } />
        <img src={ image0853 } />
        <img src={ image0856 } />
        <img src={ image0859 } />
        <img src={ image0866 } />
        <img src={ image0867 } />
        <img src={ image0869 } />
        <img src={ image0875 } />
        <img src={ image0879 } />
        <h3>A tour of the temples</h3>
        <img src={ image0881 } />
        <img src={ image0882 } />
        <img src={ image0884 } />
        <img src={ snippetImage } />
        <img src={ image0887 } />
        <img src={ image0894 } />
        <ReactPlayer url='https://youtu.be/r7g6w8cikf4' className="video" />
        <img src={ image0900 } />
        <img src={ image0905 } />
        <img src={ image0911 } />
        <img src={ image0913 } />
        <img src={ image0915 } />
        <img src={ image0916 } />
        <img src={ image0917 } />
        <img src={ image0921 } />
        <img src={ image0923b } />
        <img src={ image0936 } />
        <img src={ image0948 } />
        <img src={ image0961 } />
        <img src={ image0970 } />
        <img src={ image0975 } />
        <img src={ image0987 } />
        <img src={ image0990 } />
        <h3>Mangoes with a slingshot</h3>
        <img src={ image0910 } />
        <img src={ image0919 } />
        <img src={ image0992 } />
        <h3>Another trip to the lake while I stayed with my friends</h3>
        <img src={ image0998 } />
        <ReactPlayer url='https://youtu.be/InND8HWa1w0' className="video" />
        <ReactPlayer url='https://youtu.be/CCke0uTZmIc' className="video" />
        <ReactPlayer url='https://youtu.be/Eec8REqcJ6M' className="video" />
        <img src={ image1015 } />
        <img src={ image1029 } />
        <ReactPlayer url='https://youtu.be/9Aot6j7qXLs' className="video" />
        <img src={ image0923 } />
        <img src={ image1003 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'Visiting the temples of Hampi',
	date: '2017-04-13T21:00:00+05:30',
	path: '/2017-04-13-hampi-temples/'
};
