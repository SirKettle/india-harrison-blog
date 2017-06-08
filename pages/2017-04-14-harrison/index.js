const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import diary2Image from './diary2.jpg';
import diary3Image from './diary3.jpg';
import mummyBrownImage from './mummy-brown.jpg';
import mummyBrown2Image from './mummy-brown2.jpg';
import image0950 from './IMG_0950.jpg';
import image0956 from './IMG_0956.jpg';
import image0957 from './IMG_0957.jpg';
import image0963 from './IMG_0963.jpg';
import image0969 from './IMG_0969.jpg';
import image0982 from './IMG_0982.jpg';
import image0990 from './IMG_0990.jpg';
import image0994 from './IMG_0994.jpg';
import image1038 from './IMG_1038.jpg';
import image1040 from './IMG_1040.jpg';
import image1043 from './IMG_1043.jpg';
import image1051 from './IMG_1051.jpg';
import snippetImage from './snippet.jpg';
import image1057 from './IMG_1057.jpg';
import image1058 from './IMG_1058.jpg';
import image1061 from './IMG_1061.jpg';
import image1062 from './IMG_1062.jpg';
import image1064 from './IMG_1064.jpg';
import image1067 from './IMG_1067.jpg';
import image1069 from './IMG_1069.jpg';
import image1071 from './IMG_1071.jpg';
import image1073 from './IMG_1073.jpg';
import image1076 from './IMG_1076.jpg';
import image1077 from './IMG_1077.jpg';
import image1079 from './IMG_1079.jpg';
import image1087 from './IMG_1087.jpg';



        // <ReactPlayer url='https://youtu.be/mC9eMhBpvvc' className="video" />

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>Today we got up and went with Daddy to the ATM. We saw monkeys and a weird tree. By the way, we went on scooters. On the way, we saw lots of horses and lots of cows.</p>
        <p>We talked a lot about the cows. I had an experiment. I was going to mix two cows together to see if the baby was half of each cow.</p>
        <img src={ image0950 } />
        <img src={ diary2Image } />
        <p>I cut my foot in a lake :(</p>
        <p>We said good-bye to Peter, Ganesha and Shammi.</p>
        <p>We went on two trains and got minerals when we got to Mumbai the next day.</p>
        <img src={ diary3Image } />
        <h3>After cutting my foot in the lake...</h3>
        <img src={ image0956 } />
        <img src={ image0957 } />
        <img src={ image0963 } />
        <img src={ image0969 } />
        <img src={ image0982 } />
        <img src={ image1038 } />
        <img src={ image1040 } />
        <img src={ image1043 } />
        <h3>Saying good-bye</h3>
        <img src={ image1051 } />
        <img src={ snippetImage } />
        <p><em>(from left) Peter, Ganesha and Shammi</em></p>
        <img src={ image1057 } />
        <img src={ image1058 } />
        <img src={ image1061 } />
        <p><em>The best mango lassies</em></p>
        <img src={ image1062 } />
        <img src={ image1064 } />
        <h3>On the trains</h3>
        <img src={ image1067 } />
        <img src={ image1069 } />
        <img src={ image1071 } />
        <p><em>Soccer Physics - breaking down language barriers - thanks Uncy Tom</em></p>
        <h3>A nice 4 hour stop-over at the station - next train at mid-night :/</h3>
        <img src={ image1073 } />
        <img src={ image0990 } />
        <img src={ image0994 } />
        <img src={ image1076 } />
        <img src={ image1077 } />
        <img src={ image1079 } />
        <img src={ image1087 } />
        <h3>"The Doggy Bear is coming down" song that I, Harrison Thirkettle made up</h3>
        <img src={ mummyBrownImage } />
        <img src={ mummyBrown2Image } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Goodbye Hampi - hello Mumbai',
  date: '2017-04-14T20:30:00+05:30',
  path: '/bye-hampi-hello-mumbai/'
};
