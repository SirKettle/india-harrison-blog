const React = require('react')
require('react-dates/css/variables.scss')
require('react-dates/css/styles.scss')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';
import snippetImage from './snippet.jpg';
import diaryImage from './diary.jpg';
import daddyandmeImage from './daddyandme.jpg';
import homestayDrawing from './homestay-view.jpg';
import elephantDrawing from './elephant-drawing.jpg';
import boatNigel from './boat-with-nigel.jpg';
import boatDad from './boat-with-dad.jpg';

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ snippetImage } />
        <img src={ diaryImage } />
        <ReactPlayer url='https://youtu.be/mC9eMhBpvvc' className="video" />
        <h3>Today we got to India!</h3>
        <p>We came home to our house. On the way, we saw an elephant in a lorry!</p>
        <img src={ elephantDrawing } />
        <ReactPlayer url='https://youtu.be/QWW_XzodShA' className="video" />
        <p>The taxi driver was called Stanley.</p>
        <img src={ homestayDrawing } />
        <p><em>My drawing of the hammock in the trees</em></p>
        <img src={ boatNigel } />
        <p><em>On our boat with my new friend Nigel</em></p>
        <img src={ boatDad } />
        <p><em>Boat with  Daddy</em></p>
        <p>At home, we were learning to sail. Then we had lunch, then we sailed to the beach, then we came home and had vegetables and rice.</p>
        <img src={ daddyandmeImage } />
      </BlogPost>
    )
  }
}

export default Post;

exports.data = {
  title: 'My first day in India',
  date: '2017-04-04T20:30:00+05:30',
  path: '/first-day-in-india/'
};
