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

    const firstSplit = (post.data.body || '').split('src=');

    if ( firstSplit.length < 2 ) { return null }

    return `${ post.path }${ firstSplit[1].split('"')[1] }`;
  }

  renderImg () {
    const src = this.getImgSrc();
    if ( !src ) { return null }

    return (<img
      src={ src }
      alt="preview"
      style={{
        float: 'left',
        marginRight: rhythm(1/2),
        marginTop: rhythm(1/4),
        marginBottom: rhythm(1/4),
        width: rhythm(4),
        height: rhythm(4)
      }}
      />);
  }

  render () {
    const { post } = this.props
    if (!post) {
      return React.createElement('noscript', null)
    } else {
      // Create pruned version of the body.
      const html = post.data.body
      const body = html && prune(html.replace(/<[^>]*>/g, ''), 200);
      const bodyShort = html && prune(html.replace(/<[^>]*>/g, ''), 100);


      const src = this.getImgSrc();
      if ( !!src ) {
        return (
          <div className="snippet"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              color: 'white'
            }}
          >
            <Link
              style={{
                display: 'block',
                color: 'inherit',
                textShadow: 'none'
              }}
              to={{
                pathname: prefixLink(post.path),
                query: {
                  readNext: true,
                },
              }}
            >
              <label>{moment(post.data.date).format('LL')}</label>
              <h3
                style={{
                  marginTop: rhythm(1/4),
                  marginBottom: rhythm(2/4),
                  color: 'white'
                }}
              >
                {post.data.title}
              </h3>
              { bodyShort && <p>{bodyShort}</p> }
            </Link>
          </div>
        );
      }



      return (
        <div className="snippet clearFix">
          <Link
            style={{
                display: 'block',
                color: 'inherit',
                textShadow: 'none'
              }}
            to={{
              pathname: prefixLink(post.path),
              query: {
                readNext: true,
              },
            }}
          >
            <label>{moment(post.data.date).format('LL')}</label>
            <h3
              style={{
                marginTop: rhythm(1/4),
                marginBottom: rhythm(2/4)
              }}
            >
              {post.data.title}
            </h3>
            { this.renderImg() }
            { body && <p>{body}</p> }
          </Link>
        </div>
      )
    }
  }
}

Snippet.propTypes = {
  post: React.PropTypes.object.isRequired
}

export default Snippet
