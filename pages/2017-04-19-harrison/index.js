const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';

import image1176 from './IMG_1176.jpg';
import image1177 from './IMG_1177.jpg';
import imageTiger from './tiger.jpg';
import image1535 from './IMG_1535.jpg';
import image1542 from './IMG_1542.jpg';
import image1543 from './IMG_1543.jpg';
import image1548 from './IMG_1548.jpg';
import image1560 from './IMG_1560.jpg';
import image1563 from './IMG_1563.jpg';
import image1564 from './IMG_1564.jpg';
import image1567 from './IMG_1567.jpg';
import image1569 from './IMG_1569.jpg';
import image1577 from './IMG_1577.jpg';
import image1580 from './IMG_1580.jpg';
import image1600 from './IMG_1600.jpg';
import image1601 from './IMG_1601.jpg';
import image1613 from './IMG_1613.jpg';
import image1616 from './IMG_1616.jpg';
import image1618 from './IMG_1618.jpg';
import image1619 from './IMG_1619.jpg';
import image1621 from './IMG_1621.jpg';
import image1623 from './IMG_1623.jpg';
import image1632 from './IMG_1632.jpg';
import image1637 from './IMG_1637.jpg';
import image1644 from './IMG_1644.jpg';
import image1645 from './IMG_1645.jpg';
import image1090 from './IMG_1090.jpg';

// movies - 1582, 1584, 1585

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <h3>A quick morning swim</h3>
        <p>Today we went in a swimming pool. It was very cold.</p>
        <img src={ image1535 } />
        <h3>Last safari to try and find a tiger</h3>
        <p>We were very excited to go on the safari.</p>
        <img src={ image1542 } />
        <p><em>A crocodile</em></p>
        <img src={ image1543 } />
        <img src={ image1548 } />
        <p><em>Spotted deer</em></p>
        <img src={ image1560 } />
        <img src={ image1563 } />
        <img src={ image1564 } />
        <img src={ image1567 } />
        <p><em>Antelope having a bath</em></p>
        <img src={ image1569 } />
        <p><em>A real tiger print!</em></p>
        <img src={ image1577 } />
        <img src={ image1580 } />
        <ReactPlayer url='https://youtu.be/sF25rofrhgQ' className="video" />
        <ReactPlayer url='https://youtu.be/-uj12uFHCp4' className="video" />
        <ReactPlayer url='https://youtu.be/lFWqzvnbNP8' className="video" />
        <img src={ image1600 } />
        <p><em>A bird swooping down to eat a biscuit from my head</em></p>
        <img src={ image1601 } />
        <p><em>Is it a tiger!?</em></p>
        <img src={ snippetImage } />
        <p><em>Yes - a real wild tiger!</em></p>
        <p>We saw peacocks and deer and a crocodile and a tiger, the best bit.</p>
        <p>He was prowling around. He had black and orange stripes.</p>
        <p>We saw how frightened the animals were.</p>
        <img src={ imageTiger } />
        <img src={ image1613 } />
        <img src={ image1616 } />
        <img src={ image1618 } />
        <img src={ image1619 } />
        <p><em>Came so close - then off he went into the long grass</em></p>
        <img src={ image1621 } />
        <img src={ image1623 } />
        <img src={ image1632 } />
        <img src={ image1637 } />
        <img src={ image1176 } />
        <p><em>"The left out Bechow" - A peacock and a Bechow (I made up the last one)</em></p>
        <h3>My super space suit drawing</h3>
        <img src={ image1177 } />
        <h3>Midnight train to Udaipur</h3>
        <p>We went home and went to bed and we went on the night train at midnight.</p>
        <img src={ image1644 } />
        <img src={ image1645 } />
        <img src={ image1090 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'We saw a wild tiger!',
  date: '2017-04-19T20:30:00+05:30',
  path: '/we-saw-a-wild-tiger-at-ranthambore/'
};
