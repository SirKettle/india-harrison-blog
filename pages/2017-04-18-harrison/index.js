const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import image1078 from './IMG_1078.jpg';
import image1382 from './IMG_1382.jpg';
import image1383 from './IMG_1383.jpg';
import image1385 from './IMG_1385.jpg';
import image1387 from './IMG_1387.jpg';
import image1389 from './IMG_1389.jpg';
import image1410 from './IMG_1410.jpg';
import image1412 from './IMG_1412.jpg';
import image1413 from './IMG_1413.jpg';
import image1419 from './IMG_1419.jpg';
import image1423 from './IMG_1423.jpg';
import image1424 from './IMG_1424.jpg';
import image1437 from './IMG_1437.jpg';
import image1441 from './IMG_1441.jpg';
import image1449 from './IMG_1449.jpg';
import image1460 from './IMG_1460.jpg';
import image1470 from './IMG_1470.jpg';
import image1473 from './IMG_1473.jpg';
import image1486 from './IMG_1486.jpg';
import image1487 from './IMG_1487.jpg';
import image1488 from './IMG_1488.jpg';
import image1497 from './IMG_1497.jpg';
import image1502 from './IMG_1502.jpg';
import image1503 from './IMG_1503.jpg';
import image1505 from './IMG_1505.jpg';
import image1506 from './IMG_1506.jpg';
import image1520 from './IMG_1520.jpg';
import image1523 from './IMG_1523.jpg';
import image1526 from './IMG_1526.jpg';

        // <ReactPlayer url='https://youtu.be/mC9eMhBpvvc' className="video" />
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We woke up on the train at Sawai Madhopur Station very early in the morning. At the station, we saw wild pigs!</p>
        <img src={ image1382 } />
        <img src={ image1383 } />
        <img src={ image1385 } />
        <img src={ image1387 } />
        <img src={ image1389 } />
        <p>On the way to the hotel, we saw camels pulling big loads. It looked like people didn't have that much.</p>
        <img src={ image1520 } />
        <img src={ image1523 } />
        <p>When we got to the hotel we had breakfast. It was cornflakes with cold milk.</p>
        <p>I was really desperate to go in the swimming pool. We had lots of fun, we had lunch and went on a tiger safari.</p>
        <h3>Tiger safari at Ranthambore</h3>
        <p>It was very hot and bumpy. We had to hold on tight in the jeep. Elliot fell asleep!</p>
        <img src={ image1410 } />
        <img src={ image1412 } />
        <img src={ image1413 } />
        <p><em>Elliot asleep on the jeep</em></p>
        <p>We saw crocodiles, peacocks, monkeys, deer, antelope, and a gazelle.</p>
        <p>Unfortunately, we didn't see a tiger. We had a night-time swim and saw bats.</p>
        <img src={ image1419 } />
        <img src={ image1423 } />
        <img src={ image1424 } />
        <img src={ image1437 } />
        <img src={ image1441 } />
        <img src={ image1449 } />
        <img src={ snippetImage } />
        <img src={ image1460 } />
        <img src={ image1470 } />
        <img src={ image1473 } />
        <img src={ image1486 } />
        <img src={ image1487 } />
        <img src={ image1488 } />
        <img src={ image1497 } />
        <img src={ image1502 } />
        <img src={ image1503 } />
        <img src={ image1505 } />
        <img src={ image1506 } />
        <img src={ image1526 } />
        <img src={ image1078 } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Ranthambore National Park',
  date: '2017-04-18T20:30:00+05:30',
  path: '/ranthambore-national-park/'
};
