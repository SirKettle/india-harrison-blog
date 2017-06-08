const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import diary2Image from './diary2.jpg';
import snippetImage from './snippet.jpg';
import image1945 from './IMG_1945.jpg';
import image1968 from './IMG_1968.jpg';
import image1970 from './IMG_1970.jpg';
import image1972 from './IMG_1972.jpg';
import image1975 from './IMG_1975.jpg';
import image2002 from './IMG_2002.jpg';
import image2015 from './IMG_2015.jpg';
import image2019 from './IMG_2019.jpg';
import image2027 from './IMG_2027.jpg';
import image2029 from './IMG_2029.jpg';
import image2046 from './IMG_2046.jpg';
import image2050 from './IMG_2050.jpg';
import image2051 from './IMG_2051.jpg';
import image2058 from './IMG_2058.jpg';
import image2062 from './IMG_2062.jpg';
import image2079 from './IMG_2079.jpg';
import image2101 from './IMG_2101.jpg';
import image2107 from './IMG_2107.jpg';
import image2109 from './IMG_2109.jpg';
import image2111 from './IMG_2111.jpg';
import image2116 from './IMG_2116.jpg';
import image2120 from './IMG_2120.jpg';
import image2138 from './IMG_2138.jpg';
import image2146 from './IMG_2146.jpg';
import image2150 from './IMG_2150.jpg';
import image2152 from './IMG_2152.jpg';
import image2154 from './IMG_2154.jpg';
import image2161 from './IMG_2161.jpg';
import image2166 from './IMG_2166.jpg';
import image2167 from './IMG_2167.jpg';
/*
yes

feeding
 + 1951 - h feeding - that was easy!
 + 1983 - interview
 + 1984 - cont feeding - edit end - juice juice!
 + 1985 - Elliot feeding - maybe chop end off?
 + 2013 - relationship - chop end off

watering
 + 2048 - watering

scrubbing
 + 2065

riding

 + 2122
 + 2169



maybe
1919
1935 - vicky feeding POV
1948 - interview and elliot feeding
2003 - painting
*/

        // <ReactPlayer url='' className="video" />
class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <img src={ diary2Image } />
        <h3>Meeting the elephants!</h3>
        <p>I had the same feeling as when we came to India. I felt scared and excited.</p>
        <p>When we got there, I felt quite nervous because I'd never met the elephants before.</p>
        <p>I stroked them near their eyes and fed them grass and hay.</p>
        <img src={ snippetImage } />
        <img src={ image1945 } />
        <ReactPlayer url='https://youtu.be/oLyGo9_8L3g' className="video" />
        <img src={ image1968 } />
        <img src={ image1970 } />
        <img src={ image1972 } />
        <img src={ image1975 } />
        <ReactPlayer url='https://youtu.be/FOYokVsbXoA' className="video" />
        <ReactPlayer url='https://youtu.be/hGFmQ_RyLps' className="video" />
        <ReactPlayer url='https://youtu.be/ucgFKcjq7no' className="video" />
        <p>We got to paint them which was very unusual but the elephants liked it because it's like a massage.</p>
        <p>The elephants were big. We had two girl elephants. One was special as she was going to have a baby and she was blind. She was rescued from a circus.</p>
        <p>They only have four teeth and they get new teeth six times in their life.</p>
        <img src={ image2002 } />
        <ReactPlayer url='https://youtu.be/LueRyxw9P3k' className="video" />
        <img src={ image2015 } />
        <img src={ image2019 } />
        <p>We gave them a drink of water. We had to spray the water up their trunk, then they sprayed it into their mouths.</p>
        <img src={ image2027 } />
        <img src={ image2029 } />
        <img src={ image2046 } />
        <ReactPlayer url='https://youtu.be/F6w1zZ9RA0o' className="video" />
        <img src={ image2050 } />
        <p>We gave them a wash.</p>
        <img src={ image2051 } />
        <img src={ image2058 } />
        <img src={ image2062 } />
        <ReactPlayer url='https://youtu.be/ljVuPRHLd3g' className="video" />
        <img src={ image2079 } />
        <p>We sat on their backs and got sprayed.</p>
        <img src={ image2101 } />
        <p>I really didn't like that bit because I got soaked!</p>
        <img src={ image2107 } />
        <img src={ image2109 } />
        <img src={ image2111 } />
        <img src={ image2116 } />
        <img src={ image2120 } />
        <ReactPlayer url='https://youtu.be/o7L6bxSY4ds' className="video" />
        <p>We had a ride on the elephants and it was quite relaxing.</p>
        <img src={ image2138 } />
        <img src={ image2146 } />
        <img src={ image2150 } />
        <img src={ image2152 } />
        <img src={ image2154 } />
        <img src={ image2161 } />
        <p>I felt really sad when we had to leave them because I loved them.</p>
        <img src={ image2166 } />
        <img src={ image2167 } />
        <ReactPlayer url='https://youtu.be/0itIxsXzBMQ' className="video" />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'Elephantastic - Jaipur',
  date: '2017-04-24T20:30:00+05:30',
  path: '/elephantastic-jaipur/'
};
