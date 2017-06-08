const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
// import diaryImage from './diary.jpg';

import image1715 from './IMG_1715.jpg';
import image1716 from './IMG_1716.jpg';
import image1720 from './IMG_1720.jpg';
import image1722 from './IMG_1722.jpg';
import image1724 from './IMG_1724.jpg';
import image1725 from './IMG_1725.jpg';
import image1726 from './IMG_1726.jpg';
import image1728 from './IMG_1728.jpg';
import image1733 from './IMG_1733.jpg';
import image1745 from './IMG_1745.jpg';
import image1747 from './IMG_1747.jpg';
import image1781 from './IMG_1781.jpg';
import image1786 from './IMG_1786.jpg';
import image1791 from './IMG_1791.jpg';
import image1792 from './IMG_1792.jpg';
import image1798 from './IMG_1798.jpg';
import image1799 from './IMG_1799.jpg';
import image1801 from './IMG_1801.jpg';
import image1831 from './IMG_1831.jpg';
import image1835 from './IMG_1835.jpg';
import image1836 from './IMG_1836.jpg';
import image1838 from './IMG_1838.jpg';
import image1841 from './IMG_1841.jpg';
import image1858 from './IMG_1858.jpg';

        // <img src={ diaryImage } />
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <h3>Breakfast and swim on the roof of the Udai Kothi</h3>
        <ReactPlayer url='https://youtu.be/VMadDdKpzXo' className="video" />
        <img src={ image1715 } />
        <img src={ image1716 } />
        <h3>Cooking with Locky in his house</h3>
        <p>I had a cooking class with Locky today. First I chopped up yummy tomatoes...</p>
        <img src={ image1720 } />
        <img src={ image1722 } />
        <img src={ image1724 } />
        <img src={ image1725 } />
        <img src={ image1726 } />
        <img src={ image1728 } />
        <img src={ image1733 } />
        <img src={ snippetImage } />
        <p>...then I peeled the garlic. We had to bang the cloves on the table and peel the skin.</p>
        <img src={ image1745 } />
        <img src={ image1747 } />
        <p>I made chapatis on my own. I had to put in flour, oil and water and it made my fingers sticky.</p>
        <p>I had to roll it into a flat ball and dip it in the flour and squeeze flour on and I rolled it out 3 times with a rolling pin. Then I had to cook them on a special pan.</p>
        <ReactPlayer url='https://youtu.be/2yhiZhfo-WY' className="video" />
        <img src={ image1781 } />
        <img src={ image1786 } />
        <p>We ate it in their bedroom. My chapatis tasted like chapatis!</p>
        <img src={ image1791 } />
        <img src={ image1792 } />
        <h3>Fresh mix fruit juice</h3>
        <img src={ image1798 } />
        <img src={ image1799 } />
        <img src={ image1801 } />
        <h3>Dinner on the roof watching the bats</h3>
        <img src={ image1831 } />
        <img src={ image1835 } />
        <img src={ image1836 } />
        <img src={ image1838 } />
        <img src={ image1841 } />
        <h3>Leaving Udaipur</h3>
        <ReactPlayer url='https://youtu.be/V7jrFVyWzoE' className="video" />
        <p>We took the night train to Jaipur.</p>
        <img src={ image1858 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Cooking class in Udaipur',
  date: '2017-04-22T20:30:00+05:30',
  path: '/cooking-with-locky-udaipur/'
};
