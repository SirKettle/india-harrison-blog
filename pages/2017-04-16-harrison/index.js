const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import diaryImage from './diary.jpg';
import pythonImage from './IMG_1171.jpg';
import image1034 from './IMG_1034.jpg';
import image1176 from './IMG_1176.jpg';
import image1177 from './IMG_1177.jpg';
import image1178 from './IMG_1178.jpg';
import image1179 from './IMG_1179.jpg';
import image1187 from './IMG_1187.jpg';
import image1188 from './IMG_1188.jpg';
import snippetImage from './snippet.jpg';
import image1190 from './IMG_1190.jpg';
import image1191 from './IMG_1191.jpg';
import image1194 from './IMG_1194.jpg';
import image1197 from './IMG_1197.jpg';
import image1199 from './IMG_1199.jpg';
import image1201 from './IMG_1201.jpg';
import image1203 from './IMG_1203.jpg';
import image1217 from './IMG_1217.jpg';
import image1218 from './IMG_1218.jpg';
import image1220 from './IMG_1220.jpg';
import image1221 from './IMG_1221.jpg';
import image1222 from './IMG_1222.jpg';
import image1226 from './IMG_1226.jpg';
import image1229 from './IMG_1229.jpg';
import image1230 from './IMG_1230.jpg';
import image1239 from './IMG_1239.jpg';
import image1246 from './IMG_1246.jpg';
import image1247 from './IMG_1247.jpg';
import image1250 from './IMG_1250.jpg';
import image1261 from './IMG_1261.jpg';
import image1262 from './IMG_1262.jpg';
import image1263 from './IMG_1263.jpg';
import image1269 from './IMG_1269.jpg';
import image1272 from './IMG_1272.jpg';
import image1275 from './IMG_1275.jpg';
import image1280 from './IMG_1280.jpg';
import image1290 from './IMG_1290.jpg';
import image1295 from './IMG_1295.jpg';
import image1296 from './IMG_1296.jpg';
import image1306 from './IMG_1306.jpg';
import image1310 from './IMG_1310.jpg';
import image1311 from './IMG_1311.jpg';
import image1316 from './IMG_1316.jpg';
import image1323 from './IMG_1323.jpg';
import image1348 from './IMG_1348.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <h3>Today we went on a tour.</h3>
        <blockquote><p>We held wet and slimy fish. It felt disgusting!</p></blockquote>
        <p>It was a big heavy tuna.</p>
        <p>All the fisher-ladies were peeling prawns. All the fisher-men were working on the boat.</p>
        <blockquote><p>We went on top of the roof at the laundry. We had the best view in the city.</p></blockquote>
        <p>I tried using a big heavy iron.</p>
        <p>We went to a nice restaurant, we had chicken and mutton. I really liked it.</p>
        <p>We went to a zoo and we saw elephants, monkeys, crocodiles and hippos.</p>
        <p>We also saw a python.</p>
        <img src={ pythonImage } />
        <p><em>It crushes it's prey by squeezing</em></p>
        <p>We went home and had pizza for dinner.</p>
        <h3>The fishing port</h3>
        <img src={ image1176 } />
        <img src={ image1177 } />
        <img src={ image1178 } />
        <img src={ image1179 } />
        <img src={ image1187 } />
        <img src={ image1188 } />
        <img src={ snippetImage } />
        <img src={ image1190 } />
        <img src={ image1191 } />
        <img src={ image1194 } />
        <img src={ image1197 } />
        <img src={ image1199 } />
        <img src={ image1201 } />
        <img src={ image1203 } />
        <h3>The church with rifle stands</h3>
        <img src={ image1217 } />
        <img src={ image1218 } />
        <img src={ image1220 } />
        <h3>The laundry</h3>
        <img src={ image1221 } />
        <ReactPlayer url='https://youtu.be/Zf3aIov2Vy8' className="video" />
        <img src={ image1222 } />
        <img src={ image1226 } />
        <img src={ image1229 } />
        <img src={ image1230 } />
        <img src={ image1239 } />
        <img src={ image1246 } />
        <img src={ image1247 } />
        <img src={ image1250 } />
        <h3>The slums</h3>
        <img src={ image1261 } />
        <img src={ image1262 } />
        <img src={ image1263 } />
        <img src={ image1269 } />
        <img src={ image1272 } />
        <img src={ image1275 } />
        <img src={ image1280 } />
        <h3>Views around the city</h3>
        <img src={ image1290 } />
        <img src={ image1295 } />
        <img src={ image1296 } />
        <img src={ image1306 } />
        <img src={ image1310 } />
        <img src={ image1311 } />
        <p><em>Vultures circling above</em></p>
        <img src={ image1316 } />
        <img src={ image1323 } />
        <img src={ image1348 } />
        <p><em>Victoria Station</em></p>
        <img src={ image1034 } />
        <p><em>At the zoo</em></p>
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'A tour and the zoo in Bombay',
  date: '2017-04-16T20:30:00+05:30',
  path: '/bombay-tour-and-zoo/'
};
