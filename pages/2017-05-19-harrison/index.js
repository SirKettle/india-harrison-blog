const React = require('react')
const ReactPlayer = require('react-player');
import BlogPost from 'wrappers/BlogPost';

// movies - 
import diaryImage from './diary.jpg';
import snippetImage from './snippet.jpg'; // 3702

class Post extends React.Component {
  render () {
    return (
      <BlogPost route={ this.props.route } author="HARRISON">
        <img src={ diaryImage } />
        <p>We stayed at Palolem beach<br />
        We had an ice cream each</p>
        <p>Eating food that is nice and mild<br />
        Releasing the millipede into the wild</p>
        <p>At the cafe, if you please<br />
        Lots of potatoes with some cheese</p>
        <p>Me and Elliot dived into the waves<br />
        While Mummy told Daddy to have a shave</p>
        <p>Having an ice cream was very nice<br />
        Lemon fresh was my kind of like</p>
        <p>A caveman lighthouse in the sand<br />
        With a castle and moat using just our hands</p>
        <p>The salty sea, it is serene<br />
        The palm trees are nice and green</p>
        <p>Ketchup wait wait wait<br />
        I don't really mean it with the cake</p>
        <img src={ snippetImage } />
        <ReactPlayer url="https://youtu.be/IClSqX7eOaU" className="video" />
      </BlogPost>
    );
  }
}

// import image2684 from './IMG_2684.jpg';
// import image2764 from './IMG_2764.jpg';
// import image2773 from './IMG_2773.jpg';
// import image2785 from './IMG_2785.jpg';
// import image2791 from './IMG_2791.jpg';
// import image2804 from './IMG_2804.jpg';
// import image3811 from './IMG_3811.jpg';
// import image3818 from './IMG_3818.jpg';
// import image3823 from './IMG_3823.jpg';
// import image3837 from './IMG_3837.jpg';
// import image3844 from './IMG_3844.jpg';
// import image3871 from './IMG_3871.jpg';
// import image3879 from './IMG_3879.jpg';
// import image3918 from './IMG_3918.jpg';
// import image3921 from './IMG_3921.jpg';
// import image3928 from './IMG_3928.jpg';
// import image3938 from './IMG_3938.jpg';
// import image3941 from './IMG_3941.jpg';
// import image3942 from './IMG_3942.jpg';

// class Post extends React.Component {
//   render () {
//     return (
//       <BlogPost route={ this.props.route } author="HARRISON">
//         <img src={ diaryImage } />
//         <p>We stayed at Palolem beach<br />
//         We had an ice cream each</p>
//         <p>Eating food that is nice and mild<br />
//         Releasing the millipede into the wild</p>
//         <p>At the cafe, if you please<br />
//         Lots of potatoes with some cheese</p>
//         <p>Me and Elliot dived into the waves<br />
//         While Mummy told Daddy to have a shave</p>
//         <p>Having an ice cream was very nice<br />
//         Lemon fresh was my kind of like</p>
//         <p>A caveman lighthouse in the sand<br />
//         With a castle and moat using just our hands</p>
//         <p>The salty sea, it is serene<br />
//         The palm trees are nice and green</p>
//         <p>Ketchup wait wait wait<br />
//         I don't really mean it with the cake</p>
//         <img src={ image2684 } />
//         <img src={ image2764 } />
//         <img src={ image2773 } />
//         <img src={ image2785 } />
//         <img src={ image2791 } />
//         <img src={ image2804 } />
//         <img src={ image3811 } />
//         <img src={ image3818 } />
//         <img src={ image3823 } />
//         <img src={ image3837 } />
//         <img src={ image3844 } />
//         <img src={ image3871 } />
//         <img src={ image3879 } />
//         <img src={ image3918 } />
//         <img src={ image3921 } />
//         <img src={ image3928 } />
//         <img src={ snippetImage } />
//         <img src={ image3938 } />
//         <ReactPlayer url="https://youtu.be/IClSqX7eOaU" className="video" />
//         <img src={ image3941 } />
//         <img src={ image3942 } />
//       </BlogPost>
//     );
//   }
// }

export default Post;

exports.data = {
  title: "Palolem beach - Goa",
  date: "2017-05-19T20:30:00+05:30",
  path: "/2017-05-19-palolem-goa/"
};