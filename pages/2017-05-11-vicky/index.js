const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 3517
import snippetImage from './snippet.jpg';

import image3500 from './IMG_3500.jpg';
import image3501 from './IMG_3501.jpg';
import image3511 from './IMG_3511.jpg';



class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="VICKY">
        <p>The heat of Patna got to us and Elliot was developing a cold, so I went with World Vision alone today and left Will behind to have boy fun in the air-conditioned room.</p>
        <p>I was taken to a different slum and introduced to the staff and children of their children's club. The club is there to provide extra curricular activities, drama, dance, arts and vital life skills.</p>
        <p>The children were beautiful inside and out. They performed many songs and dances for me and I was so touched, I was almost in tears.</p>
        <p><em>Posted by Vicky (Mummy)</em></p>
        <img src={ image3500 } />
        <img src={ image3501 } />
        <img src={ image3511 } />
        <img src={ snippetImage } />
        <ReactPlayer url="https://youtu.be/kr7zWdN_ocE" className="video" />
      </BlogPost>
    );
  }
}

export default Post;

exports.data = {
  title: "Mummy's day with World Vision",
  date: "2017-05-11T20:30:00+05:30",
  path: "/2017-05-11-patna/"
};