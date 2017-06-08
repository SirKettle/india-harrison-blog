const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import image0717 from './IMG_0717.jpg';
import image0734 from './IMG_0734.jpg';
import image0750 from './IMG_0750.jpg';
import image0767 from './IMG_0767.jpg';
import image0777 from './IMG_0777.jpg';
import image0786 from './IMG_0786.jpg';
import image0798 from './IMG_0798.jpg';
import image0806 from './IMG_0806.jpg';
import snippetImage from './snippet.jpg';
import toothlessImage from './toothless.jpg';
import image0826 from './IMG_0826.jpg';
import image0840 from './IMG_0840.jpg';
import image0841 from './IMG_0841.jpg';
import image0844 from './IMG_0844.jpg';
import image0849 from './IMG_0849.jpg';
import image0853 from './IMG_0853.jpg';
import image0858 from './IMG_0858.jpg';
import image0864 from './IMG_0864.jpg';
import image1175 from './IMG_1175.jpg';

import image0720 from './IMG_0720.jpg';
import image0722 from './IMG_0722.jpg';
import image0726 from './IMG_0726.jpg';
import image0727 from './IMG_0727.jpg';
import image0731 from './IMG_0731.jpg';
import image0732 from './IMG_0732.jpg';
import image0756 from './IMG_0756.jpg';
import image0759 from './IMG_0759.jpg';
import image0763 from './IMG_0763.jpg';
import image0770 from './IMG_0770.jpg';
import image0771 from './IMG_0771.jpg';
import image0773 from './IMG_0773.jpg';
import image0779 from './IMG_0779.jpg';
import image0793 from './IMG_0793.jpg';
import image0796 from './IMG_0796.jpg';
import image0803 from './IMG_0803.jpg';
import image0812 from './IMG_0812.jpg';
import image0816 from './IMG_0816.jpg';
import image0848 from './IMG_0848.jpg';
import image0851 from './IMG_0851.jpg';
import image0854 from './IMG_0854.jpg';
import image0873 from './IMG_0873.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Yesterday we got up and we had delicious pancakes.</p>
        <p>After, I went on the rocks with Daddy.</p>
        <p>We hired some motorbikes and rode with Mummy. It was scary at first and then I was happy. We didn't even have helmets!</p>
        <blockquote>
            <p>I lost my first wobbly tooth. But I couldn't find it!</p>
        </blockquote>
        <p>We went on a motorbike to a lake. We went to learn how to skim stones. We went home and had pizza for dinner.</p>
        <p>We made friends with Ganesha, Peter and Shammi.</p>
        <img src={ image0717 } />
        <img src={ image0720 } />
        <h3>Early morning ride to the rocks with Daddy</h3>
        <img src={ image0841 } />
        <img src={ image0844 } />
        <img src={ image0849 } />
        <img src={ image0851 } />
        <h3>Delicious pancakes</h3>
        <img src={ image0853 } />
        <img src={ image0858 } />
        <img src={ image0854 } />
        <h3>My first tooth fell out!</h3>
        <img src={ toothlessImage } />
        <h3>Scooting around</h3>
        <ReactPlayer url='https://youtu.be/xQoU-d5jEDs' className="video" />
        <img src={ image0722 } />
        <img src={ image0726 } />
        <img src={ image0727 } />
        <img src={ image0771 } />
        <img src={ image0731 } />
        <img src={ image0732 } />
        <img src={ image0734 } />
        <img src={ image0750 } />
        <img src={ image0864 } />
        <img src={ image0756 } />
        <img src={ image0759 } />
        <img src={ image0763 } />
        <img src={ image0767 } />
        <img src={ image0770 } />
        <img src={ image0773 } />
        <img src={ image0777 } />
        <img src={ image0779 } />
        <h3>Messing about with Peter</h3>
        <img src={ image0786 } />
        <img src={ image0793 } />
        <img src={ image0796 } />
        <img src={ image0873 } />
        <img src={ image0798 } />
        <h3>Skimming stones in the lake</h3>
        <img src={ image0803 } />
        <img src={ image0806 } />
        <img src={ image0812 } />
        <img src={ image0816 } />
        <img src={ image0848 } />
        <img src={ snippetImage } />
        <img src={ image0826 } />
        <ReactPlayer url='https://youtu.be/fmSTeZQc1HM' className="video" />
        <ReactPlayer url='https://youtu.be/rh3yQjbe1Mw' className="video" />
        <img src={ image0840 } />
        <ReactPlayer url='https://youtu.be/eife4ao2bB4' className="video" />
        <ReactPlayer url='https://youtu.be/WRzXdIFAd2w' className="video" />
        <h3>My latest drawing</h3>
        <img src={ image1175 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
	title: 'Losing my first tooth in Hampi',
	date: '2017-04-12T21:00:00+05:30',
	path: '/2017-04-12-hampi-and-the-missing-tooth/'
};
