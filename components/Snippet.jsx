import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune } from 'underscore.string'
import find from 'lodash/find'
import { rhythm, scale } from 'utils/typography'

class Snippet extends React.Component {

  getImgSrc() {
    const { post } = this.props;
    return `${ post.path }snippet.jpg`;
  }

  render () {
    const { post, title } = this.props
    if (!post) {
      return React.createElement('noscript', null)
    } else {
      // Create pruned version of the body.
      const html = post.data.body;
      const plainText = html && html.replace(/<[^>]*>/g, '').replace(/=YOUTUBESTART=.+=YOUTUBEEND=/g, '');
      const body = plainText && prune(plainText, 100);


      const src = this.getImgSrc();
      return (
        <div className="snippet"
          style={{
            backgroundImage: `url(${src})`
          }}
        >
          <Link
            style={{
              display: 'block',
              color: 'inherit'
            }}
            to={{
              pathname: prefixLink(post.path),
              query: {
                readNext: true,
              },
            }}
          >
            <label>{ title ? title : null  }{moment(post.data.date).format('LL')}</label>
            <h3
              style={{
                marginTop: rhythm(1/4),
                marginBottom: rhythm(2/4),
                color: 'white'
              }}
            >
              {post.data.title}
            </h3>
            { body && <p>{body}</p> }
          </Link>
        </div>
      );
    }
  }
}

Snippet.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Snippet
